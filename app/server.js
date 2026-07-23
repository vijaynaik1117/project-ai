const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`
    <html><body style="font-family: sans-serif; text-align:center; margin-top:50px;">
      <h1>Project-AI</h1>
      <h2>Version: ${VERSION}</h2>
      <p>Pod: ${os.hostname()}</p>
      <p>Node: ${process.env.NODE_NAME || 'unknown'}</p>
    </body></html>
  `);
});
app.get('/healthz', (req, res) => res.status(200).send('OK'));
app.get('/load', (req, res) => {
  const end = Date.now() + 500;
  while (Date.now() < end) { Math.sqrt(Math.random()); }
  res.send('done');
});
app.listen(PORT, () => console.log(`App ${VERSION} listening on port ${PORT}`));
