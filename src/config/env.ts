import dotenv from 'dotenv';

export const loadEnv = () => {
	dotenv.config();
	return {
		PORT: process.env.PORT,
		REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
	};
};
