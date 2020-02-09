import { AbstractModule } from "./AbstractModule";
import { CommandModule } from "../CommandModule";
import { Message } from "../../chatapi/ChatApiTypes";
export declare abstract class AbstractCommandModule extends AbstractModule implements CommandModule {
    abstract getCommand(): string | string[];
    abstract getDescription(): string;
    abstract getUsage(): string;
    abstract validate(msg: Message, args: string): boolean;
    abstract execute(msg: Message, args: string): Promise<any>;
}
