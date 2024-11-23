const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'Positive';
  } else {
    result = 'Negetive';
  }
  res.send('Number is: ' + result);
});

app.get('/even-odd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 == 0) {
    result = 'even';
  } else {
    result = 'odd';
  }
  res.send('Number is: ' + result);
});

app.get('/user-status', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is Logged in';
  } else {
    result = 'User is not logged in';
  }
  res.send(result);
});

app.get('/user-discount', (req, res) => {
  let userAge = req.query.userAge;
  let result;
  if (userAge >= 65) {
    result = 'User is eligible for discount!!';
  } else {
    result = 'User is not eligible for discount!! Your age is below 65';
  }
  res.send(result);
});

app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'Positive';
  } else if (number < 0) {
    result = 'Negetive';
  } else {
    result = 'Zero';
  }
  res.send('Number is: ' + result);
});

app.get('/check-temperature', (req, res) => {
  let temp = parseFloat(req.query.temp);
  let result;
  if (temp < 15) {
    result = 'Cold';
  } else if (temp < 25) {
    result = 'Warm';
  } else {
    result = 'Hot';
  }
  res.send(result);
});
app.get('/check-activity', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    result = 'Low';
  } else if (steps < 10000) {
    result = 'Moderate';
  } else {
    result = 'High';
  }
  res.send('Activity level is ' + result);
});

app.get('/chek-engagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes < 500) {
    result = 'medium';
  } else {
    result = 'high';
  }
  res.send('Engagement level is ' + result);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
