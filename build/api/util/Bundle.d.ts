import { Constructor } from "./Constructor";
import { Module } from "../modules/Module";
import { AsyncResolvable } from "./async/AsyncResolvable";
export interface Bundle {
    readonly modules: Constructor<Module>[];
    readonly asyncResolvables: Constructor<AsyncResolvable<any>>[];
}
export declare namespace Bundle {
    function ofModules(...modules: Constructor<Module>[]): Bundle;
    function ofAsyncResolvables(...asyncResolvables: Constructor<AsyncResolvable<any>>[]): Bundle;
    function of(modules: Constructor<Module>[], asyncResolvables: Constructor<AsyncResolvable<any>>[]): Bundle;
}
