import { Server, Socket } from 'socket.io';

export default function registerChatSocket(io: Server, socket: Socket) {
	socket.on('chat:message', (msg: string) => {
		console.log('💬 Message:', msg);
		io.emit('chat:message', msg);
	});
}
