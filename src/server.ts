import { server, env } from "./app";
import { logger } from "./config/logger";

const PORT = env.PORT || 4000;

server.listen(PORT, () => {
  logger.info(`Realtime gateway running on http://localhost:${PORT}`);
});
