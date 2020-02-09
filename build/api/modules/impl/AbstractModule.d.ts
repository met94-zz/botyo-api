import { Module } from "../Module";
import { ModuleAwareRuntime } from "../../util/ModuleAwareRuntime";
export declare class AbstractModule implements Module {
    private readonly runtime;
    getRuntime(): ModuleAwareRuntime;
    onListen(): Promise<any>;
    onShutdown(): Promise<any>;
}
