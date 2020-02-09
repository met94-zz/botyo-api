import { LoggerInstance } from "winston";
/**
 * Service identifier for the logger.
 *
 * @type {symbol}
 * @since 2.0.0
 */
export declare type Logger = LoggerInstance;
export declare namespace Logger {
    const SYMBOL: symbol;
}
