'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  
  bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
