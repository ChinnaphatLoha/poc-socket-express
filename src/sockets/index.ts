import { Server } from 'socket.io';
import registerChatSocket from './chat-socket';

export default function registerSockets(io: Server) {
	io.on('connection', (socket) => {
		console.log(`⚡ Client connected: ${socket.id}`);

		registerChatSocket(io, socket);

		socket.on('disconnect', () => {
			console.log(`❌ Client disconnected: ${socket.id}`);
		});
	});
}
