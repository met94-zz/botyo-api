import { AbstractModule } from "./AbstractModule";
import { CommandErrorHandlerModule } from "../CommandErrorHandlerModule";
import { CommandModule } from "../CommandModule";
import { Message } from "../../chatapi/ChatApiTypes";
export declare abstract class AbstractCommandErrorHandlerModule extends AbstractModule implements CommandErrorHandlerModule {
    abstract handle(err: Error, message: Message, commandModule: CommandModule): Promise<any>;
}
