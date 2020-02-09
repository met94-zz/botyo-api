"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bundle;
(function (Bundle) {
    class BundleImpl {
        constructor(modules, asyncResolvables) {
            this.modules = modules;
            this.asyncResolvables = asyncResolvables;
        }
    }
    function ofModules(...modules) {
        return new BundleImpl(modules, []);
    }
    Bundle.ofModules = ofModules;
    function ofAsyncResolvables(...asyncResolvables) {
        return new BundleImpl([], asyncResolvables);
    }
    Bundle.ofAsyncResolvables = ofAsyncResolvables;
    function of(modules, asyncResolvables) {
        return new BundleImpl(modules, asyncResolvables);
    }
    Bundle.of = of;
})(Bundle = exports.Bundle || (exports.Bundle = {}));
//# sourceMappingURL=Bundle.js.map