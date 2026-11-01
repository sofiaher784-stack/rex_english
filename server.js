const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

// Statically referenced assets so any file tracer (like @vercel/nft) bundles them
const STATIC_ASSETS = [
  path.join(__dirname, 'data_kitten.js'),
  path.join(__dirname, 'data_readings.js'),
  path.join(__dirname, 'data_audio.js'),
  path.join(__dirname, 'avatar_male.jpg'),
  path.join(__dirname, 'avatar_female.jpg'),
  path.join(__dirname, 'coach_emma.jpg'),
  path.join(__dirname, 'index.html')
];

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.jfif': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ics': 'text/calendar; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8'
};

// Cuentas de usuario autorizadas para el acceso a FluencyOS
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

const server = http.createServer((req, res) => {
  // Manejo de CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // Endpoint de autenticación: POST /api/login
  if (req.method === 'POST' && req.url === '/api/login') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { username, password } = JSON.parse(body || '{}');
        const cleanUser = (username || '').trim().toLowerCase();
        const account = ACCOUNTS.find(a => 
          (a.username.toLowerCase() === cleanUser || a.email.toLowerCase() === cleanUser) &&
          a.password === password
        );

        if (account) {
          const { password: _, ...safeUser } = account;
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
          return res.end(JSON.stringify({
            success: true,
            token: 'fl_tok_' + Buffer.from(account.email + ':' + Date.now()).toString('base64'),
            user: safeUser,
            message: 'Inicio de sesión exitoso'
          }));
        } else {
          res.writeHead(401, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          });
          return res.end(JSON.stringify({
            success: false,
            message: 'Credenciales inválidas. Verifica usuario y contraseña.'
          }));
        }
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        return res.end(JSON.stringify({ success: false, message: 'Formato de solicitud no válido' }));
      }
    });
    return;
  }

  // Endpoint informativo de cuentas demo
  if (req.method === 'GET' && req.url === '/api/accounts') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const publicAccounts = ACCOUNTS.map(({ password, ...acc }) => acc);
    return res.end(JSON.stringify({ success: true, accounts: publicAccounts }));
  }

  // Manejar url limpia para archivos estáticos
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  if (reqPath === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Seguridad: evitar path traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('403 Forbidden');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

function startServer(portToTry) {
  server.listen(portToTry, () => {
    console.log(`\n========================================`);
    console.log(`🚀 Rexing Server running successfully!`);
    console.log(`📍 URL: http://localhost:${portToTry}`);
    console.log(`========================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Puerto ${portToTry} ocupado. Probando puerto ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Error en el servidor:', err);
    }
  });
}

startServer(PORT);
