const express = require('express')
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/users', (req, res) => {
    res.send('Hello Users!')
}); 

app.get('/user', (req, res) => {
    res.send('Hello User!')
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});