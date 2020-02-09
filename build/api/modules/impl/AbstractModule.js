"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractModule {
    getRuntime() {
        return this.runtime;
    }
    async onListen() {
        return Promise.resolve();
    }
    async onShutdown() {
        return Promise.resolve();
    }
}
exports.AbstractModule = AbstractModule;
//# sourceMappingURL=AbstractModule.js.map