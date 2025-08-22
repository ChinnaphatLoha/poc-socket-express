import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import registerSockets from './sockets';
import healthRouter from './routes/health';
import { loadEnv } from './config/env';

const app = express();
const server = http.createServer(app);

const env = loadEnv();

const io = new Server(server, {
	cors: { origin: '*' },
});

app.use('/health', healthRouter);

registerSockets(io);

export { server, env };
