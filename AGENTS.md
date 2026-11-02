# SDD — Spec Driven Development con IA

Este workspace usa la metodología **Spec Driven Development (SDD)**: toda implementación nace de una especificación escrita y aprobada antes de generar código. La IA no improvisa; construye contra un spec aprobado.

## Flujo obligatorio

```
0. sdd-init      -> (una vez por workspace) Bootstrap de carpetas, templates y este AGENTS.md
1. sdd-spec      -> Captura requisitos y crea specs/<proyecto>/
2. sdd-plan      -> Genera arquitectura + modelo de datos + plan de tareas desde requirements.md
3. [Gate humano] -> El humano aprueba el plan antes de construir
4. sdd-build     -> Implementa tarea por tarea siguiendo el plan
5. sdd-validate  -> Genera y corre tests derivados de los criterios de aceptación (gate objetivo/binario)
6. sdd-review    -> Verifica implementación + arquitectura contra el spec original, decisión final
```

**Ninguna implementación debe comenzar sin un spec aprobado en `specs/<proyecto>/`.**

## Modo del workspace: mono-repo o multi-repo

Este toolkit soporta ambos modos. El modo se detecta por la presencia de `workspace.manifest.json` en la raíz del workspace:

- **Existe `workspace.manifest.json`** → modo multi-repo: meta-repo que orquesta sub-repos git independientes. Ver "Arquitectura multi-repo" abajo.
- **No existe** → modo mono-repo: todo el código vive en la raíz del workspace. No se usan tags de scope ni commits separados por repo.

`sdd-init` decide el modo al bootstrapear un workspace nuevo. En proyectos ya avanzados, el modo debe coincidir con la estructura física real — no fuerces multi-repo sobre un proyecto que no está ya separado en sub-repos, ni mono-repo sobre uno que ya lo está.

## Estructura de carpetas

```
<workspace>/
├── AGENTS.md
├── workspace.manifest.json        # solo en modo multi-repo
├── compose.local.yml              # solo en modo multi-repo
├── setup.sh / setup.cmd           # solo en modo multi-repo
├── specs/
│   ├── _templates/                # plantillas base — nunca editar directamente
│   │   ├── requirements.md
│   │   ├── architecture.md
│   │   ├── data-model.md
│   │   ├── tasks.md
│   │   ├── validate.md
│   │   └── review.md
│   └── <proyecto>/                # una carpeta por implementación o cambio — historial inmutable
│       ├── requirements.md
│       ├── architecture.md
│       ├── data-model.md
│       ├── tasks.md
│       ├── validate.md
│       └── review.md
└── <código fuente o sub-repos>/
```

- `<proyecto>` en kebab-case, descriptivo del cambio real. Ejemplo ilustrativo del formato — no un valor a copiar literalmente: `transcripcion-quechua-v1`.
- Una carpeta nueva por cada implementación o cambio significativo — nunca se sobrescribe una carpeta anterior. Antes de iniciar un spec nuevo, revisar `specs/` en busca de features relacionados para no repetir decisiones ya descartadas.
- **Proyectos con documentación previa** (README extenso, `docs/`, notas de Obsidian, wiki interna): `sdd-spec` debe leerla como contexto antes de entrevistar. La entrevista se enfoca solo en el gap del cambio nuevo, no en redocumentar todo el sistema desde cero.

## Reglas de stack y arquitectura

- **Verificación de versiones en fuente oficial, obligatoria.** Antes de proponer cualquier tecnología en `architecture.md`, buscar la versión estable actual en la fuente oficial (docs, GitHub releases, npm/pypi registry). Nunca usar versiones de memoria — pueden estar desactualizadas. Documentar versión exacta, fecha de release y URL de la fuente consultada. Evitar versiones publicadas hace menos de 7 días.
- **Patrón idiomático primero.** Identificar el patrón nativo del framework+versión elegido (consultando su guía oficial) y usarlo como default. Desviarse (hexagonal, clean, ports & adapters, etc.) solo con un ADR-PATRON que justifique el beneficio concreto contra un requisito real del spec — si no hay justificación concreta, se vuelve al patrón idiomático.
- **Right-sizing.** La complejidad arquitectónica es proporcional a los requisitos, no a preferencias. CRUD/MVP → patrón idiomático sin capas extra. Dominio rico, múltiples transportes, o enterprise con varios bounded contexts → recién ahí se justifica una desviación.
- Prohibido introducir capas, abstracciones o dependencias no solicitadas en el spec.

## Reglas de ejecución

- Si durante `sdd-build` la realidad contradice el spec (API externa distinta, límite técnico no previsto), detener, documentar en `spec.md` una sección `## Cambios post-aprobación`, y notificar al humano antes de continuar. No improvisar en silencio.
- `sdd-validate` es un gate objetivo y binario: si un test derivado del spec falla, no se avanza a `sdd-review` bajo ninguna circunstancia. Se regresa a `sdd-build` con el detalle del fallo.
- `sdd-review` cita evidencia concreta (archivo:línea, commit) — nunca afirmaciones vagas. Es honesto: si algo no cumple el spec, se marca como tal, no se maquilla.
- Una vez `sdd-review` cierra un spec, `specs/<proyecto>/` queda como historial inmutable. Cambios posteriores abren una carpeta nueva, referenciando la anterior en su sección de contexto.

## Arquitectura multi-repo (solo si existe `workspace.manifest.json`)

Los specs viven centralizados en `specs/<proyecto>/` (fuente de verdad única), aunque la implementación se distribuya entre sub-repos git independientes listados en `workspace.manifest.json`.

### Tags de scope (obligatorios en `tasks.md` en modo multi-repo)

Cada tarea lleva un tag entre corchetes que indica en qué sub-repo se implementa. El mapping tag → carpeta se define en `workspace.manifest.json` (campo `tags` de cada repo); los skills lo leen dinámicamente.

- `[META]` es fijo: siempre mapea a la raíz del workspace, sin entrada en el manifest.
- No usar `[FULL]` para tareas de un solo repo — resérvalo exclusivamente para tareas que tocan 2+ repos.

### Política de commits cross-repo

- Una tarea = un commit por repo afectado, todos con el mismo ID de tarea (`feat: T03 ...`).
- Nunca mezclar archivos de 2+ repos en un solo commit — cada sub-repo tiene su propio `.git`.
- El meta-repo se commitea aparte para cambios en specs/docs/manifest (tag `[META]`).
- **En modo mono-repo esta sección no aplica**: un commit por tarea, sin tags de scope.

## Control de versiones

- La carpeta `specs/` **no debe subirse al repositorio**. Agregar al `.gitignore`:
  ```
  specs/
  ```
- Motivo: son notas de trabajo del flujo IA↔desarrollador, no documentación oficial — subirlas ensucia el historial de git y puede exponer contexto interno de negocio, incluso en repos privados.
- Trade-off: al ser local, ese historial no se comparte entre máquinas ni con el equipo. Si se necesita conservar decisiones clave a largo plazo, copiar solo los `review.md` finales cerrados a documentación interna (wiki, Notion) fuera del repo.
