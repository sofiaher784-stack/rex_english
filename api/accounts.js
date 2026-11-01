// ========================================================
// API: /api/accounts (Vercel Serverless Function)
// ========================================================

const ACCOUNTS = [
  {
    username: 'admin',
    email: 'admin@fluencyos.com',
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
    name: 'Coach Emma',
    role: 'Docente & Tutor',
    cefr: 'C1',
    targetGoal: 'c2_mastery',
    photo: 'female',
    avatarCoat: 'white_fluffy',
    avatarAcc: 'bow_tie'
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  return res.status(200).json({ success: true, accounts: ACCOUNTS });
};
