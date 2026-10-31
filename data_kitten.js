// ========================================================
// REXING: MOTOR DE AVATAR FELINO ABSTRACTO Y ELEGANTE (SVG DINÁMICO)
// Diseño heráldico y geométrico de alta gama con facetas, ojos almendrados y accesorios estilizados
// ========================================================

function generateKittenSvg(cfg) {
  const c = cfg || {};
  const coat = c.coat || 'orange_tabby';
  const acc = c.acc || 'scholar_cap';
  const uniqueId = 'cat_' + Math.random().toString(36).substring(2, 8);

  // Paletas de color premium para cada estilo de pelaje
  const coats = {
    orange_tabby: {
      bgLight: '#fef3c7',
      bgDark: '#fed7aa',
      ringColor: '#f59e0b',
      fur: '#ea580c',
      furLight: '#fb923c',
      furDark: '#9a3412',
      accent: '#c2410c',
      earInner: '#fca5a5',
      chest: '#ffedd5',
      eyes: '#059669',
      eyesLight: '#34d399',
      nose: '#e11d48',
      lineColor: '#7c2d12',
      whiskerColor: '#d97706',
      hasStripes: true,
      hasCalico: false,
      hasTuxedo: false
    },
    tuxedo_bw: {
      bgLight: '#f8fafc',
      bgDark: '#e2e8f0',
      ringColor: '#64748b',
      fur: '#18181b',
      furLight: '#3f3f46',
      furDark: '#09090b',
      accent: '#27272a',
      earInner: '#f472b6',
      chest: '#ffffff',
      eyes: '#10b981',
      eyesLight: '#6ee7b7',
      nose: '#fb7185',
      lineColor: '#09090b',
      whiskerColor: '#94a3b8',
      hasStripes: false,
      hasCalico: false,
      hasTuxedo: true
    },
    solid_black: {
      bgLight: '#1e1b4b',
      bgDark: '#0f172a',
      ringColor: '#818cf8',
      fur: '#18181b',
      furLight: '#3f3f46',
      furDark: '#09090b',
      accent: '#27272a',
      earInner: '#475569',
      chest: '#27272a',
      eyes: '#f59e0b',
      eyesLight: '#fde047',
      nose: '#18181b',
      lineColor: '#38bdf8',
      whiskerColor: '#64748b',
      hasStripes: false,
      hasCalico: false,
      hasTuxedo: false
    },
    solid_white: {
      bgLight: '#f0fdf4',
      bgDark: '#e0e7ff',
      ringColor: '#818cf8',
      fur: '#f8fafc',
      furLight: '#ffffff',
      furDark: '#cbd5e1',
      accent: '#e2e8f0',
      earInner: '#fbcfe8',
      chest: '#ffffff',
      eyes: '#0284c7',
      eyesLight: '#38bdf8',
      nose: '#f43f5e',
      lineColor: '#94a3b8',
      whiskerColor: '#cbd5e1',
      hasStripes: false,
      hasCalico: false,
      hasTuxedo: false
    },
    calico_3col: {
      bgLight: '#fef3c7',
      bgDark: '#f1f5f9',
      ringColor: '#d97706',
      fur: '#f8fafc',
      furLight: '#ffffff',
      furDark: '#e2e8f0',
      accent: '#ea580c',
      earInner: '#fbcfe8',
      chest: '#fff7ed',
      eyes: '#d97706',
      eyesLight: '#fbbf24',
      nose: '#e11d48',
      lineColor: '#78350f',
      whiskerColor: '#b45309',
      hasStripes: false,
      hasCalico: true,
      hasTuxedo: false
    },
    grey_tabby: {
      bgLight: '#f8fafc',
      bgDark: '#e2e8f0',
      ringColor: '#6366f1',
      fur: '#64748b',
      furLight: '#94a3b8',
      furDark: '#334155',
      accent: '#475569',
      earInner: '#fbcfe8',
      chest: '#f1f5f9',
      eyes: '#0d9488',
      eyesLight: '#2dd4bf',
      nose: '#fb7185',
      lineColor: '#1e293b',
      whiskerColor: '#94a3b8',
      hasStripes: true,
      hasCalico: false,
      hasTuxedo: false
    }
  };

  const p = coats[coat] || coats.orange_tabby;

  // Accesorios abstractos y elegantes
  let accSvg = '';
  if (acc === 'scholar_cap') {
    accSvg = `
      <!-- Birrete Geométrico & Elegante -->
      <g id="acc-scholar">
        <!-- Base de la corona del birrete -->
        <polygon points="40,24 60,24 58,29 42,29" fill="#09090b" opacity="0.8" />
        <!-- Rombo superior biselado -->
        <polygon points="50,7 80,18 50,29 20,18" fill="#18181b" stroke="#fbbf24" stroke-width="1.2" />
        <polygon points="50,7 80,18 50,29" fill="#27272a" opacity="0.5" />
        <!-- Botón de oro central -->
        <circle cx="50" cy="18" r="2.2" fill="#fbbf24" stroke="#d97706" stroke-width="0.8" />
        <!-- Cordón y Borla dorada flotante -->
        <path d="M 50 18 Q 68 21 72 32" stroke="#f59e0b" stroke-width="1.6" fill="none" stroke-linecap="round" />
        <polygon points="70,32 75,32 74,40 69,40" fill="#d97706" />
        <line x1="71.5" y1="40" x2="71.5" y2="43" stroke="#fbbf24" stroke-width="1.2" stroke-linecap="round" />
      </g>
    `;
  } else if (acc === 'glasses') {
    accSvg = `
      <!-- Gafas Intelectuales Finas de Alambre Dorado -->
      <g id="acc-glasses">
        <circle cx="36" cy="48" r="10" stroke="#f59e0b" stroke-width="1.8" fill="rgba(255,255,255,0.12)" />
        <circle cx="64" cy="48" r="10" stroke="#f59e0b" stroke-width="1.8" fill="rgba(255,255,255,0.12)" />
        <!-- Puente geométrico -->
        <path d="M 46 47 Q 50 44 54 47" stroke="#f59e0b" stroke-width="1.8" fill="none" />
        <!-- Patillas finas -->
        <line x1="26" y1="47" x2="18" y2="44" stroke="#f59e0b" stroke-width="1.4" stroke-linecap="round" />
        <line x1="74" y1="47" x2="82" y2="44" stroke="#f59e0b" stroke-width="1.4" stroke-linecap="round" />
        <!-- Reflejos elegantes -->
        <line x1="31" y1="43" x2="38" y2="52" stroke="#ffffff" stroke-width="1.2" opacity="0.6" stroke-linecap="round" />
        <line x1="59" y1="43" x2="66" y2="52" stroke="#ffffff" stroke-width="1.2" opacity="0.6" stroke-linecap="round" />
      </g>
    `;
  } else if (acc === 'sunglasses') {
    accSvg = `
      <!-- Gafas de Sol de Lujo Geométricas (Wayfarer Minimal) -->
      <g id="acc-sunglasses">
        <polygon points="23,43 47,43 44,56 26,56" fill="#09090b" stroke="#3b82f6" stroke-width="1.2" />
        <polygon points="53,43 77,43 74,56 56,56" fill="#09090b" stroke="#3b82f6" stroke-width="1.2" />
        <line x1="47" y1="45" x2="53" y2="45" stroke="#3b82f6" stroke-width="2.5" />
        <!-- Reflejo azul cian futurista -->
        <line x1="28" y1="45" x2="41" y2="54" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" opacity="0.8" />
        <line x1="58" y1="45" x2="71" y2="54" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round" opacity="0.8" />
      </g>
    `;
  } else if (acc === 'pink_bowtie') {
    accSvg = `
      <!-- Pajarita / Moño Origami de Seda -->
      <g id="acc-pink-bowtie">
        <polygon points="50,78 30,70 32,86 50,80" fill="#ec4899" stroke="#be185d" stroke-width="1" />
        <polygon points="50,78 30,70 50,80" fill="#f472b6" opacity="0.5" />
        <polygon points="50,78 70,70 68,86 50,80" fill="#ec4899" stroke="#be185d" stroke-width="1" />
        <polygon points="50,78 70,70 50,80" fill="#f472b6" opacity="0.5" />
        <!-- Nudo de diamante central -->
        <polygon points="50,75 54,79 50,83 46,79" fill="#be185d" stroke="#fbcfe8" stroke-width="0.8" />
      </g>
    `;
  } else if (acc === 'mustache') {
    accSvg = `
      <!-- Mostacho Geométrico Dalí / Aristócrata -->
      <g id="acc-mustache">
        <path d="M 50 63 Q 44 61 38 65 Q 32 68 28 64 Q 35 60 44 61 Q 50 62 50 63 Z" fill="#09090b" />
        <path d="M 50 63 Q 56 61 62 65 Q 68 68 72 64 Q 65 60 56 61 Q 50 62 50 63 Z" fill="#09090b" />
      </g>
    `;
  } else if (acc === 'headphones') {
    accSvg = `
      <!-- Auriculares Studio Titanium -->
      <g id="acc-headphones">
        <path d="M 19 50 C 16 18, 84 18, 81 50" stroke="#6366f1" stroke-width="3" fill="none" stroke-linecap="round" />
        <polygon points="12,42 22,44 20,58 10,56" fill="#1e1b4b" stroke="#818cf8" stroke-width="1" />
        <polygon points="88,42 78,44 80,58 90,56" fill="#1e1b4b" stroke="#818cf8" stroke-width="1" />
        <circle cx="16" cy="50" r="2.5" fill="#a5b4fc" />
        <circle cx="84" cy="50" r="2.5" fill="#a5b4fc" />
      </g>
    `;
  }

  // Marcas abstractas / facetas especiales
  let abstractMarkings = '';
  if (p.hasCalico) {
    abstractMarkings = `
      <!-- Faceta geométrica obsidiana en oreja izquierda -->
      <polygon points="38,27 20,15 28,42" fill="#18181b" opacity="0.9" />
      <!-- Faceta terracota en mejilla derecha -->
      <polygon points="62,27 80,15 76,45 60,35" fill="#ea580c" opacity="0.95" />
      <polygon points="78,45 66,48 70,62" fill="#ea580c" opacity="0.85" />
    `;
  } else if (p.hasStripes) {
    abstractMarkings = `
      <!-- Líneas geométricas de la frente (Chevron abstracto) -->
      <path d="M 46 25 L 50 31 L 54 25" stroke="${p.accent}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 44 32 L 50 38 L 56 32" stroke="${p.accent}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Rayas angulares en sienes -->
      <line x1="26" y1="41" x2="33" y2="43" stroke="${p.accent}" stroke-width="1.8" stroke-linecap="round" />
      <line x1="74" y1="41" x2="67" y2="43" stroke="${p.accent}" stroke-width="1.8" stroke-linecap="round" />
    `;
  }

  return `
    <svg viewBox="0 0 100 100" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="${uniqueId}_bg" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stop-color="${p.bgLight}" />
          <stop offset="100%" stop-color="${p.bgDark}" />
        </radialGradient>
        <linearGradient id="${uniqueId}_fur" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stop-color="${p.furLight}" />
          <stop offset="50%" stop-color="${p.fur}" />
          <stop offset="100%" stop-color="${p.furDark}" />
        </linearGradient>
        <linearGradient id="${uniqueId}_eyes" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${p.eyesLight}" />
          <stop offset="100%" stop-color="${p.eyes}" />
        </linearGradient>
        <linearGradient id="${uniqueId}_gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde68a" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
      </defs>

      <!-- Fondo Circular con Halo de Prestigio -->
      <circle cx="50" cy="50" r="48" fill="url(#${uniqueId}_bg)" stroke="${p.ringColor}" stroke-width="1.2" />
      <circle cx="50" cy="50" r="45.5" fill="none" stroke="${p.ringColor}" stroke-width="0.5" opacity="0.4" stroke-dasharray="2 3" />

      <!-- TORSO Y PECHERA GEOMÉTRICA (SILUETA MINIMALISTA) -->
      <path d="M 28 98 C 30 78 40 70 50 70 C 60 70 70 78 72 98 Z" fill="${p.furDark}" opacity="0.6" />
      <path d="M 33 98 C 34 82 42 74 50 74 C 58 74 66 82 67 98 Z" fill="url(#${uniqueId}_fur)" />
      <!-- Pechera origami / Faceta V -->
      <polygon points="50,72 42,88 50,97 58,88" fill="${p.chest}" opacity="${p.hasTuxedo ? '1' : '0.85'}" />
      <polygon points="50,72 42,88 50,97" fill="#000000" opacity="0.08" />

      <!-- OREJAS GEOMÉTRICAS ESCULPIDAS (LÍNEAS ELEGANTES) -->
      <!-- Oreja Izquierda -->
      <polygon points="21,44 14,12 40,26" fill="${p.furDark}" />
      <polygon points="23,41 17,16 38,27" fill="url(#${uniqueId}_fur)" />
      <!-- Faceta interior de la oreja -->
      <polygon points="24,37 19,21 35,28" fill="${p.earInner}" opacity="0.9" />

      <!-- Oreja Derecha -->
      <polygon points="79,44 86,12 60,26" fill="${p.furDark}" />
      <polygon points="77,41 83,16 62,27" fill="url(#${uniqueId}_fur)" />
      <!-- Faceta interior de la oreja -->
      <polygon points="76,37 81,21 65,28" fill="${p.earInner}" opacity="0.9" />

      <!-- CABEZA FACETADA / ORIGAMI LUXURY -->
      <!-- Contorno principal de la cabeza -->
      <polygon points="50,23 63,26 78,39 82,52 69,65 50,73 31,65 18,52 22,39 37,26" fill="url(#${uniqueId}_fur)" stroke="${p.lineColor}" stroke-width="1.2" stroke-linejoin="round" />

      <!-- Facetas de sombreado y volumen abstracto -->
      <!-- Sombra pómulo izquierdo -->
      <polygon points="22,39 37,26 34,48 18,52" fill="${p.furDark}" opacity="0.3" />
      <polygon points="18,52 34,48 41,63 31,65" fill="${p.furDark}" opacity="0.45" />
      
      <!-- Luz pómulo derecho -->
      <polygon points="78,39 63,26 66,48 82,52" fill="${p.furLight}" opacity="0.35" />
      <polygon points="82,52 66,48 59,63 69,65" fill="${p.furDark}" opacity="0.25" />

      <!-- Plano frontal / frente -->
      <polygon points="50,23 37,26 43,47 50,47" fill="${p.furLight}" opacity="0.25" />
      <polygon points="50,23 63,26 57,47 50,47" fill="${p.furDark}" opacity="0.15" />

      <!-- Marcas de pelaje abstractas (si aplica) -->
      ${abstractMarkings}

      <!-- HOCICO Y MENTÓN ESCULPIDO -->
      <polygon points="50,56 42,65 50,71 58,65" fill="${p.chest}" opacity="0.95" />
      <polygon points="50,56 42,65 50,71" fill="#000000" opacity="0.08" />

      <!-- NARICITA GEOMÉTRICA DE RUBÍ/ÓPALO -->
      <polygon points="46.5,56 53.5,56 50,60" fill="${p.nose}" />
      <path d="M 50 60 L 50 63.5" stroke="${p.lineColor}" stroke-width="1.2" stroke-linecap="round" />
      <path d="M 46 64.5 Q 48 66 50 63.5 Q 52 66 54 64.5" stroke="${p.lineColor}" stroke-width="1.2" fill="none" stroke-linecap="round" />

      <!-- OJOS ALMENDRADOS MAGNÉTICOS Y SOFISTICADOS -->
      <!-- Ojo Izquierdo -->
      <g id="eye-left">
        <!-- Cuenca exterior -->
        <path d="M 28 47 C 32 42, 42 43, 44 48 C 41 52.5, 31 52.5, 28 47 Z" fill="#09090b" />
        <!-- Iris esmeralda brillante -->
        <path d="M 29.5 47 C 33 43.5, 40.5 44.5, 42.5 48 C 40 51.5, 32.5 51.5, 29.5 47 Z" fill="url(#${uniqueId}_eyes)" />
        <!-- Pupila vertical en diamante felino -->
        <polygon points="36,44 37.5,47.5 36,51 34.5,47.5" fill="#09090b" />
        <!-- Destello de joya -->
        <polygon points="35,46 36.5,45.5 36,47 34.5,46.5" fill="#ffffff" />
      </g>

      <!-- Ojo Derecho -->
      <g id="eye-right">
        <!-- Cuenca exterior -->
        <path d="M 72 47 C 68 42, 58 43, 56 48 C 59 52.5, 69 52.5, 72 47 Z" fill="#09090b" />
        <!-- Iris esmeralda brillante -->
        <path d="M 70.5 47 C 67 43.5, 59.5 44.5, 57.5 48 C 60 51.5, 67.5 51.5, 70.5 47 Z" fill="url(#${uniqueId}_eyes)" />
        <!-- Pupila vertical en diamante felino -->
        <polygon points="64,44 65.5,47.5 64,51 62.5,47.5" fill="#09090b" />
        <!-- Destello de joya -->
        <polygon points="63,46 64.5,45.5 64,47 62.5,46.5" fill="#ffffff" />
      </g>

      <!-- BIGOTES FINOS Y MINIMALISTAS -->
      <line x1="26" y1="58" x2="8" y2="54" stroke="${p.whiskerColor}" stroke-width="0.9" opacity="0.65" stroke-linecap="round" />
      <line x1="24" y1="62" x2="6" y2="63" stroke="${p.whiskerColor}" stroke-width="0.9" opacity="0.65" stroke-linecap="round" />
      <line x1="26" y1="66" x2="9" y2="72" stroke="${p.whiskerColor}" stroke-width="0.9" opacity="0.65" stroke-linecap="round" />

      <line x1="74" y1="58" x2="92" y2="54" stroke="${p.whiskerColor}" stroke-width="0.9" opacity="0.65" stroke-linecap="round" />
      <line x1="76" y1="62" x2="94" y2="63" stroke="${p.whiskerColor}" stroke-width="0.9" opacity="0.65" stroke-linecap="round" />
      <line x1="74" y1="66" x2="91" y2="72" stroke="${p.whiskerColor}" stroke-width="0.9" opacity="0.65" stroke-linecap="round" />

      <!-- ACCESORIO SUPERPUESTO ESTILIZADO -->
      ${accSvg}
    </svg>
  `;
}

