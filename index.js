const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;
const server = http.createServer(app);
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require('helmet');
app.use(logger);
app.use(helmet());


// app.use((req,res,next) => {
//     console.log(`${req.method} ${req.url}`)
//     //next();
// });

app.get('/', (req, res, next)=>{
    res.send('<h1> hooray it is home page !!!<h1>')
})

server.listen(PORT, ()=> {
    
    console.log(`listining at${PORT}`)
    
})

