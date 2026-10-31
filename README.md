# Rexing 🌟
### Plataforma Inteligente de Dominio de Inglés (A1 - C1)

Rexing es una plataforma web completa e interactiva diseñada para el aprendizaje y dominio del idioma inglés desde niveles básicos (A1) hasta avanzados (C1/C2), con preparación especializada para exámenes internacionales como **IELTS** y **TOEFL**.

---

## 🚀 Características Principales

1. **Control de Acceso & Perfiles de Usuario**:
   - Selector visual de roles de prueba: **Administrador**, **Docente** y **Estudiante**.
   - Acceso seguro autenticado mediante API REST en Node.js y sincronización de sesiones con persistencia local.
   - Fotos de perfil adaptativas con detección automática por género de nombre (Varón / Mujer) o selección manual.

2. **Plan Diario & "Hoy Toca"**:
   - Rutinas diarias estructuradas de lectura, audios, vocabulario y conversación.
   - Sincronización de días de estudio, calendario y recordatorios.

3. **Biblioteca de Lecturas Graduadas por Nivel**:
   - Textos desde A1 hasta C2 con glosarios integrados y traducción instantánea.
   - Modo de comprensión analítica profunda.

4. **Gimnasio de Audio & Pronunciación**:
   - Audios con control de velocidad (0.75x a 1.25x), transcripciones interactivas y ejercicios fonéticos.

5. **Chat IA de Conversación & Corrección en Vivo**:
   - Práctica conversacional interactiva con retroalimentación inmediata, laboratorio de auto-corrección gramatical y soporte de voz.

6. **Tablero de Vocabulario & Gramática A1-C2**:
   - Tarjetas mnemotécnicas, sintaxis académica, conectores formales y registro de fluidez.

7. **Medición de Progreso & Objetivos**:
   - Métricas CEFR en tiempo real, rachas de estudio, XP acumulados e insignias de maestría lingüística.

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 14 o superior).

### Pasos para iniciar

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/sofiaher784-stack/rex_english.git
   cd rex_english
   ```

2. **Iniciar el servidor:**
   ```bash
   npm start
   ```
   *O alternativamente con Node.js:*
   ```bash
   node server.js
   ```

3. **Abrir en el navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

---

## 🔑 Credenciales de Acceso

| Perfil | Usuario / Correo | Contraseña | Nivel Base |
| :--- | :--- | :--- | :--- |
| **Administrador** | `admin@fluencyos.com` | `Fluency2026!` | B2 - C1 |
| **Docente** | `teacher@fluencyos.com` | `Teacher2026!` | C1 |
| **Estudiante** | `estudiante@fluencyos.com` | `Ingles123*` | A2 - B1 |

---

## 📂 Estructura del Proyecto

```text
rex_english/
├── avatar_female.jpg    # Avatar fotográfico femenino
├── avatar_male.jpg      # Avatar fotográfico masculino
├── data_audio.js        # Base de datos de ejercicios de audio y fonética
├── data_kitten.js       # Motor de detección de género y renderizado de avatar
├── data_readings.js     # Colección de lecturas graduadas A1 - C2
├── index.html           # Interfaz principal de la plataforma Rexing
├── package.json         # Configuración y scripts del proyecto
├── server.js            # Servidor HTTP estático y API de autenticación
└── README.md            # Documentación general
```
