import bunyan from 'bunyan';

export const createLogger = (logConfig) => bunyan.createLogger(logConfig);

export const writeToLog = (log, type, msg) => {
  // 'log' is a Bunyan log object

  switch (type) {
    case 'trace':
      log.trace(msg);
      break;

    case 'debug':
      log.debug(msg);
      break;

    case 'warn':
      log.warn(msg);
      break;

    case 'error':
      log.error(msg);
      break;

    case 'fatal':
      log.fatal(msg);
      break;

    default:
      log.info(msg);
      break;
  }
};

export const getPage = (page, posted) => page.replace('{notice}', (posted ? 'Your message has been posted.' : ''));
