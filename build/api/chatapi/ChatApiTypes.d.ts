/// <reference types="node" />
import { Readable } from "stream";
/**
 * Defines a message object.
 *
 * @see https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#apilistencallback
 */
export declare type Message = {
    [index: string]: any;
    attachments: object[];
    body: string;
    isGroup: boolean;
    mentions: object[];
    messageID: string;
    senderID: string;
    threadID: FacebookId;
    isUnread: boolean;
    type: string;
};
/**
 * Defines an outgoing message.
 */
export declare type OutgoingMessage = {
    attachment?: ReadableStream | ReadableStream[] | Readable | Readable[];
    url?: string;
    sticker?: string;
    emoji?: string;
    emojiSize?: "small" | "medium" | "large";
    body?: string;
    mentions?: object[];
};
export declare type FacebookId = string | number;
/**
 * Ends the typing indicator.
 *
 * @callback EndTypingIndicatorFunction
 * @return {Promise} empty promise
 */
export declare type EndTypingIndicatorFunction = () => Promise<void>;
export interface UserIdSearchResult {
    readonly userID: string;
    readonly photoUrl: string;
    readonly indexRank: number;
    readonly name: string;
    readonly isVerified: boolean;
    readonly profileUrl: string;
    readonly score: number;
    readonly type: "user" | "group" | "page" | "event" | "app";
}
export interface UserInfoObject {
    readonly name: string;
    readonly firstName: string;
    readonly vanity: string;
    readonly thumbSrc: string;
    readonly profileUrl: string;
    readonly gender: number;
    readonly type: "user" | "group" | "page" | "event" | "app";
    readonly isFriend: boolean;
    readonly isBirthday: boolean;
}
export declare type UserInfoResult = {
    readonly [index: string]: UserInfoObject;
};
export interface ThreadInfo {
    readonly threadID: FacebookId;
    readonly threadName: string;
    readonly participantIDs: FacebookId[];
    readonly unreadCount: number;
    readonly messageCount: number;
    readonly threadType: string;
    readonly topEmojis: string[];
    readonly emoji: string | null;
    readonly color: string | null;
    readonly nicknames: {
        [index: string]: string;
    };
}
