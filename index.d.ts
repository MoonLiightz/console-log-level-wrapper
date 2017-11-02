export declare interface LoggerConfig {
    
    /**
     * (Optional): Set the pattern for date format. Default is ddd mmm dd yyyy HH:MM:ss
     * 
     * @type {string}
     */
    pattern?: string;

    /**
     * (Optional): Set the log level. Default is info
     * 
     * @type {string}
     */
    level?: string;

    /**
     * (Optional): Prefix for ervery log output
     * 
     * @type {string}
     */
    prefix?: string;
}

export declare class ConsoleLogLevelWrapper {
    
    /**
     * Creates an instance of ConsoleLogLevelWrapper.
     * @param {LoggerConfig} [config] Logger config object
     * @example new ConsoleLogLevelWrapper({ pattern: 'dd.mm.yyyy HH:MM:ss:l Z', level: 'trace' })
     */
    constructor(config?: LoggerConfig)

    /**
     * Prints a trace log message to STDOUT
     * 
     * @param {*} arg 
     * @param {...any[]} args 
     */
    trace(arg: any, ...args: any[]): void

    /**
     * Prints a debug log message to STDOUT
     * 
     * @param {*} arg 
     * @param {...any[]} args
     */
    debug(arg: any, ...args: any[]): void

    /**
     * Prints a info log message to STDOUT
     * 
     * @param {*} arg 
     * @param {...any[]} args
     */
    info(arg: any, ...args: any[]): void

    /**
     * Prints a warn log message to STDERR
     * 
     * @param {*} arg 
     * @param {...any[]} args
     */
    warn(arg: any, ...args: any[]): void

    /**
     * Prints a error log message to STDERR
     * 
     * @param {*} arg 
     * @param {...any[]} args
     */
    error(arg: any, ...args: any[]): void

    /**
     * Prints a fatal log message to STDERR
     * 
     * @param {*} arg 
     * @param {...any[]} args
     */
    fatal(arg: any, ...args: any[]): void
}

export default ConsoleLogLevelWrapper