function detectGenderByName(name) {
  if (!name) return 'male';
  const clean = name.toLowerCase().trim();

  // Nombres y términos masculinos explícitos
  const maleKeywords = [
    'adan', 'adán', 'adam', 'carlos', 'juan', 'david', 'alex', 'mario', 'mariano',
    'jose', 'josé', 'luis', 'miguel', 'antonio', 'pedro', 'jorge', 'alberto',
    'ricardo', 'fernando', 'javier', 'roberto', 'diego', 'sergio', 'manuel',
    'whiskers', 'scholar', 'admin', 'prof', 'prof.', 'profesor', 'hombre', 'varon', 'varón',
    'boy', 'man', 'mr', 'sir', 'coach', 'student', 'alumno'
  ];

  // Nombres y términos femeninos explícitos
  const femaleKeywords = [
    'emma', 'coach emma', 'maria', 'maría', 'laura', 'ana', 'sofia', 'sofía',
    'elena', 'carmen', 'lucia', 'lucía', 'isabella', 'valeria', 'camila', 'paula',
    'daniela', 'andrea', 'claudia', 'patricia', 'marta', 'sara', 'julia', 'rosa',
    'beatriz', 'natalia', 'gabriela', 'silvia', 'monica', 'mónica', 'victoria',
    'diana', 'carolina', 'alejandra', 'lorena', 'jessica', 'clara', 'raquel',
    'eva', 'alicia', 'irene', 'gloria', 'teresa', 'olga', 'lourdes', 'vanessa',
    'miss', 'mrs', 'ms', 'profesora', 'docente', 'mujer', 'chica', 'girl', 'woman',
    'lady', 'sarah', 'emily', 'ashley', 'amanda', 'elizabeth', 'hannah', 'chloe',
    'jennifer', 'stephanie', 'nicole', 'rebecca', 'mary', 'linda', 'susan', 'karen',
    'nancy', 'lisa', 'betty', 'margaret', 'sandra', 'kimberly', 'donna', 'michelle'
  ];

  const words = clean.split(/[\s,._-]+/);
  
  // Prioridad 1: Coincidencia exacta de palabras masculinas
  for (const w of words) {
    if (maleKeywords.includes(w)) return 'male';
  }

  // Prioridad 2: Coincidencia exacta de palabras o frases femeninas
  for (const w of words) {
    if (femaleKeywords.includes(w)) return 'female';
  }
  for (const f of femaleKeywords) {
    if (f.includes(' ') && clean.includes(f)) return 'female';
  }

  // Regla general en nombres hispanos terminados en 'a' (con excepciones masculinas)
  const first = words[0];
  const maleEndsWithA = ['joshua', 'luca', 'ezra', 'elisha', 'sasha', 'dakota', 'adan', 'adán'];
  if (first && first.length > 2 && first.endsWith('a') && !maleEndsWithA.includes(first)) {
    return 'female';
  }

  return 'male';
}

