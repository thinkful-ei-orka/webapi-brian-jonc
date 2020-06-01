const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

port = 8000;

app.listen(8000, () => {
  console.log(`server started on port ${port}`);
});

app.get('/sum', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const c = Number(a) + Number(b);

  res.send(`The sum of ${a} and ${b} is ${c}`);
});

app.get('/chipher', (req, res) => {
  let text = req.query.text;
  let shift = req.query.shift;
  // const abcArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  let encodedWord = '';
  for (let i = 0; i < text.length; i++) {
    let curChar = text.charCodeAt(i);
    let encoded = curChar + Number(shift);
    console.log(encoded);
    let newLetter = String.fromCharCode(encoded);
    encodedWord = encodedWord + newLetter;
  }

  res.send(encodedWord);
});

app.get('/lotto', (req, res) => {
  // Accept  an array from query params, 6 numbers, 1-20
  const stringNumbers = req.query.arr;
  const numbers = stringNumbers.map((num) => Number(num));
  console.log(numbers);
  if (numbers.length !== 6) {
    console.log('sorry you need 6 numbers');
  } else {
    numbers.forEach((num) => {
      if (num < 1 && num > 20) {
        console.log('sorry all nums between 1-20');
      }
    });
  }

  //Randomly generate 6 numbers 1-20
  let randArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 21));

  console.log(randArr);
  let score = 0;
  // Compare the numbers together
  function checkNums(randArr, numbers) {
    numbers.forEach((num1) =>
      randArr.forEach((num2) => {
        if (num1 === num2) {
          score++;
        }
      })
    );
    return score;
  }
  checkNums(randArr, numbers);

  //If less than 4 "Sorry, you lose"
  if (score === 5) {
    res.send('Congratulations! You win $100');
  } else if (score === 4) {
    res.send('Congratulations, you win a free ticket');
  } else if (score === 6) {
    res.send('Wow! Unbelievable! You could have won the mega millions!');
  } else {
    res.send(`Sorry, you lose ${score}`);
  }

  //If 4 match "Congratulations, you win a free ticket"

  //If all 5 match "Congratulations! You win $100"

  res.send('working.');
});
