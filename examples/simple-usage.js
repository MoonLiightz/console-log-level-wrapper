'use strict';

const logger = require('console-log-level-wrapper')({
    pattern: 'dd.mm.yyyy HH:MM:ss:l Z',
    level: 'trace'
});

logger.trace('trace');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal('fatal');


// Output:

// [27.06.2017 12:55:10:891 GMT+0200][TRACE] trace
// [27.06.2017 12:55:10:902 GMT+0200][DEBUG] debug
// [27.06.2017 12:55:10:904 GMT+0200][INFO]  info
// [27.06.2017 12:55:10:904 GMT+0200][WARN]  warn
// [27.06.2017 12:55:10:904 GMT+0200][ERROR] error
// [27.06.2017 12:55:10:904 GMT+0200][FATAL] fatal

// Output if you changed level to 'info'

// [27.06.2017 12:55:10:904 GMT+0200][INFO]  info
// [27.06.2017 12:55:10:904 GMT+0200][WARN]  warn
// [27.06.2017 12:55:10:904 GMT+0200][ERROR] error
// [27.06.2017 12:55:10:904 GMT+0200][FATAL] fatal