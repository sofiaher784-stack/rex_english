// ========================================================
// FLUENCYOS: GIMNASIO DE AUDIO & LISTENING (SITUACIONES REALES)
// 10 Escenarios con Audios Nativos, Modo Oído Ciego y Desafíos
// ========================================================

const AUDIO_SITUATIONS = [
  {
    id: "audio-1",
    tag: "✈️ Aeropuerto & Viajes",
    accent: "British RP (Reino Unido)",
    title: "Heathrow Airport: Last-Minute Gate Change Announcement",
    level: "B1 - B2",
    duration: "1 min",
    context: "Anuncio urgente por megafonía en la terminal 5 sobre el cambio de puerta de embarque del vuelo con destino a Nueva York y verificación de equipaje.",
    audioText: "Attention all passengers on British Airways flight BA 178 to New York JFK. We have an immediate operational update. The departure gate has been relocated from Gate B-14 to Gate C-58 at the end of the satellite concourse. Due to a short turnaround time, final boarding will commence in exactly ten minutes. Passengers requiring special assistance, as well as priority passengers in Group 1 and 2, please proceed immediately via the transit train. Ensure your boarding passes and passports are ready for inspection.",
    traps: "Presta atención a la diferencia acústica entre 'B-14' (fourteen) y 'C-58'. Muchos hispanohablantes confunden 'B' y 'C' en megafonía ruidosa.",
    quiz: {
      q: "¿A qué puerta se trasladó el vuelo y en cuántos minutos comenzará el embarque?",
      opts: [
        { t: "A la puerta C-58 y el embarque inicia en 10 minutos", correct: true },
        { t: "A la puerta B-14 y el embarque inicia en 20 minutos", correct: false },
        { t: "A la puerta C-14 y el embarque ya terminó", correct: false },
        { t: "A la terminal 2 y el vuelo fue cancelado", correct: false }
      ]
    }
  },
  {
    id: "audio-2",
    tag: "💻 Tech & Startups",
    accent: "American West Coast (Silicon Valley)",
    title: "Engineering Daily Standup: Mitigating a Critical API Outage",
    level: "B2 - C1",
    duration: "1 min 15s",
    context: "Reunión matutina diaria de ingeniería donde un desarrollador senior explica un cuello de botella en la base de datos y negocia el cronograma de despliegue.",
    audioText: "Morning everyone. Quick update on yesterday's production incident. Around 4 PM, our authentication microservice experienced severe latency spikes due to an unexpected Redis cache invalidation loop. As a temporary workaround, we spun up three additional replicas and throttled non-critical background jobs. The root cause appears to be a race condition in the latest token refresh PR. I have already pushed a hotfix to our staging environment. If our automated integration test suite passes this morning, we are aiming to deploy to production by 11:30 AM.",
    traps: "Identifica la terminología técnica: 'latency spikes' (picos de latencia), 'workaround' (solución temporal) y 'hotfix' (parche urgente).",
    quiz: {
      q: "¿Cuál fue la solución temporal adoptada antes del parche definitivo?",
      opts: [
        { t: "Levantar tres réplicas adicionales y limitar tareas de fondo no críticas", correct: true },
        { t: "Apagar los servidores durante todo el fin de semana", correct: false },
        { t: "Borrar la base de datos completa de usuarios", correct: false },
        { t: "Pedirle a los usuarios que no inicien sesión", correct: false }
      ]
    }
  },
  {
    id: "audio-3",
    tag: "☕ Vida Cotidiana",
    accent: "New York Conversational (EE.UU.)",
    title: "Manhattan Specialty Coffee Shop: Complex Order & Fast Slang",
    level: "A2 - B1",
    duration: "55s",
    context: "Cliente pidiendo en una cafetería concurrida de Brooklyn; diálogo con ritmo rápido, opciones de leche vegetal y modismos locales.",
    audioText: "Hey there, good morning! What can I get started for you today? — Hi, could I please get a large iced oat milk latte with just one pump of vanilla syrup? And actually, make that decaf, please. — Sure thing. Would you like that with regular ice or light ice? — Light ice would be awesome, thanks! And could I also grab one of those warm almond croissants from the pastry case? — You got it. That'll be eight dollars and forty-five cents on the screen whenever you're ready to tap your card.",
    traps: "En inglés hablado rápido, 'What can I get started for you?' se pronuncia con enlaces de sonidos (/wət kən aɪ ɡet stɑːrtɪd/).",
    quiz: {
      q: "¿Cómo pidió su café el cliente en cuanto a hielo y cafeína?",
      opts: [
        { t: "Descafeinado y con poco hielo (light ice)", correct: true },
        { t: "Con cafeína doble y mucho hielo", correct: false },
        { t: "Caliente y con leche entera", correct: false },
        { t: "Té verde helado sin azúcar", correct: false }
      ]
    }
  },
  {
    id: "audio-4",
    tag: "🏥 Salud & Consultas",
    accent: "British Healthcare (Reino Unido)",
    title: "NHS General Practice: Describing Symptoms & Treatment Plan",
    level: "B1 - B2",
    duration: "1 min 10s",
    context: "Consulta médica donde el paciente describe dolores de cabeza recurrentes y la doctora indaga sobre hábitos y pauta un tratamiento.",
    audioText: "Good morning, please have a seat. What seems to be the trouble today? — Well doctor, for the past fortnight, I have been experiencing persistent, throbbing headaches, particularly around my temples and behind my left eye. They usually worsen in late afternoon. — I see. Have you noticed any visual disturbances, dizziness, or sensitivity to bright lights? — Occasionally a bit of nausea, yes, especially when staring at screens for long stretches. — Right. Let us check your blood pressure first, and then I will examine your eyes with the ophthalmoscope to rule out any acute pressure.",
    traps: "Palabra británica clave: 'fortnight' significa dos semanas (14 días). 'Throbbing' describe un dolor pulsante o palpitante.",
    quiz: {
      q: "¿Durante cuánto tiempo ha sufrido dolores de cabeza el paciente?",
      opts: [
        { t: "Durante las últimas dos semanas (fortnight)", correct: true },
        { t: "Solo desde esta mañana", correct: false },
        { t: "Desde hace más de tres años", correct: false },
        { t: "Únicamente los fines de semana", correct: false }
      ]
    }
  },
  {
    id: "audio-5",
    tag: "🎓 Certificación TOEFL",
    accent: "Academic American Lecture (EE.UU.)",
    title: "University Biology Lecture: Cephalopod Camouflage & Intelligence",
    level: "B2 - C1",
    duration: "1 min 25s",
    context: "Clase universitaria típica de TOEFL iBT Listening donde una profesora explica los cromatóforos y el sistema nervioso descentralizado de los pulpos.",
    audioText: "Today we are exploring the extraordinary neurobiology of cephalopods, specifically the common octopus. Unlike vertebrates whose central nervous system resides almost exclusively in the cranial cavity, approximately two-thirds of an octopus's neurons are distributed throughout its eight arms. This decentralized neural architecture means each individual arm can taste, touch, and autonomously coordinate intricate movements without requiring continuous micro-commands from the central brain. Furthermore, their skin is covered with thousands of specialized pigment cells called chromatophores, which expand and contract in milliseconds to replicate surrounding coral textures.",
    traps: "Estructura TOEFL: Observa cómo la profesora utiliza 'Unlike vertebrates...' para establecer un contraste fundamental que suele ser pregunta de examen.",
    quiz: {
      q: "¿Qué porcentaje aproximado de las neuronas de un pulpo se encuentran en sus brazos?",
      opts: [
        { t: "Aproximadamente dos tercios (two-thirds)", correct: true },
        { t: "Solo el diez por ciento", correct: false },
        { t: "El cien por ciento sin cerebro central", correct: false },
        { t: "Menos del cinco por ciento", correct: false }
      ]
    }
  },
  {
    id: "audio-6",
    tag: "💼 Entrevistas de Trabajo",
    accent: "Mid-Atlantic Corporate English",
    title: "Behavioral Job Interview: Resolving High-Pressure Team Conflicts",
    level: "B2 - C1",
    duration: "1 min 15s",
    context: "Pregunta comportamental en una entrevista ejecutiva sobre la resolución de discrepancias en plazos de entrega ajustados.",
    audioText: "Could you describe a situation where you had a fundamental disagreement with a colleague on a high-stakes project? — Absolutely. During our Q3 platform migration, our senior architect wanted to rebuild the database schema from scratch, which would have delayed the product launch by six weeks. Recognizing our contractual commitments, I scheduled a one-on-one working session. Instead of defending opposing positions, we mapped our deliverables against our core user needs. We agreed on an iterative hybrid approach: implementing essential schema patches now, while scheduling the comprehensive architectural overhaul for the following quarter. The launch delivered on schedule with zero customer disruption.",
    traps: "Método STAR (Situación, Tarea, Acción, Resultado): Observa cómo la respuesta pasa de la fricción a la colaboración y concluye con una métrica de éxito.",
    quiz: {
      q: "¿Qué solución de consenso acordó el candidato con el arquitecto del proyecto?",
      opts: [
        { t: "Un enfoque iterativo híbrido: parches esenciales ahora y la reestructuración profunda el próximo trimestre", correct: true },
        { t: "Cancelar el lanzamiento del producto indefinidamente", correct: false },
        { t: "Despedir al arquitecto del equipo", correct: false },
        { t: "Trabajar día y noche sin dormir durante seis semanas", correct: false }
      ]
    }
  },
  {
    id: "audio-7",
    tag: "🏨 Hospitalidad & Viajes",
    accent: "Australian English (Sídney)",
    title: "Boutique Hotel Front Desk: Resolving a Room & Noise Complaint",
    level: "B1 - B2",
    duration: "1 min",
    context: "Huésped diplomático expresando un inconveniente con el ruido del ascensor y aire acondicionado en la recepción de un hotel.",
    audioText: "G'day mate, how can I help you this morning? — Good morning. I'm staying in room 402, and unfortunately, I had quite a restless night. There appears to be a persistent mechanical humming from the adjacent elevator shaft, and the air conditioning unit seems to be rattling on higher fan speeds. — Oh, I'm truly sorry to hear that, Mr. Harrison. That is certainly not the tranquil experience we strive to provide. Let me check our availability. I can move you right now to a superior king suite on the eighth floor facing the quiet inner courtyard. We will also arrange complimentary breakfast for the remainder of your stay to make up for the inconvenience.",
    traps: "Modismo australiano: 'G'day mate' (saludo informal). Palabras clave de hospitalidad: 'complimentary' significa gratis/de cortesía.",
    quiz: {
      q: "¿Qué compensación ofrece el recepcionista además de cambiar de habitación?",
      opts: [
        { t: "Desayuno de cortesía (complimentary breakfast) durante el resto de su estancia", correct: true },
        { t: "Un billete de avión a Melbourne", correct: false },
        { t: "Cobrarle el doble por la nueva habitación", correct: false },
        { t: "Darle unos tapones para los oídos sin cambiarlo de habitación", correct: false }
      ]
    }
  },
  {
    id: "audio-8",
    tag: "🚇 Ciudad & Direcciones",
    accent: "London Underground (Reino Unido)",
    title: "Piccadilly Circus Tube Station: Inquiring About Transit Connections",
    level: "A2 - B1",
    duration: "1 min",
    context: "Pasajero consultando con un oficial de estación de metro de Londres sobre la forma más directa de llegar a la terminal 4 del aeropuerto de Heathrow.",
    audioText: "Excuse me, officer. Could you assist me with the quickest route to Heathrow Terminal 4? — Certainly, madam. You are currently on the Piccadilly Line concourse. You can board any westbound Piccadilly train indicating Heathrow as its terminus, but pay close attention: some trains branch off towards Uxbridge, while others loop via Terminal 4 before reaching Terminals 2 and 3. You want the train clearly displaying Terminal 4 on the front electronic board. The journey will take approximately fifty minutes. You can simply tap your contactless bank card at the yellow ticket gates.",
    traps: "Cuidado con los nombres de destinos que se bifurcan en el metro de Londres ('branch off towards Uxbridge').",
    quiz: {
      q: "¿Cuánto dura aproximadamente el trayecto en metro hasta la terminal 4?",
      opts: [
        { t: "Aproximadamente cincuenta minutos (fifty minutes)", correct: true },
        { t: "Quince minutos (fifteen minutes)", correct: false },
        { t: "Dos horas y media", correct: false },
        { t: "Solo cinco minutos", correct: false }
      ]
    }
  },
  {
    id: "audio-9",
    tag: "📊 Certificación IELTS",
    accent: "Cambridge Academic British",
    title: "IELTS Listening Section 4: Academic Monolog on Coral Reef Systems",
    level: "B2 - C1",
    duration: "1 min 30s",
    context: "Monólogo académico formal con lenguaje de señalización (signposting language) característico de la sección 4 del examen IELTS.",
    audioText: "In today's environmental sciences lecture, we will examine the synergistic degradation of scleractinian coral reefs induced by rising sea surface temperatures and ocean acidification. Firstly, it is critical to grasp the symbiotic relationship between scleractinian corals and microscopic algae known as zooxanthellae. These photosynthetic endosymbionts provide up to ninety percent of the coral polyp's metabolic energy requirements. However, when marine thermal thresholds exceed ambient norms by merely one to two degrees Celsius over prolonged durations, the coral hosts expel their algal symbionts in a stress reaction termed thermal bleaching. Turning now to ocean acidification, the uptake of anthropogenic carbon dioxide lowers oceanic pH, precipitating a catastrophic decline in carbonate ion availability essential for calcium carbonate calcification.",
    traps: "Marcadores discursivos académicos: 'Firstly, it is critical to grasp...', 'Turning now to...'. En IELTS, las respuestas suelen ser sustantivos clave.",
    quiz: {
      q: "¿Qué porcentaje de la energía metabólica del coral aportan las zooxantelas?",
      opts: [
        { t: "Hasta un noventa por ciento (up to ninety percent)", correct: true },
        { t: "Menos del diez por ciento", correct: false },
        { t: "Exactamente el cincuenta por ciento", correct: false },
        { t: "Cero por ciento, no tienen relación", correct: false }
      ]
    }
  },
  {
    id: "audio-10",
    tag: "📞 Soporte & Negocios",
    accent: "North American Customer Service",
    title: "Customer Support Line: Disputed Billing & Automatic Renewal",
    level: "B1 - B2",
    duration: "1 min 10s",
    context: "Llamada telefónica con agente de soporte al cliente para solicitar la cancelación y reembolso de una suscripción anual renovada automáticamente.",
    audioText: "Thank you for calling CloudFlow support. My name is Julian. May I have your full name and account email to get started? — Hi Julian, my name is Carlos Ramirez, email is cramirez@gmail.com. I noticed a charge of two hundred and forty dollars on my credit card this morning for an annual software renewal. I actually haven't used the service in several months and intended to cancel before the trial ended. — I completely understand, Carlos, let me pull up your account history right away. Yes, I see that your annual auto-renewal triggered at midnight. Since you contacted us within our forty-eight-hour grace window and have zero recent activity, I can process a full refund back to your original payment method immediately. It should reflect in your banking app within three to five business days.",
    traps: "Frases de servicio al cliente: 'pull up your account' (abrir el registro en pantalla), 'grace window' (plazo de gracia para reembolsos).",
    quiz: {
      q: "¿En cuántos días hábiles se reflejará el reembolso completo en la cuenta del cliente?",
      opts: [
        { t: "De tres a cinco días hábiles (three to five business days)", correct: true },
        { t: "En treinta días hábiles", correct: false },
        { t: "Nunca, las políticas no permiten reembolsos", correct: false },
        { t: "En veinticuatro horas garantizadas", correct: false }
      ]
    }
  },
  {
    id: "audio-11",
    tag: "🏛️ Debate Parlamentario C2",
    accent: "Received Pronunciation (RP) Oxford British",
    title: "Oxford Union Debate: Epistemic Sovereignty and Autonomous Intelligence",
    level: "C2 - Mastery",
    duration: "1 min 35s",
    context: "Discurso de apertura en el prestigioso debate de Oxford Union abordando la delegación de decisiones morales a agentes autónomos de inteligencia artificial.",
    audioText: "Mr. President, esteemed colleagues across the dispatch box. Under no circumstances ought this house to succumb to the seductive, yet profoundly fallacious premise that algorithmic efficiency constitutes moral agency. Seldom in the annals of intellectual history has a civilization so blithely outsourced its ethical stewardship to recursive mathematical optimizations. What our opponents euphemistically describe as 'objective calibration' is, in truth, an insidious abdication of human accountability. Not only does this imperil foundational tenets of jurisprudence, but it also precipitates an existential erosion of deliberative democracy. Were we to ratify such complacency tonight, history would judge us not as pioneers of progress, but as passive architects of our own obsolescence.",
    traps: "Estructuras C2 de inversión retórica: 'Under no circumstances ought this house...', 'Seldom in the annals...', 'Not only does this imperil...', condicional invertido 'Were we to ratify...'.",
    quiz: {
      q: "According to the speaker, what danger arises from outsourcing ethical stewardship to algorithmic optimization?",
      opts: [
        { t: "It amounts to an insidious abdication of human moral accountability and threatens jurisprudence", correct: true },
        { t: "Computers will consume excessive electrical power across the university campus", correct: false },
        { t: "Students will no longer learn mathematics in secondary school", correct: false },
        { t: "Debaters will be prohibited from speaking in the Oxford Union chamber", correct: false }
      ]
    }
  },
  {
    id: "audio-12",
    tag: "🌐 Diplomacia Global C2",
    accent: "Diplomatic International English",
    title: "Multilateral Peace Summit: Strategic Equilibrium and Treaty De-escalation",
    level: "C2 - Mastery",
    duration: "1 min 40s",
    context: "Declaración plenaria confidencial durante una cumbre diplomática multilateral para negociar un alto el fuego y verificación de desarme tecnológico.",
    audioText: "Excellencies, distinguished plenipotentiaries. The delicate détente forged over months of backchannel diplomacy now teeters on an untenable precipice. Let me be unequivocally unambiguous: piecemeal cosmetic concessions will no longer suffice. What is required is an immutable, legally binding framework providing multilateral verification of algorithmic cyber disarmament. Had both sovereign delegations adhered strictly to the Geneva protocols regarding grey-zone incursions, we would not find ourselves on the brink of kinetic escalation today. We implore both parties to transcend transient domestic jingoism and commit unreservedly to reciprocal strategic transparency before the diplomatic window closes irreversibly.",
    traps: "Léxico diplomático de alta precisión C2: 'delicate détente', 'untenable precipice', 'piecemeal cosmetic concessions', 'domestic jingoism', 'kinetic escalation'.",
    quiz: {
      q: "What concrete prerequisite does the plenipotentiary demand to avert kinetic escalation?",
      opts: [
        { t: "An immutable legally binding framework for multilateral verification of cyber disarmament", correct: true },
        { t: "An immediate monetary payment of fifty million dollars", correct: false },
        { t: "A complete suspension of all international diplomacy for two years", correct: false },
        { t: "A unilateral press release without mutual inspection", correct: false }
      ]
    }
  },
  {
    id: "audio-13",
    tag: "🌱 Saludos & Escuela",
    accent: "Clear Standard British (RP)",
    title: "Language Academy Orientation: Welcome and Basic Introductions",
    level: "A1 - Beginner",
    duration: "45s",
    context: "La profesora da la bienvenida a los estudiantes en su primer día de clase y explica los horarios y el aula.",
    audioText: "Good morning, everyone! Welcome to London English Academy. My name is Sarah, and I am your English teacher for this semester. Our class starts every morning at nine o'clock and finishes at twelve o'clock. We meet in Room 204 on the second floor. Please open your books to page ten. If you have any questions, you can always ask me. Let's have a wonderful first day together!",
    traps: "Presta atención a los números y la hora: 'nine o'clock' (9:00) y 'Room 204' (segundo piso).",
    quiz: {
      q: "¿A qué hora comienza la clase de inglés y en qué aula se reúnen?",
      opts: [
        { t: "A las nueve (9:00) en el aula 204", correct: true },
        { t: "A las doce (12:00) en el aula 10", correct: false },
        { t: "A las dos de la tarde en la biblioteca", correct: false },
        { t: "A las ocho y media en el auditorio", correct: false }
      ]
    }
  },
  {
    id: "audio-14",
    tag: "🥐 Cafetería & Compras",
    accent: "North American Friendly",
    title: "Morning Bakery Order: Fresh Bread and Simple Courtesy",
    level: "A1 - Beginner",
    duration: "40s",
    context: "Diálogo básico en una panadería local ordenando dos croissants y un café con leche para llevar.",
    audioText: "Hello! Good morning. Can I help you? — Hello! Yes, please. I would like two butter croissants and one coffee with milk, to go please. — Sure thing. Small, medium, or large coffee? — A medium coffee, please. How much is that? — That is six dollars and fifty cents in total. Would you like a receipt? — No, thank you. Have a nice day! — You too, goodbye!",
    traps: "Frases de cortesía elementales: 'I would like...', 'to go please' (para llevar) y 'How much is that?' (¿cuánto cuesta?).",
    quiz: {
      q: "¿Qué pidió el cliente y cuál es el precio total?",
      opts: [
        { t: "Dos croissants y un café mediano por seis dólares con cincuenta ($6.50)", correct: true },
        { t: "Tres panes y un té frío por diez dólares", correct: false },
        { t: "Una ensalada y un jugo de naranja por cuatro dólares", correct: false },
        { t: "Un café grande sin leche por dos dólares", correct: false }
      ]
    }
  }
];

if (typeof window !== 'undefined') window.AUDIO_SITUATIONS = AUDIO_SITUATIONS;
if (typeof module !== 'undefined' && module.exports) module.exports = { AUDIO_SITUATIONS };

