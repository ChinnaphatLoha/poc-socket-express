import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
import { Server } from 'socket.io';
import { loadEnv } from './env';

export async function setupRedisAdapter(io: Server) {
	const env = loadEnv();
	const pubClient = createClient({ url: env.REDIS_URL });
	const subClient = pubClient.duplicate();

	await pubClient.connect();
	await subClient.connect();

	io.adapter(createAdapter(pubClient, subClient));
	console.log('✅ Redis adapter connected');
}
