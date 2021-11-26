const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express()

dotenv.config();
const port = process.env.PORT ?? 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to FoToRo stream server! For more info see <a href="https://github.com/KinkyDeveloper/FoToRo-Stream-Server">GitHub repository</a>')
})

app.get('/video', (req, res) => {
  const fs = require('fs');
  const files = fs.readdirSync(process.env.CHASTITY_BABES_DIRECTORY).filter(fn => fn.startsWith(req.query.search));

  if(files.length === 0) {
    res.sendStatus(404);
    return;
  }

  res.setHeader('Content-Type', 'video/mp4');
  res.status(200).sendFile(process.env.CHASTITY_BABES_DIRECTORY + files[0]);
})

app.listen(port, () => {
  console.log(`FoToRo stream server listening at http://localhost:${port}`)
})