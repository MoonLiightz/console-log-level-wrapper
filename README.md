# console-log-level-wrapper

[![npm](https://img.shields.io/badge/npm-v2.13.0-blue.svg)](https://github.com/MoonLiightz/console-log-level-wrapper)
[![npm](https://img.shields.io/badge/node-v6.11.0-green.svg)](https://nodejs.org/en/download/)

## Table of Contents
- [Introduction](#introduction)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
  - [pattern](#pattern)
  - [prefix](#prefix)
  - [level](#level)
- [Examples](#examples)

## Introduction

This is a node.js wrapper module for the [console-log-level](https://github.com/watson/console-log-level) node module, it's written in JavaScript.

But why this module? <br />
This module helps to print simple logs, that based on an information level, in a customizable way. This pretty cool feature gives you the ability to show necessary informations in any projects, where you've to specify your logs.

## Install

The module is currently available on github, so use the following command to install:

```sh
$ npm install https://github.com/MoonLiightz/console-log-level-wrapper/archive/v0.1.0.tar.gz --save
```

## Usage

```js
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
```

## Options

#### pattern

A `String` to specify the date output. Look at [node-dateformat](https://github.com/felixge/node-dateformat#mask-options) for more input.

#### prefix

A `String` for an additional output. Look at [examples/additional-prefix.js](https://github.com/MoonLiightz/console-log-level-wrapper/blob/master/examples/additional-prefix.js) for an example. <br />
It's optionally.

### level

A `String`to specify the log level. Default: `info`

## Examples

- You find some exmaples here: [simple-console-log-level-wrapper/examples/](https://github.com/MoonLiightz/console-log-level-wrapper/tree/master/examples)
- For more details about the original console-log-level module look here: [watson/console-log-level](https://github.com/watson/console-log-level)
- The node-dateformat module: [felixge/node-dateformat](https://github.com/felixge/node-dateformat)
