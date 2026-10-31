// ========================================================
// FLUENCYOS: BIBLIOTECA EXTENDIDA DE LECTURAS GRADUADAS
// 30 Lecturas exhaustivas (5 por nivel: A1, A2, B1, B2, C1, EXAM)
// ========================================================

const GRADED_READINGS = [
  // ------------------------------------------------------
  // NIVEL A1 (5 Lecturas)
  // ------------------------------------------------------
  {
    id: "read-a1-1",
    level: "A1",
    category: "Vida Cotidiana & Rutinas",
    title: "A Day in London: Coffee, Parks and Books",
    readTime: "3 min",
    paragraphs: [
      "My name is Leo and I live in central London. Every morning, I wake up at 7:00 AM when the morning sun shines through my bedroom window. I make a fresh cup of coffee and eat warm toast with butter and strawberry jam.",
      "At 8:30 AM, I walk to the red bus stop and take bus number 14 to the historic public library. London has many beautiful green parks, such as Hyde Park and Regent's Park. In the afternoon, people walk their friendly dogs, ride bicycles, and read interesting books under the tall trees.",
      "Around 5:00 PM, I visit a small local supermarket to buy vegetables, fresh pasta, and fruit. In the evening, I cook dinner with my friendly roommate Marco. We talk about our daily routine and listen to quiet music.",
      "Before going to sleep, I write a short entry in my personal diary in English. It is a simple life, but living in London always feels exciting, safe, and full of pleasant surprises."
    ],
    keywords: ["Fresh cup", "Public library", "Roommate", "Tall trees", "Daily routine"],
    quiz: {
      q: "¿A qué hora se despierta Leo y qué toma para desayunar?",
      opts: [
        { t: "A las 7:00 AM con café fresco y tostadas", correct: true },
        { t: "A las 8:30 AM con té y galletas", correct: false },
        { t: "A las 9:00 AM en un restaurante", correct: false },
        { t: "A las 6:00 AM sin desayunar", correct: false }
      ]
    }
  },
  {
    id: "read-a1-2",
    level: "A1",
    category: "Trabajo & Primer Empleo",
    title: "My First Day at an International Office",
    readTime: "3 min",
    paragraphs: [
      "Today is a very special day for Elena. It is her first day working at an international software company in Manchester. She puts on her dark blue jacket, grabs her black backpack, and leaves home early.",
      "When Elena arrives at the modern building, the receptionist gives her an identification card. Her new manager, Sarah, greets her with a warm smile and introduces her to the international engineering team.",
      "The office has big windows, comfortable chairs, and a kitchen with free tea and fresh fruit. Elena receives a new silver laptop and sets up her official email account.",
      "During lunch, her colleagues from Spain, Japan, and Canada sit together. They speak English slowly and clearly so everyone can understand. Elena feels welcome and excited about her future here."
    ],
    keywords: ["First day", "Warm smile", "Engineering team", "Colleagues", "Excited"],
    quiz: {
      q: "¿Cómo se comunican los colegas de Elena durante el almuerzo?",
      opts: [
        { t: "Hablan en inglés despacio y claro", correct: true },
        { t: "Solo hablan en español", correct: false },
        { t: "No hablan entre ellos", correct: false },
        { t: "Utilizan señas únicamente", correct: false }
      ]
    }
  },
  {
    id: "read-a1-3",
    level: "A1",
    category: "Compras & Ciudad",
    title: "The Weekend Market in Camden Town",
    readTime: "3 min",
    paragraphs: [
      "On Saturdays, Camden Market is one of the most colorful and lively places in London. Hundreds of visitors walk along the canal to discover unusual clothes, handmade jewelry, and antique clocks.",
      "The smell of delicious street food fills the air. You can find Italian pizza, Mexican tacos, Thai noodles, and traditional British fish and chips. Many people buy their lunch and sit next to the water.",
      "Talented street musicians play acoustic guitars near the bridge. Children dance to the music while painters create quick portraits of smiling tourists.",
      "Visiting the market is also a fantastic way to practice basic English. You can ask stall owners: 'How much is this?' and 'Can I pay with card?'. Everyone is patient and cheerful."
    ],
    keywords: ["Weekend market", "Street food", "Handmade jewelry", "Musicians", "Basic English"],
    quiz: {
      q: "¿Qué frase útil en inglés se menciona para practicar en el mercado?",
      opts: [
        { t: "'How much is this?' y 'Can I pay with card?'", correct: true },
        { t: "'Where is the train station?'", correct: false },
        { t: "'What time does the plane leave?'", correct: false },
        { t: "'I want to cancel my ticket'", correct: false }
      ]
    }
  },
  {
    id: "read-a1-4",
    level: "A1",
    category: "Comida & Amistad",
    title: "Cooking a Traditional Sunday Dinner",
    readTime: "3 min",
    paragraphs: [
      "In many British homes, Sunday afternoon is dedicated to cooking a warm roast dinner. Today, Tom and his friends are preparing a family recipe in their cozy kitchen.",
      "First, Tom washes fresh potatoes and carrots. His friend Sophie prepares roast chicken with rosemary and garlic in the oven. The kitchen smells wonderful after only thirty minutes.",
      "While the main dish is baking, David sets the wooden table with clean glasses, white plates, and silver cutlery. They pour cold water and apple juice for everyone.",
      "When the food is ready, they sit together and say 'cheers!'. Sharing homemade food with good friends creates happy memories and makes everyone feel comfortable."
    ],
    keywords: ["Sunday dinner", "Roast chicken", "Clean glasses", "Sets the table", "Happy memories"],
    quiz: {
      q: "¿Qué plato principal preparan Tom y sus amigos?",
      opts: [
        { t: "Pollo asado al horno con romero y ajo", correct: true },
        { t: "Hamburguesas con papas fritas", correct: false },
        { t: "Sopa instantánea de sobre", correct: false },
        { t: "Pescado crudo con ensalada", correct: false }
      ]
    }
  },
  {
    id: "read-a1-5",
    level: "A1",
    category: "Viajes Cortos & Naturaleza",
    title: "A Sunny Afternoon at Brighton Beach",
    readTime: "3 min",
    paragraphs: [
      "Brighton is a charming seaside town located only one hour south of London by fast train. On sunny weekends, thousands of students travel there to breathe fresh sea air.",
      "Unlike tropical sandy beaches, Brighton Beach is famous for its smooth pebble stones. People rent striped wooden deckchairs and watch the white seagulls flying over the blue water.",
      "Along the famous Victorian pier, visitors enjoy amusement rides, eat vanilla ice cream, and buy sweet donuts. The sea breeze feels cool and refreshing under the bright sun.",
      "As evening arrives, the sky turns orange and pink. Taking a quiet walk along the coast is the perfect way to relax and recharge before another busy school week."
    ],
    keywords: ["Seaside town", "Pebble stones", "Deckchairs", "Sea breeze", "Coast walk"],
    quiz: {
      q: "¿Por qué es famosa la playa de Brighton según la lectura?",
      opts: [
        { t: "Por sus piedras redondas (pebbles) y su muelle victoriano", correct: true },
        { t: "Por tener arena blanca tropical", correct: false },
        { t: "Por tener nieve en verano", correct: false },
        { t: "Por estar completamente vacía", correct: false }
      ]
    }
  },

  // ------------------------------------------------------
  // NIVEL A2 (5 Lecturas)
  // ------------------------------------------------------
  {
    id: "read-a2-1",
    level: "A2",
    category: "Viajes & Experiencias Pasadas",
    title: "An Unforgettable Journey Across Scotland",
    readTime: "4 min",
    paragraphs: [
      "Last summer, my sister Clara and I traveled across the Scottish Highlands by train. We packed our backpacks quickly because our flight arrived later than expected due to heavy fog.",
      "During the scenic train ride from Glasgow to Fort William, we saw breathtaking green mountains, deep blue lochs, and historic stone castles. The weather was rainy, but the dramatic clouds created an enchanting atmosphere.",
      "When we finally reached our destination, we stayed at a traditional bed and breakfast run by a kind elderly couple. The owner welcomed us with hot Scottish tea and told fascinating stories about regional folklore.",
      "The next morning, we hiked through the silent valley of Glen Coe. Even though my hiking boots were muddy, feeling the crisp highland wind made me realize that stepping outside your comfort zone is truly rewarding."
    ],
    keywords: ["Breathtaking", "Historic castles", "Arrived later", "Folklore", "Comfort zone"],
    quiz: {
      q: "¿Qué experiencia tuvieron Clara y su hermano en Glen Coe?",
      opts: [
        { t: "Caminaron por el valle y sintieron el viento de las tierras altas", correct: true },
        { t: "Perdieron sus mochilas en la estación", correct: false },
        { t: "Se quedaron encerrados en el hotel por la lluvia", correct: false },
        { t: "Compraron un auto nuevo", correct: false }
      ]
    }
  },
  {
    id: "read-a2-2",
    level: "A2",
    category: "Superación & Trabajo",
    title: "Overcoming Fear: My First English Presentation",
    readTime: "4 min",
    paragraphs: [
      "Public speaking can be intimidating in any language, but delivering a presentation in a second language often feels terrifying. That was exactly my situation last month when my team leader asked me to present our quarterly report.",
      "For two weeks, I practiced every evening in front of my mirror. I recorded my voice on my smartphone to check my pronunciation and timing. I also wrote key transitional phrases on small flashcards, such as 'Moving on to the next slide' and 'In conclusion'.",
      "When Monday morning arrived, my heart beat rapidly as I stood in front of twenty international colleagues. However, once I started speaking, the hours of practice took over.",
      "The presentation lasted fifteen minutes, and my manager complimented my clear slides and structured arguments. That experience taught me that preparation beats anxiety every single time."
    ],
    keywords: ["Intimidating", "Quarterly report", "Flashcards", "Took over", "Preparation beats anxiety"],
    quiz: {
      q: "¿Qué estrategia utilizó el narrador para preparar su presentación?",
      opts: [
        { t: "Grabó su voz en el móvil y practicó con tarjetas frente al espejo", correct: true },
        { t: "Leyó un texto improvisado sin ensayar", correct: false },
        { t: "Le pidió a un compañero que hiciera la presentación por él", correct: false },
        { t: "Memorizó un diccionario completo", correct: false }
      ]
    }
  },
  {
    id: "read-a2-3",
    level: "A2",
    category: "Comunidad & Medio Ambiente",
    title: "The Magic of Urban Community Gardens",
    readTime: "4 min",
    paragraphs: [
      "In big crowded cities like New York and Berlin, concrete buildings and noisy traffic dominate daily life. However, hidden between apartment blocks, community gardens are providing green sanctuaries for residents.",
      "These shared green spaces are managed by local volunteers who plant tomatoes, aromatic herbs, and colorful flowers. Instead of buying everything wrapped in plastic from supermarkets, neighbors harvest organic vegetables together.",
      "Beyond providing fresh food, community gardens foster strong interpersonal connections. Older residents teach young children how to plant seeds, while immigrants share traditional gardening methods from their home countries.",
      "Environmental researchers note that these small plots of soil also cool down city temperatures and provide vital shelters for honeybees and migratory birds."
    ],
    keywords: ["Green sanctuaries", "Local volunteers", "Harvest", "Foster connections", "Environmental"],
    quiz: {
      q: "¿Qué beneficio adicional ofrecen los huertos comunitarios además de comida fresca?",
      opts: [
        { t: "Conectan a vecinos de distintas edades y reducen la temperatura urbana", correct: true },
        { t: "Generan millones de dólares en ganancias comerciales", correct: false },
        { t: "Reemplazan los parques públicos de la ciudad", correct: false },
        { t: "Eliminan la necesidad de transporte público", correct: false }
      ]
    }
  },
  {
    id: "read-a2-4",
    level: "A2",
    category: "Ciudades & Movilidad",
    title: "Mastering the Underground Subway System",
    readTime: "4 min",
    paragraphs: [
      "Navigating an underground transit system for the first time can seem like deciphering a giant maze. Millions of commuters travel daily through subterranean tunnels, relying on colored lines and electronic indicator boards.",
      "To travel efficiently, experienced passengers follow simple unspoken rules. In London, for instance, you must always stand on the right side of escalators so that hurried commuters can walk up on the left.",
      "Using mobile mapping applications has made route planning significantly easier. The app alerts you about service delays, tells you which platform to wait on, and calculates the exact transfer station.",
      "Once you understand how inbound and outbound train directions work, the subway transforms from a stressful ordeal into the fastest way to explore a modern metropolis."
    ],
    keywords: ["Subterranean", "Escalator etiquette", "Transfer station", "Mapping apps", "Metropolis"],
    quiz: {
      q: "¿Cuál es la regla tácita en las escaleras mecánicas del metro de Londres?",
      opts: [
        { t: "Quedarse a la derecha para que los que tienen prisa caminen por la izquierda", correct: true },
        { t: "Ocupar todo el ancho de la escalera mecánica", correct: false },
        { t: "No utilizar nunca las escaleras mecánicas en hora punta", correct: false },
        { t: "Subir siempre corriendo", correct: false }
      ]
    }
  },
  {
    id: "read-a2-5",
    level: "A2",
    category: "Educación & Hábitos",
    title: "How Daily Podcasts Accelerated My English",
    readTime: "4 min",
    paragraphs: [
      "Two years ago, my English listening comprehension was quite weak. Whenever native speakers spoke at normal conversational speed, their words sounded like one continuous blur of sound.",
      "Determined to improve, I decided to incorporate short English podcasts into my daily routine. Every morning while brushing my teeth and preparing breakfast, I listened to a seven-minute educational episode.",
      "At first, I only understood thirty percent of the content. However, rather than giving up, I reduced playback speed to 0.8x and turned on the English transcripts to verify unfamiliar vocabulary.",
      "After six months of consistent exposure, my brain adapted to natural sentence rhythms and connected speech. Consistency, not talent, proved to be the secret ingredient."
    ],
    keywords: ["Continuous blur", "Incorporate", "Transcripts", "Connected speech", "Consistency"],
    quiz: {
      q: "¿Qué técnica ayudó al estudiante cuando no entendía los podcasts al principio?",
      opts: [
        { t: "Reducir la velocidad a 0.8x y leer las transcripciones en inglés", correct: true },
        { t: "Traducir palabra por palabra al español durante horas", correct: false },
        { t: "Dejar de escuchar audios y solo estudiar gramática en libros", correct: false },
        { t: "Escuchar podcasts a doble velocidad", correct: false }
      ]
    }
  },

  // ------------------------------------------------------
  // NIVEL B1 (5 Lecturas)
  // ------------------------------------------------------
  {
    id: "read-b1-1",
    level: "B1",
    category: "Trabajo & Estilo de Vida",
    title: "How Remote Work is Reshaping Urban Communities",
    readTime: "4 min",
    paragraphs: [
      "Over the past five years, the widespread adoption of remote and hybrid work models has dramatically transformed how professionals organize their careers and daily routines. What began as an emergency response during global crises has evolved into a permanent structural shift across numerous industries.",
      "Instead of spending two frustrating hours each day commuting in crowded subways and bumper-to-bumper highway traffic, many employees now have the flexibility to balance family responsibilities, personal hobbies, and deep focused work directly from home.",
      "However, this transformation introduces psychological and social challenges that organizations are still struggling to address. Without clear physical boundaries between the office and the living room, many professionals find it remarkably difficult to disconnect at the end of the day, leading to insidious burnout.",
      "Furthermore, local economies in metropolitan business districts face declining revenues as lunchtime restaurants, dry cleaners, and commercial real estate experience reduced foot traffic. Cities must now reinvent downtown zones into vibrant residential and cultural hubs."
    ],
    keywords: ["Widespread adoption", "Commuting", "Psychological boundaries", "Insidious burnout", "Foot traffic"],
    quiz: {
      q: "¿Cuál es un impacto negativo del teletrabajo según el artículo?",
      opts: [
        { t: "Dificultad para desconectarse al no existir límites físicos claros, provocando agotamiento", correct: true },
        { t: "Aumento del costo del transporte público", correct: false },
        { t: "Obligación de trabajar 18 horas diarias por ley", correct: false },
        { t: "Pérdida total del acceso a internet", correct: false }
      ]
    }
  },
  {
    id: "read-b1-2",
    level: "B1",
    category: "Salud & Neurociencia Básica",
    title: "The Science of Healthy Habit Formation",
    readTime: "4 min",
    paragraphs: [
      "Most people believe that transforming your lifestyle requires immense willpower and radical overnight changes. However, behavioral psychologists have demonstrated that sustainable habits depend far more on environmental design than sheer discipline.",
      "Every habit operates within a neurological feedback loop consisting of three distinct components: a cue (the trigger), a routine (the behavior itself), and a reward (the positive reinforcement your brain craves). When you repeat this loop consistently, neurological pathways strengthen.",
      "For instance, if your goal is to study English for twenty minutes every morning, placing your notebook and headphones directly beside your coffee maker creates an unmissable visual cue. Once the behavior begins, rewarding yourself with a favorite morning playlist reinforces the pattern.",
      "By focusing on incremental micro-actions—often called the 'one percent rule'—individuals can compound significant linguistic and professional gains over months without suffering motivational collapse."
    ],
    keywords: ["Neurological loop", "Cue and routine", "Visual cue", "Incremental micro-actions", "Motivational collapse"],
    quiz: {
      q: "¿Cuáles son los tres componentes del bucle del hábito según los psicólogos?",
      opts: [
        { t: "Señal (cue), rutina y recompensa", correct: true },
        { t: "Fuerza de voluntad, castigo y suerte", correct: false },
        { t: "Memoria, dinero y tiempo", correct: false },
        { t: "Objetivo, examen y certificado", correct: false }
      ]
    }
  },
  {
    id: "read-b1-3",
    level: "B1",
    category: "Cultura & Comunicación",
    title: "Cultural Nuances: The Art of British Understatement",
    readTime: "4 min",
    paragraphs: [
      "Navigating international business discussions requires far more than memorizing grammatical tenses; it demands an appreciation of how cultural assumptions influence communication styles. Among English varieties, British professional discourse is renowned for subtle understatements.",
      "In situations where an American executive might enthusiastically exclaim 'That proposal is an absolute disaster!', a British counterpart is far more likely to murmur politely: 'That idea seems rather courageous,' or 'We might encounter a slight hiccup.'",
      "To non-native speakers who interpret words literally, such polite phrasing can easily be misinterpreted as mild agreement or trivial concern. In reality, describing a catastrophic issue as 'a bit of an inconvenience' is often the strongest critique a British manager will voice publicly.",
      "Mastering these pragmatic undertones enables non-native professionals to read between the lines, negotiate with greater diplomatic finesse, and avoid embarrassing cross-cultural friction."
    ],
    keywords: ["Understatement", "Counterpart", "Slight hiccup", "Read between the lines", "Cross-cultural friction"],
    quiz: {
      q: "¿Qué significa realmente cuando un colega británico dice 'That idea seems rather courageous'?",
      opts: [
        { t: "Que la idea es arriesgada o inadecuada, siendo una crítica indirecta", correct: true },
        { t: "Que la idea es brillante y la van a implementar de inmediato", correct: false },
        { t: "Que la persona es muy valiente y recibirá un aumento", correct: false },
        { t: "Que no entendió la propuesta en absoluto", correct: false }
      ]
    }
  },
  {
    id: "read-b1-4",
    level: "B1",
    category: "Tecnología & Sociedad",
    title: "Digital Nomadism: Freedom versus Social Isolation",
    readTime: "4 min",
    paragraphs: [
      "Equipped with lightweight laptops, noise-canceling headphones, and stable Wi-Fi connections, millions of modern remote workers have embraced the digital nomad lifestyle, trading traditional cubicles for exotic beaches and mountain retreats.",
      "The perceived benefits of this nomadic existence are undeniably seductive: geographical freedom, lower living expenses in emerging economies, and the thrill of immersing oneself in diverse culinary and historical traditions.",
      "Yet beneath the glamorous social media photographs lies a more complex reality. Constantly changing cities makes it notoriously challenging to cultivate deep, lasting friendships, frequently resulting in acute loneliness and emotional exhaustion.",
      "Consequently, seasoned nomads are increasingly establishing 'slow travel' routines, staying three to six months in a single hub and investing in local community projects to maintain psychological equilibrium."
    ],
    keywords: ["Digital nomad", "Geographical freedom", "Acute loneliness", "Slow travel", "Psychological equilibrium"],
    quiz: {
      q: "¿Por qué muchos nómadas digitales experimentan soledad a pesar de su libertad geográfica?",
      opts: [
        { t: "Porque cambiar constantemente de ciudad dificulta cultivar amistades profundas", correct: true },
        { t: "Porque no pueden utilizar internet fuera de su país", correct: false },
        { t: "Porque no tienen dinero para comprar comida", correct: false },
        { t: "Porque los hoteles les prohíben hablar", correct: false }
      ]
    }
  },
  {
    id: "read-b1-5",
    level: "B1",
    category: "Ecología & Viajes",
    title: "Sustainable Tourism in Fragile Global Ecosystems",
    readTime: "4 min",
    paragraphs: [
      "The rapid democratization of international air travel over recent decades has enabled unprecedented millions to explore remote natural wonders, from the Galápagos archipelago to the glaciers of Patagonia.",
      "Unfortunately, unchecked mass tourism frequently inflicts severe environmental degradation upon fragile habitats. Coral reefs suffer irreversible bleaching from toxic sunscreen chemicals, while sensitive wildlife is disrupted by noisy sightseeing excursions.",
      "In response, forward-thinking national parks and indigenous communities are pioneering sustainable ecotourism frameworks. These initiatives enforce strict visitor quotas, mandate accredited local guides, and channel permit revenues directly into reforestation.",
      "As conscientious travelers, our obligation is to adopt low-impact practices: respecting wildlife boundaries, utilizing public transit, and supporting locally owned businesses rather than multinational corporate chains."
    ],
    keywords: ["Unprecedented", "Environmental degradation", "Ecotourism frameworks", "Visitor quotas", "Conscientious travelers"],
    quiz: {
      q: "¿Qué medida adoptan las comunidades para proteger sus hábitats del turismo masivo?",
      opts: [
        { t: "Imponer cuotas estrictas de visitantes y financiar la reforestación con los permisos", correct: true },
        { t: "Construir aeropuertos más grandes en medio de los bosques", correct: false },
        { t: "Prohibir totalmente la entrada a cualquier persona para siempre", correct: false },
        { t: "Eliminar a los guías locales", correct: false }
      ]
    }
  },

  // ------------------------------------------------------
  // NIVEL B2 (5 Lecturas)
  // ------------------------------------------------------
  {
    id: "read-b2-1",
    level: "B2",
    category: "Neurociencia & Productividad",
    title: "The Cognitive Impact of Deep Work in a Distracted World",
    readTime: "5 min",
    paragraphs: [
      "In contemporary corporate environments, knowledge workers are persistently bombarded with an overwhelming deluge of push notifications, urgent Slack pings, and impromptu calendar invites. What many executives mistake for agile collaboration is, in reality, dismantling our capacity for profound intellectual synthesis.",
      "Neuroscientific investigations have decisively established that rapid task-switching imposes severe cognitive friction known as 'attention residue'. Whenever you briefly divert your gaze from an intricate analytical report to glance at an incoming message, your working memory does not instantaneously shift. Instead, residual cognitive bandwidth remains stranded on the interrupted task.",
      "Over the course of a standard workday, repeated micro-interruptions leave professionals mentally depleted, impairing higher-order problem-solving and fostering chronic intellectual shallowness. Complex reasoning, linguistic eloquence, and groundbreaking strategic innovations necessitate extended epochs of uninterrupted focus.",
      "To counteract this cognitive erosion, elite performers actively cultivate 'deep work' routines: shielding designated two-hour blocks on their calendar, operating in offline environments, and deliberately practicing cognitive resistance against trivial digital distractions."
    ],
    keywords: ["Attention residue", "Cognitive friction", "Deluge of notifications", "Groundbreaking strategic", "Shielding designated blocks"],
    quiz: {
      q: "¿Qué fenómeno describe el 'residuo de atención' según los neurocientíficos?",
      opts: [
        { t: "Parte de la memoria de trabajo se queda atrapada en la tarea interrumpida al cambiar rápido de actividad", correct: true },
        { t: "El cerebro borra todos los recuerdos pasados automáticamente", correct: false },
        { t: "La capacidad de memorizar números aumenta tras una interrupción", correct: false },
        { t: "Una enfermedad provocada por el brillo de las pantallas", correct: false }
      ]
    }
  },
  {
    id: "read-b2-2",
    level: "B2",
    category: "Energía & Sostenibilidad",
    title: "The Rise of Decentralized Renewable Microgrids",
    readTime: "5 min",
    paragraphs: [
      "For over a century, municipal electrical architectures adhered to an unyielding centralized paradigm: massive fossil-fuel or hydroelectric generating stations transmitted power across hundreds of kilometers of high-voltage transmission lines directly to passive end-consumers.",
      "However, escalating climate volatility and the exponential decline in solar photovoltaic production costs are catalyzing an unprecedented decentralized revolution: the proliferation of autonomous renewable microgrids. Combining localized solar arrays, wind turbines, and advanced lithium-iron-phosphate battery storage systems, microgrids can operate either in parallel with the regional grid or completely independently in 'islanded' mode.",
      "During severe climate anomalies such as hurricanes or winter storms, centralized transmission lines frequently collapse, plunging entire metropolitan regions into prolonged blackouts. Microgrids, by contrast, autonomously isolate localized faults, ensuring critical infrastructure such as hospitals, water treatment plants, and emergency shelters remain fully operational.",
      "Nevertheless, widespread microgrid deployment poses formidable technical challenges, particularly the engineering of sophisticated smart inverters capable of managing bidirectional energy flows and stabilizing electrical frequency without traditional spinning turbine inertia."
    ],
    keywords: ["Decentralized paradigm", "Photovoltaic production", "Islanded mode", "Localized faults", "Bidirectional energy flows"],
    quiz: {
      q: "¿Qué ventaja crítica ofrecen las microrredes durante fenómenos climáticos extremos?",
      opts: [
        { t: "Pueden operar de forma autónoma en modo aislado ('islanded') protegiendo servicios críticos", correct: true },
        { t: "Eliminan por completo la necesidad de baterías", correct: false },
        { t: "Requieren combustibles fósiles para funcionar", correct: false },
        { t: "Cuestan diez veces más que las centrales nucleares", correct: false }
      ]
    }
  },
  {
    id: "read-b2-3",
    level: "B2",
    category: "Economía Conductual",
    title: "Behavioral Economics and the Architecture of Choice",
    readTime: "5 min",
    paragraphs: [
      "Classical economic theory long posited that humans operate as perfectly rational calculating agents—dubbed 'Homo economicus'—consistently evaluating probabilistic outcomes to maximize self-interested utility. However, empirical findings across behavioral economics have systematically dismantled this idealized assumption.",
      "Pioneering researchers Daniel Kahneman and Amos Tversky unveiled that human cognition relies extensively on intuitive mental shortcuts known as heuristics. While computationally efficient, these heuristics introduce predictable cognitive biases, notably 'loss aversion'—the psychological principle that the agony of forfeiting one hundred dollars is twice as intense as the joy of gaining the equivalent amount.",
      "Armed with these insights, behavioral economists developed 'nudge theory', illustrating how subtle modifications to the presentation of options—termed choice architecture—can profoundly alter collective behavior without restricting individual autonomy. For example, automatically enrolling citizens into organ donation registries while preserving an effortless opt-out mechanism boosts participation rates from fifteen to over ninety percent.",
      "Understanding these subtle psychological levers enables consumers and professionals alike to recognize when commercial platforms are exploiting cognitive vulnerabilities through predatory design patterns."
    ],
    keywords: ["Homo economicus", "Loss aversion", "Heuristics", "Nudge theory", "Choice architecture"],
    quiz: {
      q: "¿Qué postula el principio de 'aversión a la pérdida' en economía conductual?",
      opts: [
        { t: "Que el dolor de perder una cantidad es aproximadamente el doble de intenso que la alegría de ganarla", correct: true },
        { t: "Que a las personas nunca les importa perder dinero", correct: false },
        { t: "Que los humanos siempre toman decisiones 100% racionales", correct: false },
        { t: "Que solo los economistas entienden los precios", correct: false }
      ]
    }
  },
  {
    id: "read-b2-4",
    level: "B2",
    category: "Liderazgo & Gestión Tech",
    title: "Psychological Safety in High-Performing Engineering Teams",
    readTime: "5 min",
    paragraphs: [
      "When Google initiated its exhaustive multi-year research project 'Project Aristotle' to identify the definitive drivers of team effectiveness across thousands of engineers, analysts expected to discover optimal combinations of educational pedigree, technical mastery, and personality types.",
      "Instead, statistical correlations pointed overwhelmingly to a singular foundational dynamic: psychological safety. Coined by Harvard Business School professor Amy Edmondson, psychological safety describes a team climate characterized by mutual trust and respect, in which members feel confident that no one will be humiliated or penalized for admitting a mistake, asking a basic question, or pitching an unorthodox hypothesis.",
      "In software environments devoid of psychological safety, developers conceal critical bugs, avoid constructive architectural pushback, and perpetuate technical debt to avert managerial wrath. Conversely, psychologically safe teams institute blameless postmortems, treating production incidents not as individual culpability but as invaluable pedagogical insights into systemic resilience.",
      "Cultivating this environment requires leaders to model vulnerability publicly: acknowledging their own errors, soliciting unvarnished feedback, and rewarding inquisitive skepticism over submissive consensus."
    ],
    keywords: ["Psychological safety", "Project Aristotle", "Blameless postmortems", "Technical debt", "Pedagogical insights"],
    quiz: {
      q: "¿Qué descubrió Google sobre los equipos de alto rendimiento en 'Project Aristotle'?",
      opts: [
        { t: "Que la seguridad psicológica fue el factor más determinante para el éxito del equipo", correct: true },
        { t: "Que los títulos universitarios individuales determinaban el 90% del rendimiento", correct: false },
        { t: "Que los equipos sin líderes siempre fracasaban", correct: false },
        { t: "Que la competencia agresiva entre ingenieros generaba mejor código", correct: false }
      ]
    }
  },
  {
    id: "read-b2-5",
    level: "B2",
    category: "Bioética & Genética",
    title: "The Ethical Dilemmas of CRISPR Cas9 Gene Editing",
    readTime: "5 min",
    paragraphs: [
      "The molecular discovery of the CRISPR-Cas9 bacterial immune mechanism and its subsequent adaptation into an ultra-precise genomic editing tool represents one of the most consequential scientific breakthroughs in biological history. For the first time, geneticists possess the capability to locate, snip, and replace targeted DNA sequences with unprecedented molecular accuracy.",
      "In clinical medicine, the therapeutic prospects are genuinely revolutionary. Clinical trials have demonstrated remarkable curative efficacy against hereditary afflictions that once condemned patients to lifetime suffering, such as sickle cell anemia, beta-thalassemia, and specific hereditary visual impairments.",
      "However, this unprecedented molecular power precipitates profound philosophical and regulatory quandaries, particularly concerning germline modifications—alterations introduced into human embryos or reproductive cells that propagate through subsequent generations. While correcting debilitating mutations is widely endorsed, crossing the boundary into elective genetic enhancement raises troubling prospects of biological inequality.",
      "Global bioethicists emphasize that transparent, enforceable international consensus must be established before commercial incentives outpace philosophical deliberations, preventing a dystopian bifurcation of humanity based on genomic purchasing power."
    ],
    keywords: ["CRISPR-Cas9", "Germline modifications", "Hereditary afflictions", "Genomic editing", "Bioethicists"],
    quiz: {
      q: "¿Cuál es la principal preocupación ética en torno a las modificaciones de la línea germinal humana?",
      opts: [
        { t: "Que se transmiten a generaciones futuras y podrían crear desigualdades biológicas basadas en poder adquisitivo", correct: true },
        { t: "Que no funcionan en ninguna especie viva", correct: false },
        { t: "Que requieren microscopios demasiado costosos", correct: false },
        { t: "Que los pacientes no quieren curarse de enfermedades hereditarias", correct: false }
      ]
    }
  },

  // ------------------------------------------------------
  // NIVEL C1 (5 Lecturas)
  // ------------------------------------------------------
  {
    id: "read-c1-1",
    level: "C1",
    category: "Filosofía Lingüística & IA",
    title: "Linguistic Nuance and the Limits of Machine Translation",
    readTime: "5 min",
    paragraphs: [
      "Notwithstanding the astonishing strides achieved by generative large language models and transformer-based neural architectures, human natural language remains deeply steeped in cultural idiosyncrasies, rhetorical subtleties, and socio-pragmatic deference.",
      "Rarely can a probabilistic syntactic parser genuinely decode the delicate irony embedded in understated British commentary, or disentangle the intricate layers of socio-hierarchical deference woven into complex East Asian honorific registers. Words are never mere autonomous semantic vectors; they function as living conduits of shared historical trauma, literary heritage, and communal belonging.",
      "While automated systems execute rudimentary semantic transposition with breathtaking velocity, the mastery of nuanced undertones and implicatures demands authentic lived empathy—a human faculty that predictive algorithmic matrices have yet to authentically replicate.",
      "Consequently, professional linguists and translators are not approaching obsolescence; rather, their mandate is pivoting toward interpretive curation, safeguarding idiomatic authenticity in an increasingly homogenized digital landscape."
    ],
    keywords: ["Notwithstanding", "Socio-pragmatic deference", "Semantic vectors", "Implicatures", "Homogenized landscape"],
    quiz: {
      q: "¿Por qué los modelos automáticos de traducción siguen enfrentando limitaciones según el texto?",
      opts: [
        { t: "Porque carecen de empatía vivida y comprensión contextual de sutilezas culturales e ironías", correct: true },
        { t: "Porque no pueden procesar más de cinco palabras por minuto", correct: false },
        { t: "Porque solo comprenden código binario", correct: false },
        { t: "Porque ningún humano los utiliza en la actualidad", correct: false }
      ]
    }
  },
  {
    id: "read-c1-2",
    level: "C1",
    category: "Epistemología & Algoritmos",
    title: "The Epistemological Paradox of Generative Synthesis",
    readTime: "5 min",
    paragraphs: [
      "The rapid ubiquity of generative artificial intelligence has precipitated an unprecedented epistemological crisis: when predictive statistical models synthesize persuasive prose that mimics empirical scholarship, how do human observers discern authentic veracity from sophisticated hallucination?",
      "Unlike classical database queries that retrieve verifiable records from deterministic indices, neural networks produce text via stochastic token probability. The model possesses no internal semantic ontology; it operates in the complete absence of intentionality, grounding, or empirical correspondence with external physical reality.",
      "This architecture fosters the 'plausibility trap': synthesized responses exude academic gravitas, deploying flawless syntactic coherence, scholarly cadence, and impeccably formatted citations that are nevertheless fabricated wholesale out of probabilistic vacuum.",
      "Navigating this burgeoning era of synthetic information demands unprecedented epistemic vigilance, forcing educators, researchers, and citizens to cultivate stringent provenance verification frameworks rather than capitulating to superficial linguistic fluency."
    ],
    keywords: ["Epistemological crisis", "Stochastic token probability", "Plausibility trap", "Epistemic vigilance", "Fabricated wholesale"],
    quiz: {
      q: "¿En qué consiste la 'trampa de plausibilidad' (plausibility trap) descrita en la lectura?",
      opts: [
        { t: "Las respuestas sintéticas parecen convincentes y académicas por su sintaxis, aunque su contenido sea inventado", correct: true },
        { t: "Los ordenadores se niegan a responder preguntas difíciles", correct: false },
        { t: "El hardware se recalienta al buscar citas verdaderas", correct: false },
        { t: "Los humanos olvidan cómo escribir a mano", correct: false }
      ]
    }
  },
  {
    id: "read-c1-3",
    level: "C1",
    category: "Geopolítica & Macroeconomía",
    title: "Supply Chain Deglobalization and Structural Nearshoring",
    readTime: "5 min",
    paragraphs: [
      "For three consecutive decades, the doctrine of unbridled globalization held absolute sway over corporate boardrooms, compelling multinational enterprises to pursue hyper-optimized, single-sourced, just-in-time supply architectures across cost-efficient developing markets.",
      "However, the compounding convergence of geopolitical friction, catastrophic pandemic bottlenecks, and rising trade tariffs has ruthlessly illuminated the systemic fragility inherent to geographic overconcentration. Resilience has abruptly supplanted marginal cost reduction as the preeminent corporate imperative.",
      "This philosophical realignment has catalyzed structural 'nearshoring' and 'friendshoring'—the calculated repatriation of critical manufacturing hubs to geographically proximate and politically aligned jurisdictions. Simultaneously, nations are subsidizing domestic semiconductor fabrication and rare-earth mineral extraction to insulate their sovereign economies.",
      "While this realignment undoubtedly bolsters strategic autonomy, it introduces enduring structural inflation, requiring consumers to absorb the cost of redundant infrastructure, higher domestic labor outlays, and fragmented trade corridors."
    ],
    keywords: ["Unbridled globalization", "Systemic fragility", "Preeminent corporate imperative", "Nearshoring and friendshoring", "Structural inflation"],
    quiz: {
      q: "¿Cuál es la consecuencia macroeconómica de adoptar el nearshoring y relocalizar cadenas de suministro?",
      opts: [
        { t: "Mayor resiliencia y autonomía estratégica, pero con inflación estructural y mayores costos de producción", correct: true },
        { t: "Reducción inmediata de todos los precios de consumo al 50%", correct: false },
        { t: "Desaparición total de las fábricas en el mundo", correct: false },
        { t: "Aumento de la dependencia en un solo país exportador", correct: false }
      ]
    }
  },
  {
    id: "read-c1-4",
    level: "C1",
    category: "Retórica & Filosofía Política",
    title: "Rhetorical Framing and the Polarization of Contemporary Discourse",
    readTime: "5 min",
    paragraphs: [
      "Language does not merely describe objective reality; it constructs the cognitive paradigms through which human communities conceptualize morality, justice, and civic obligation. In contemporary democratic discourse, rhetorical framing has evolved into an exceptionally potent weapon of ideological segregation.",
      "Linguistic cognitive theorist George Lakoff famously demonstrated that whoever controls the conceptual metaphor dictates the psychological terms of debate. By framing taxation as 'an onerous penalty on enterprise' versus 'a collaborative investment in civil infrastructure', political strategists activate deeply entrenched cognitive frames that bypass empirical deliberation entirely.",
      "In algorithmic social ecosystems incentivized by visceral outrage, nuanced dialectical synthesis is systematically penalized in favor of incendiary, binary soundbites. Dissenting viewpoints are not scrutinized as alternative hypotheses, but reflexively delegitimized as existential threats to collective identity.",
      "Counteracting this discursive decay requires reintroducing intellectual humility into public deliberation, training citizens to deconstruct metaphorical tropes and cultivate empathetic cognitive flexibility."
    ],
    keywords: ["Cognitive paradigms", "Rhetorical framing", "Ideological segregation", "Dialectical synthesis", "Discursive decay"],
    quiz: {
      q: "¿Cómo influye el encuadre metafórico ('metaphorical framing') en el debate político?",
      opts: [
        { t: "Activa marcos cognitivos arraigados que condicionan la interpretación antes de analizar los datos empíricos", correct: true },
        { t: "Obliga a los votantes a consultar enciclopedias impresas", correct: false },
        { t: "Elimina todas las discusiones ideológicas en la sociedad", correct: false },
        { t: "Garantiza que todos los políticos digan la verdad exacta", correct: false }
      ]
    }
  },
  {
    id: "read-c1-5",
    level: "C1",
    category: "Toma de Decisiones & Probabilidad",
    title: "Bounded Rationality and Decision-Making Under Extreme Uncertainty",
    readTime: "5 min",
    paragraphs: [
      "In classical probabilistic models, decision-makers are presumed to navigate well-defined risk landscapes characterized by quantifiable variance and known bell-curve distributions. However, in complex real-world systems, leadership must confront what economist Frank Knight termed 'radical uncertainty'—conditions where potential outcomes are fundamentally unquantifiable.",
      "Nobel laureate Herbert Simon introduced the paradigm of 'bounded rationality' to illustrate that human cognitive capacity, imperfect informational inputs, and strict temporal constraints render exhaustive optimization impossible. Instead of calculating ideal mathematical solutions, individuals resort to 'satisficing'—selecting options that fulfill acceptable threshold heuristics.",
      "Under high-stakes ambiguity, conventional predictive forecasting often breeds perilous overconfidence, blinding organizations to low-probability, extreme-impact disruptions—famously conceptualized by Nassim Nicholas Taleb as 'Black Swan events'.",
      "Robust leadership frameworks embrace antifragility: decentralizing authority, maintaining strategic cash reserves, executing rapid stress-tested experiments, and designing systems that systematically benefit from volatility rather than collapsing under unexpected shocks."
    ],
    keywords: ["Bounded rationality", "Radical uncertainty", "Satisficing", "Black Swan events", "Antifragility"],
    quiz: {
      q: "¿En qué consiste el concepto de 'satisficing' propuesto por Herbert Simon?",
      opts: [
        { t: "Elegir opciones que cumplen con un umbral aceptable en lugar de buscar una optimización matemática imposible", correct: true },
        { t: "Aceptar cualquier resultado al azar sin analizar", correct: false },
        { t: "Esperar a tener el 100% de la información antes de actuar", correct: false },
        { t: "Delegar todas las decisiones a la inteligencia artificial", correct: false }
      ]
    }
  },

  // ------------------------------------------------------
  // NIVEL EXAM: IELTS ACADEMIC & TOEFL iBT (5 Lecturas)
  // ------------------------------------------------------
  {
    id: "read-exam-1",
    level: "EXAM",
    category: "IELTS Academic Reading (Ciencias Ambientales)",
    title: "Renewable Energy Grid Integration: Ecological & Economic Trade-offs",
    readTime: "6 min",
    paragraphs: [
      "The global transition toward intermittent renewable energy sources—principally photovoltaic solar arrays and offshore wind turbines—has catalyzed substantial empirical scrutiny regarding transmission stability. Because solar irradiance and wind velocity fluctuate unpredictably, traditional electrical architectures require either high-capacity battery storage or dispatchable reserve capacities to mitigate catastrophic blackouts.",
      "Furthermore, lifecycle environmental assessments reveal that the extraction of lithium, cobalt, and rare earth minerals introduces considerable ecological degradation and groundwater contamination in mining regions. Consequently, environmental policymakers must balance atmospheric emissions reduction against localized biodiversity disruption.",
      "Economists also emphasize the concept of 'levelized cost of energy' (LCOE). While the generation cost of solar per megawatt-hour has fallen beneath coal, the systemic integration expenditures—including grid reinforcement, smart synchronous condensers, and subsea interconnections—substantially elevate total consumer utility bills.",
      "Ultimately, achieving zero-carbon resilience demands a diversified energy portfolio: coupling intermittent renewables with baseload geothermal, advanced nuclear fission, and green hydrogen storage to ensure perpetual grid equilibrium."
    ],
    keywords: ["Empirical scrutiny", "Dispatchable capacity", "Lifecycle assessments", "Levelized cost of energy", "Perpetual grid equilibrium"],
    quiz: {
      q: "According to the passage, what hidden expenditure complicates the economic viability of solar energy?",
      opts: [
        { t: "Systemic grid integration costs such as network reinforcement and storage infrastructure", correct: true },
        { t: "The rising cost of manufacturing solar photovoltaic panels", correct: false },
        { t: "The exorbitant price of international shipping containers", correct: false },
        { t: "The salaries of solar panel cleaners in residential areas", correct: false }
      ]
    }
  },
  {
    id: "read-exam-2",
    level: "EXAM",
    category: "TOEFL iBT Reading (Biología Evolutiva)",
    title: "The Evolutionary Pressures and Navigational Telemetry of Avian Migration",
    readTime: "6 min",
    paragraphs: [
      "Every autumn, billions of migratory birds embark on grueling intercontinental journeys spanning thousands of nautical miles, traversing perilous oceanic expanses and formidable mountain ranges with pinpoint navigational accuracy. Biologists have long investigated the precise physiological and sensory telemetry that enables this navigational feat.",
      "Research demonstrates that migratory orientation relies upon a multi-sensory sensory matrix: celestial compasses aligned with stellar constellations, solar polarization patterns, and cryptochrome retinal photoreceptors capable of detecting the Earth's geomagnetic field lines through quantum entanglement mechanics.",
      "Prior to departure, birds enter an intense metabolic state known as hyperphagia, voraciously consuming lipid-rich seeds and insects to double their body mass. This stored fat serves as concentrated high-density fuel during nonstop flights across barrier ecosystems such as the Sahara Desert or the Atlantic Ocean.",
      "However, anthropogenic interference—manifesting as urban light pollution, radiofrequency disruption, and the habitat fragmentation of vital stopover wetlands—critically threatens avian survival corridors, prompting urgent international conservation treaties."
    ],
    keywords: ["Navigational telemetry", "Cryptochrome retinal photoreceptors", "Hyperphagia", "Anthropogenic interference", "Stopover wetlands"],
    quiz: {
      q: "What physiological transformation occurs during the 'hyperphagia' stage preceding migration?",
      opts: [
        { t: "Birds dramatically increase their food intake to store high-density lipid fat reserves", correct: true },
        { t: "Birds shed their flight feathers to reduce aerodynamic drag", correct: false },
        { t: "Birds enter a deep hibernation state lasting several months", correct: false },
        { t: "Birds lose 50% of their body weight to fly higher", correct: false }
      ]
    }
  },
  {
    id: "read-exam-3",
    level: "EXAM",
    category: "IELTS Academic Reading (Urbanismo & Climatología)",
    title: "Urban Heat Islands and Anthropogenic Microclimate Alterations",
    readTime: "6 min",
    paragraphs: [
      "Metropolitan centers typically exhibit surface and ambient temperatures significantly higher than surrounding rural peripheries—a well-documented climatological anomaly termed the Urban Heat Island (UHI) effect. This thermal discrepancy is primarily attributable to the replacement of natural vegetative land covers with impervious materials such as asphalt, concrete, and steel.",
      "These anthropogenic surfaces possess low solar albedo, absorbing massive solar irradiance throughout daylight hours and re-radiating thermal energy long after sunset. Simultaneously, tall urban architectural canyons impede convective cooling breezes, trapping trapped exhaust heat generated by air conditioning condensers and vehicular internal combustion engines.",
      "The consequences of amplified thermal stress extend far beyond pedestrian discomfort: elevated urban temperatures catalyze ground-level ozone formation, exacerbate chronic cardiovascular ailments, and strain municipal power grids through spiraling cooling demands.",
      "Urban planners are consequently piloting multi-faceted mitigation strategies: mandating reflective cool pavements, subsidizing intensive green vegetated rooftops, and establishing contiguous urban tree canopies to restore natural evaporative cooling mechanisms."
    ],
    keywords: ["Urban Heat Island", "Low solar albedo", "Architectural canyons", "Cardiovascular ailments", "Evaporative cooling"],
    quiz: {
      q: "According to the passage, why do urban asphalt and concrete surfaces exacerbate the heat island effect?",
      opts: [
        { t: "They have low albedo, absorbing solar radiation by day and slowly releasing it at night", correct: true },
        { t: "They generate chemical reactions that produce open flames underground", correct: false },
        { t: "They repel all sunlight directly back into the upper atmosphere", correct: false },
        { t: "They absorb rainwater and turn it into steam immediately", correct: false }
      ]
    }
  },
  {
    id: "read-exam-4",
    level: "EXAM",
    category: "TOEFL iBT Reading (Historia & Lingüística Arqueológica)",
    title: "The Decipherment of the Rosetta Stone and Ancient Scripts",
    readTime: "6 min",
    paragraphs: [
      "Unearthed in 1799 by French soldiers near the Nile Delta town of Rashid, the Rosetta Stone provided the elusive linguistic key that unlocked over three millennia of silent Ancient Egyptian civilization. The granodiorite stele featured a single royal decree inscribed in three distinct scripts: Egyptian hieroglyphs, Egyptian Demotic, and Ancient Greek.",
      "For centuries, Western scholars had erroneously assumed that hieroglyphic symbols were purely symbolic ideograms conveying mystical philosophical truths without phonetic phonetic values. However, English polymath Thomas Young and French philologist Jean-François Champollion revolutionized the discipline by identifying phonetic cartouches—oval enclosures enclosing royal names such as Ptolemy and Cleopatra.",
      "Champollion recognized that hieroglyphs represented a sophisticated, tripartite linguistic writing system: operating simultaneously as figurative ideograms, symbolic representations, and phonetic phonetic characters representing consonants.",
      "By cross-referencing the phonetic values against Coptic—the surviving liturgical descendant of the ancient spoken language—Champollion reconstructed the underlying grammatical syntax, permanently transforming archaeology from speculative antiquarianism into rigorous historical science."
    ],
    keywords: ["Decipherment", "Granodiorite stele", "Phonetic cartouches", "Tripartite writing system", "Rigorous historical science"],
    quiz: {
      q: "What fundamental breakthrough enabled Champollion to decipher Egyptian hieroglyphs?",
      opts: [
        { t: "Recognizing that hieroglyphs functioned both phonetically and ideographically within royal cartouches", correct: true },
        { t: "Finding a dictionary written in modern French and English in Cairo", correct: false },
        { t: "Translating Latin poems found in the pyramids", correct: false },
        { t: "Assuming all symbols were purely symbolic without any sound value", correct: false }
      ]
    }
  },
  {
    id: "read-exam-5",
    level: "EXAM",
    category: "IELTS Academic Reading (Medicina & Ética Algorítmica)",
    title: "Artificial Intelligence in Oncology: Diagnostic Efficacy vs Algorithmic Opacity",
    readTime: "6 min",
    paragraphs: [
      "The deployment of deep convolutional neural networks (CNNs) in digital histopathology and diagnostic radiology has demonstrated extraordinary predictive parity with seasoned medical specialists. In early-stage pulmonary nodule detection and melanoma categorization, algorithmic classifiers frequently achieve area-under-the-curve (AUC) metric scores exceeding 0.95.",
      "By analyzing millions of microscopic pixel variations imperceptible to human optics, deep learning architectures can identify preliminary biomarkers years before macroscopic tumor manifestations appear. In under-resourced healthcare systems experiencing acute shortages of board-certified radiologists, these automated tools offer invaluable diagnostic triage capability.",
      "Nevertheless, bioethicists and regulatory agencies express profound reservations regarding the 'black box' opacity inherent to multi-layered neural systems. Because the mathematical weighting across billions of parameters remains uninterpretable, clinicians cannot interrogate the evidentiary reasoning behind an algorithmic recommendation, complicating informed patient consent and malpractice liability.",
      "Consequently, contemporary medical software engineering is focusing heavily on Explainable Artificial Intelligence (XAI): generating heatmaps and saliency masks that highlight the exact anatomical features guiding the neural network's prognostic inference."
    ],
    keywords: ["Convolutional neural networks", "Diagnostic triage", "Black box opacity", "Informed patient consent", "Explainable Artificial Intelligence"],
    quiz: {
      q: "What significant clinical concern is associated with utilizing 'black-box' deep learning models in medicine?",
      opts: [
        { t: "The evidentiary reasoning behind recommendations cannot be scrutinized, complicating consent and liability", correct: true },
        { t: "They operate too slowly to be utilized in emergency hospital wards", correct: false },
        { t: "They cannot process digital medical images in high resolution", correct: false },
        { t: "Doctors refuse to use computers inside hospital rooms", correct: false }
      ]
    }
  },
  {
    id: "read-c2-1",
    level: "C2",
    category: "Filosofía Epistémica & Teoría del Conocimiento",
    title: "Epistemic Injustice and Hermeneutical Marginalization",
    readTime: "7 min",
    paragraphs: [
      "In her seminal philosophical treatise, Miranda Fricker elucidates two distinct modalities of epistemic injustice that undermine individuals specifically in their capacity as knowers: testimonial injustice and hermeneutical injustice. The former transpires when prejudice induces a hearer to assign a deflated level of credibility to a speaker's word, distorting the fair distribution of trust across civic society.",
      "Hermeneutical injustice, by contrast, operates at a structural level within the collective interpretive apparatus. It occurs when a collective lacuna in shared communicative resources disadvantages certain social demographics, rendering their lived experience unintelligible not merely to dominant social cohorts, but tragically even to themselves.",
      "Consider the historical period preceding the conceptual coinage of 'workplace harassment'. Victims undeniably underwent severe psychological duress, yet lacked the shared hermeneutical paradigm necessary to articulate their grievance coherently in courts or institutions, leaving their trauma categorized as individual idiosyncrasy.",
      "Rectifying these epistemic vices requires the cultivate of active hermeneutical justice: a sustained reflexivity wherein auditors deliberately interrogate institutionalized biases and grant epistemic charity to non-traditional frameworks of knowledge."
    ],
    keywords: ["Epistemic injustice", "Hermeneutical lacuna", "Communicative resources", "Epistemic charity", "Structural prejudice"],
    quiz: {
      q: "According to the passage, how does hermeneutical injustice differ fundamentally from testimonial injustice?",
      opts: [
        { t: "It stems from a structural deficit in shared collective concepts rather than individual credibility deficits", correct: true },
        { t: "It only occurs in courtrooms rather than daily social interactions", correct: false },
        { t: "It is easily solved by using mathematical algorithms in philosophy", correct: false },
        { t: "It refers exclusively to deliberate translation errors between foreign languages", correct: false }
      ]
    }
  },
  {
    id: "read-c2-2",
    level: "C2",
    category: "Geopolítica Global & Relaciones Internacionales",
    title: "Multipolar Equilibrium and the Fragility of Strategic Deterrence",
    readTime: "7 min",
    paragraphs: [
      "The post-Cold War unipolar interregnum has irreversibly yielded to a fragmented, multipolar international architecture characterized by acute revisionism, asymmetric skirmishing, and overlapping spheres of regional influence. As classical deterrence paradigms predicated upon mutually assured destruction encounter hypersonic weaponry, orbital kinetic assets, and subterranean cyber warfare, strategic ambiguity increasingly supersedes doctrinal predictability.",
      "In classical realist theory, balance-of-power frameworks assumed rational state actors operating with transparent red lines and mutual evidentiary verification. However, contemporary grey-zone conflict—orchestrated below the threshold of statutory casus belli—systematically erodes the psychological credibility that underpins conventional alliances.",
      "Furthermore, the weaponization of economic interdependence, through unilateral embargoes on critical semiconductor lithography and rare-earth mineral chokepoints, has dismantled the neoliberal thesis that commercial globalization inevitably guarantees pacifist convergence.",
      "Navigating this volatile equilibrium demands not triumphalist hubris, but nuanced diplomatic statecraft capable of recognizing legitimate security dilemmas without appeasing unprovoked territorial expansion."
    ],
    keywords: ["Multipolar architecture", "Strategic ambiguity", "Grey-zone conflict", "Casus belli threshold", "Economic weaponization"],
    quiz: {
      q: "Why does contemporary 'grey-zone' conflict pose an acute challenge to traditional defense doctrines?",
      opts: [
        { t: "It operates deliberately below the formal threshold of open warfare, corroding treaty deterrence", correct: true },
        { t: "It eliminates all international commerce between competing superpowers", correct: false },
        { t: "It guarantees that nuclear arsenals are completely obsolete and dismantled", correct: false },
        { t: "It requires all participating nations to sign unilateral trade agreements", correct: false }
      ]
    }
  },
  {
    id: "read-c2-3",
    level: "C2",
    category: "Neurociencia Cognitiva & Fenomenología",
    title: "The Hard Problem of Consciousness and Phenomenological Qualia",
    readTime: "6 min",
    paragraphs: [
      "While the so-called 'easy problems' of cognitive neuroscience concern the functional mapping of sensory inputs, neural synchronization, and behavioral outputs, the 'hard problem' posed by philosopher David Chalmers remains stubbornly recalcitrant to reductionist materialism: why should any physical computational process be accompanied by subjective inner experience at all?",
      "Neurobiological correlates of consciousness (NCC) can pinpoint with increasing granularity which thalamocortical loops ignite when a subject perceives the wavelength of 700 nanometers. Yet between the electrochemical depolarization of cortical neurons and the vivid subjective redness of a rose—the undeniable subjective qualia—yawns an unbridged explanatory chasm.",
      "Functionalist theories propose that consciousness is an emergent property arising spontaneously when integrated information reaches a critical threshold of recursive feedback complexity. Skeptics counter with thought experiments such as the 'philosophical zombie', which behaves indistinguishably from a human in every measurable biological metric while possessing zero inner awareness.",
      "Whether resolution will emerge from radical panpsychism, quantum orchestration, or an epistemic revolution in our mathematical understanding of spacetime remains one of humankind's most profound intellectual frontiers."
    ],
    keywords: ["Hard problem of consciousness", "Reductionist materialism", "Phenomenological qualia", "Explanatory chasm", "Integrated information"],
    quiz: {
      q: "What defines the 'explanatory chasm' emphasized in contemporary philosophy of mind?",
      opts: [
        { t: "The persistent gap between objective physical neural wiring and subjective internal experience (qualia)", correct: true },
        { t: "The failure of computers to calculate large mathematical equations rapidly", correct: false },
        { t: "The inability of scientists to scan the human brain with MRI machines", correct: false },
        { t: "The linguistic differences between native English and Latin philosophical treatises", correct: false }
      ]
    }
  },
  {
    id: "read-c2-4",
    level: "C2",
    category: "Retórica & Lingüística Avanzada",
    title: "Classical Rhetorical Architecture and the Manipulation of Public Discourse",
    readTime: "7 min",
    paragraphs: [
      "From Aristotle's forensic treatises to contemporary political statecraft, the classical triad of ethos, pathos, and logos has functioned as the bedrock of persuasive discourse. Ethos establishes the moral authority and epistemic credibility of the speaker; logos provides the argumentative scaffold through syllogistic deduction; and pathos galvanizes the visceral emotional resonance necessary to incite civic mobilization.",
      "In oratorical masterpieces, these instruments operate in seamless counterpoint. Cicero and Demosthenes understood that excessive reliance on arid deduction alienation the populace, whereas unrestrained demagoguery devoid of substantive logos invariably collapses into transient hysteria.",
      "Modern digital discourse, governed by algorithmic attentional commodification, has disproportionately amplified weaponized pathos. Provocative hyperbole, ad hominem polemics, and false dichotomies are systematically rewarded by social metrics, subordinating dialectical truth to affective virality.",
      "Revitalizing democratic deliberation requires cultivating rhetorical literacy: empowering citizens to deconstruct sophisticated demagoguery and demand argumentative proportionality from those who solicit public consensus."
    ],
    keywords: ["Rhetorical triad", "Syllogistic deduction", "Attentional commodification", "Dialectical truth", "Rhetorical literacy"],
    quiz: {
      q: "According to the text, how has algorithmic modern media impacted the classical rhetorical triad?",
      opts: [
        { t: "It has disproportionately amplified weaponized pathos and viral hyperbole over logical rigor (logos)", correct: true },
        { t: "It has completely eliminated emotional manipulation from political campaigns", correct: false },
        { t: "It has forced politicians to speak exclusively in formal Latin syllogisms", correct: false },
        { t: "It has made rhetoric obsolete by providing absolute scientific consensus on all matters", correct: false }
      ]
    }
  },
  {
    id: "read-c2-5",
    level: "C2",
    category: "Sociología Digital & Ética de Sistemas Complejos",
    title: "Algorithmic Hegemony and the Erosion of Democratic Deliberation",
    readTime: "6 min",
    paragraphs: [
      "The pervasive encroachment of algorithmic curation into the public sphere represents not merely an infrastructural transition in information distribution, but a fundamental ontological mutation in how civic reality is constructed. By enclosing users within recursive epistemic bubbles, behavioral prediction engines optimize for user engagement through cognitive polarization.",
      "This algorithmic hegemony operates with insidious efficacy precisely because it masquerades as personalized convenience. Citizens consume narratives tailored to pre-existing confirmation biases, gradually losing the shared factual baseline indispensable for democratic compromise.",
      "Moreover, the concentration of algorithmic governance within unaccountable transnational tech monopolies poses an unprecedented constitutional dilemma: private arbiters wielding unchecked sovereignty over public speech and deliberative legitimacy without democratic oversight.",
      "To preserve democratic resilience, societies must transcend the naive binary of unfettered digital libertarianism versus authoritarian state censorship, establishing public-interest auditing frameworks and verifiable transparency across foundational predictive architectures."
    ],
    keywords: ["Algorithmic hegemony", "Epistemic bubbles", "Cognitive polarization", "Deliberative legitimacy", "Democratic resilience"],
    quiz: {
      q: "What profound constitutional risk does the author identify regarding algorithmic governance?",
      opts: [
        { t: "Unaccountable private monopolies exert de facto sovereignty over public discourse without democratic checks", correct: true },
        { t: "Smartphones will become too expensive for average citizens to afford", correct: false },
        { t: "Computer algorithms will refuse to run on modern internet servers", correct: false },
        { t: "Citizens will lose interest in reading news articles altogether", correct: false }
      ]
    }
  }
];

if (typeof window !== 'undefined') window.GRADED_READINGS = GRADED_READINGS;
if (typeof module !== 'undefined' && module.exports) module.exports = { GRADED_READINGS };