function getCatAvatarHtml(catCfg, sizeClass = "w-11 h-11", userName = "") {
  const profile = (typeof userProfile !== 'undefined') ? userProfile : null;
  const cfg = catCfg || (profile ? profile.cat : null) || {
    photo: 'auto',
    border: 'gold',
    skill: '⚡ Pronunciación Nativa & Fonética Impecable'
  };

  const borders = {
    gold: "border-2 border-amber-400 ring-2 ring-amber-300 shadow-md",
    indigo: "border-2 border-indigo-500 ring-2 ring-indigo-300 shadow-md",
    emerald: "border-2 border-emerald-500 ring-2 ring-emerald-300 shadow-md",
    purple: "border-2 border-purple-500 ring-2 ring-purple-300 shadow-md",
    flame: "border-2 border-rose-500 ring-2 ring-rose-300 shadow-md"
  };

  const borderClass = borders[cfg.border] || borders.gold;
  const nameToCheck = userName || (profile ? profile.name : '') || cfg.name || '';

  // Determinar la foto a usar: SOLO 'auto', 'male' o 'female' (se eliminó la alternativa de gato)
  let effectivePhoto = cfg.photo || 'auto';
  if (effectivePhoto === 'auto' || effectivePhoto === 'cat') {
    effectivePhoto = detectGenderByName(nameToCheck);
  }

  if (effectivePhoto === 'female') {
    return `
      <div class="relative ${sizeClass} rounded-full ${borderClass} bg-purple-50 overflow-hidden flex-shrink-0 flex items-center justify-center">
        <img src="avatar_female.jpg" alt="Foto Mujer" class="w-full h-full object-cover rounded-full" />
      </div>
    `;
  }

  // Por defecto absoluto: Foto Varón
  return `
    <div class="relative ${sizeClass} rounded-full ${borderClass} bg-blue-50 overflow-hidden flex-shrink-0 flex items-center justify-center">
      <img src="avatar_male.jpg" alt="Foto Varón" class="w-full h-full object-cover rounded-full" />
    </div>
  `;
}

function createCatSvg(catCfg) {
  return generateKittenSvg(catCfg);
}

if (typeof window !== 'undefined') {
  window.detectGenderByName = detectGenderByName;
  window.generateKittenSvg = generateKittenSvg;
  window.getCatAvatarHtml = getCatAvatarHtml;
  window.createCatSvg = createCatSvg;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { detectGenderByName, generateKittenSvg, getCatAvatarHtml, createCatSvg };
}
