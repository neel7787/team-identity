const express = require ('express');
const cors = require ('cors');
const app = express ();
const symbols = require ('../public/symbols.json');

app.use (cors ({origin: 'http://localhost:5173'}));

app.use ((req, res, next) => {
  res.header ('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header ('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header (
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  if (req.method === 'OPTIONS') return res.sendStatus (204);
  next ();
});

app.get ('/symbols', (req, res) => {
  res.status (200).json (symbols);
});

app.listen (3000, () => {
  console.log ('App is listening on port 3000');
});
