'use strict';

const console_log_level_wrapper = require('./..');

const logger = new console_log_level_wrapper({
    pattern: 'dd.mm.yyyy HH:MM:ss:l Z',
    level: 'trace'
});

logger.trace('trace');
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.fatal('fatal');




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