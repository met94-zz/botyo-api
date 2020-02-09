import { Configuration } from "./Configuration";
import { ContextualizableModuleConfiguration } from "./ContextualizableModuleConfiguration";
import { Module } from "../modules/Module";
import { Constructor } from "../util/Constructor";
export declare namespace ApplicationConfiguration {
    const SYMBOL: symbol;
}
/**
 * @since 2.0.0
 */
export interface ApplicationConfiguration extends Configuration {
    /**
     * Returns the configuration for the specified type of module
     *
     * @param {ModuleConstructor} module
     * @return {ContextualizableModuleConfiguration}
     * @since 2.0.0
     */
    forModule(module: Constructor<Module>): ContextualizableModuleConfiguration;
}
