const express = require('express');
const path = require('path');
const api = require('./server/api');
const app = express();

const port = process.env.PORT || 4000;

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  console.log(req.path);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});