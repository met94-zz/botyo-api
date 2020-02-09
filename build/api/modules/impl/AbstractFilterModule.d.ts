import { AbstractModule } from "./AbstractModule";
import { FilterModule } from "../FilterModule";
import { Message } from "../../chatapi/ChatApiTypes";
export declare abstract class AbstractFilterModule extends AbstractModule implements FilterModule {
    abstract filter(msg: Message): Promise<Message | void>;
}
