import express from 'express';
import 'dotenv/config';
import {router} from './Routes';
import './shared/services/translationYup';
const server = express();

server.use(express.json());
server.use(router);



export {server};