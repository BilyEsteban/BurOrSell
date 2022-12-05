import express from "express"
import routers from './routers/routers'
import './connectDB'
import morgan from "morgan";
const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use(routers);

module.exports = server;