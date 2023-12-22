import http from 'http';
import cors from 'cors';



const express = require('express');
const app = express();

const PORT = process.env.port || 3000; 
const HOST = process.env.host || 'localhost';

app.get('/', (req: Request, res) => {
    res.send('HELLO');
});

app.use(cors())


const server = app.listen(PORT, HOST, () => {
    console.log(`starting server on ${PORT} at ${HOST}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log("Closing server !!"))
})