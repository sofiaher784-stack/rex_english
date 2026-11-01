// ========================================================
// API: /api/login (Vercel Serverless Function)
// ========================================================

const ACCOUNTS = [
  {
    username: 'admin',
    email: 'admin@fluencyos.com',
    password: 'Fluency2026!',
    name: 'Prof. Whiskers Scholar',
    role: 'Administrador',
    cefr: 'B2',
    targetGoal: 'c1_ielts',
    photo: 'male',
    avatarCoat: 'orange_tabby',
    avatarAcc: 'scholar_cap'
  },
  {
    username: 'alumno',
    email: 'estudiante@fluencyos.com',
    password: 'Ingles123*',
    name: 'Alex Miller',
    role: 'Estudiante',
    cefr: 'A2',
    targetGoal: 'b2_toefl',
    photo: 'male',
    avatarCoat: 'calico',
    avatarAcc: 'glasses'
  },
  {
    username: 'profesor',
    email: 'teacher@fluencyos.com',
    password: 'Teacher2026!',
    name: 'Coach Emma',
    role: 'Docente & Tutor',
    cefr: 'C1',
    targetGoal: 'c2_mastery',
    photo: 'female',
    avatarCoat: 'white_fluffy',
    avatarAcc: 'bow_tie'
  }
];

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido. Utiliza POST.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) { body = {}; }
    } else if (!body) {
      body = await new Promise((resolve) => {
        let raw = '';
        req.on('data', chunk => { raw += chunk; });
        req.on('end', () => {
          try { resolve(JSON.parse(raw || '{}')); }
          catch (e) { resolve({}); }
        });
      });
    }

    const { username, password } = body || {};
    const cleanUser = (username || '').trim().toLowerCase();

    const account = ACCOUNTS.find(a =>
      (a.username.toLowerCase() === cleanUser || a.email.toLowerCase() === cleanUser) &&
      a.password === password
    );

    if (account) {
      const { password: _, ...safeUser } = account;
      return res.status(200).json({
        success: true,
        token: 'fl_tok_' + Buffer.from(account.email + ':' + Date.now()).toString('base64'),
        user: safeUser,
        message: 'Inicio de sesión exitoso'
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas. Verifica usuario y contraseña.'
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Formato de solicitud no válido'
    });
  }
};
