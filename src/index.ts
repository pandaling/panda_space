import app from './app';
import { Logger } from './utils/logger';

const PORT = process.env.PORT || 7001;

app
  .listen(PORT, () => Logger.info(`server running on port: ${PORT}`))
  .on('error', e => Logger.error(e));
