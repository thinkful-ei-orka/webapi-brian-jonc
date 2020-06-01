const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

port = 8000;

app.listen(8000, () => {
  console.log(`server started on port ${port}`);
});

app.get('/sum', (req, res) => {

  const a = req.query.a
  const b = req.query.b
  const c = Number(a) + Number(b);

  res.send(`The sum of ${a} and ${b} is ${c}`)
})

app.get('/chipher', (req, res) => {

  let text = req.query.text
  let shift = req.query.shift
  // const abcArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  let encodedWord = ''
 for (let i = 0; i < text.length; i++){
      let curChar = text.charCodeAt(i)
      let encoded = (curChar + Number(shift))
      console.log(encoded)
      let newLetter = String.fromCharCode(encoded)
      encodedWord=encodedWord+newLetter
  }

  res.send (encodedWord)

})