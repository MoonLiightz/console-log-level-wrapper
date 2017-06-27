'use strict';

const console_log_level_wrapper = require('console-log-level-wrapper');

logger.game = new console_log_level_wrapper({
    pattern: 'dd.mm.yyyy HH:MM:ss:l Z',
    prefix: 'GAME',
    level: 'trace'
});

logger.communication = new console_log_level_wrapper({
    pattern: 'dd.mm.yyyy HH:MM:ss:l Z',
    prefix: 'COMMUNICATION',
    level: 'trace'
});

logger.game.trace('trace');
logger.game.debug('debug');
logger.game.info('info');
logger.game.warn('warn');
logger.game.error('error');
logger.game.fatal('fatal');

logger.communication.trace('trace');
logger.communication.debug('debug');
logger.communication.info('info');
logger.communication.warn('warn');
logger.communication.error('error');
logger.communication.fatal('fatal');


// Output:

// [27.06.2017 12:55:10:905 GMT+0200][TRACE][GAME] trace
// [27.06.2017 12:55:10:905 GMT+0200][DEBUG][GAME] debug
// [27.06.2017 12:55:10:905 GMT+0200][INFO][GAME]  info
// [27.06.2017 12:55:10:905 GMT+0200][WARN][GAME]  warn
// [27.06.2017 12:55:10:905 GMT+0200][ERROR][GAME] error
// [27.06.2017 12:55:10:906 GMT+0200][FATAL][GAME] fatal

// [27.06.2017 12:55:10:906 GMT+0200][TRACE][COMMUNICATION] trace
// [27.06.2017 12:55:10:906 GMT+0200][DEBUG][COMMUNICATION] debug
// [27.06.2017 12:55:10:906 GMT+0200][INFO][COMMUNICATION]  info
// [27.06.2017 12:55:10:906 GMT+0200][WARN][COMMUNICATION]  warn
// [27.06.2017 12:55:10:906 GMT+0200][ERROR][COMMUNICATION] error
// [27.06.2017 12:55:10:906 GMT+0200][FATAL][COMMUNICATION] fatal