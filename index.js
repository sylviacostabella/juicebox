const { PORT = 3000 } = process.env
require('dotenv').config();

// remove this once you confirm it works
console.log(process.env.JWT_SECRET);
// like, seriously. go delete that!

// EVERYTHING ELSE
const express = require('express');
const server = express();

const bodyParser = require ('body-parser');
const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())
server.use(bodyParser.json());
const apiRouter = require('./api');
server.use('/api', apiRouter);

server.get('/background/:color', (req, res, next) => {
  console.log("reached")
  res.send(`
    <body style="background: ${ req.params.color };">
      <h1>Hello World</h1>
    </body>
`);
});
server.get('/add/:first/to/:second', (req, res, next) => {
  res.send(`<h1>${ req.params.first } + ${ req.params.second } = ${
    Number(req.params.first) + Number(req.params.second)
   }</h1>`);
});
server.use((req, res, next) => {
    console.log("Body is now, req body");
    next();
});

server.use('app/',require('./api'));
server.get("/", (req, res, next) => {
    res.send({"message":"Hello,API!"});
    });
    
// server.get('/hello', function(requestObject,responseObject,nextObject){
//     console.log(requestObject);
//     console.log(responseObject);
//     console.log(nextObject);
// });
//     server.post("/", (req, res, next) => {
//         res.send(req.body);
//         });
const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

//ROUTERS




    