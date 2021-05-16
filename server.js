const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/coins', (req, res) => {
  const rollno = req.body.rollno;
  if(data[rollno]) {
    res.send(data[rollno]);
  } else {
    res.send('Requested rollno not exist in database');
  }
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});