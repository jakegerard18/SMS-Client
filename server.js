require('dotenv').config();
const express = require('express')
const server = express();
const PORT = process.env.PORT;
server.use(express.json());
server.use(express.urlencoded({extended: true}));

let data;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

server.get('/', (req, res) => {
  res.send('Success');
});

server.post('/', (req, res) => {
  data = req.body;
  client.messages
  .create({
     body: data.message,
     from: process.env.TWILIO_PHONE_NUMBER,
     to: data.recipient
   })
  .then(message => console.log(message.sid));
});





server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
