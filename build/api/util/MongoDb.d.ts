import { Db } from "mongodb";
/**
 * Service identifier for the MongoDB's Db instance.
 *
 * @type {symbol}
 * @since 2.0.0
 */
export declare type MongoDb = Db;
export declare namespace MongoDb {
    const SYMBOL: symbol;
}
