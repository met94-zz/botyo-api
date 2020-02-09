import { AbstractModule } from "./AbstractModule";
import { ScheduledTaskModule } from "../ScheduledTaskModule";
export declare abstract class AbstractScheduledTaskModule extends AbstractModule implements ScheduledTaskModule {
    abstract execute(): Promise<any>;
    getSchedule(): string | number;
    shouldExecuteOnStart(): boolean;
}
