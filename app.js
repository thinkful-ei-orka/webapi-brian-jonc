const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

port = 8000;

app.listen(8000, () => {
  console.log(`server started on port ${port}`);
});

app.get('/burgers', (req, res) => {
  res.send('you have to use res.send');
});
app.get('/pizza/pepperoni', (req, res) => {
  res.send(`we got the roni's`);
});

app.get('/', (req, res) => {
  res.send('hello express');
});
