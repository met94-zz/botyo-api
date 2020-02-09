"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BotyoSymbol;
(function (BotyoSymbol) {
    BotyoSymbol.SYMBOL_PREFIX = "BOTYO_API_";
    function forName(name) {
        return Symbol.for(BotyoSymbol.SYMBOL_PREFIX + name);
    }
    BotyoSymbol.forName = forName;
    function forClass(clazz) {
        return forName(clazz.name);
    }
    BotyoSymbol.forClass = forClass;
})(BotyoSymbol = exports.BotyoSymbol || (exports.BotyoSymbol = {}));
//# sourceMappingURL=BotyoSymbol.js.map