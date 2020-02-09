"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BotyoSymbol_1 = require("../BotyoSymbol");
/**
 * @since 2.0.0
 */
class AbstractEmptyAsyncResolvable {
    getServiceIdentifier() {
        return AbstractEmptyAsyncResolvable.EMPTY_IDENTIFIER;
    }
}
exports.AbstractEmptyAsyncResolvable = AbstractEmptyAsyncResolvable;
AbstractEmptyAsyncResolvable.EMPTY_IDENTIFIER = BotyoSymbol_1.BotyoSymbol.forName("AbstractEmptyAsyncResolvable" + "ServiceIdentifier");
//# sourceMappingURL=AbstractEmptyAsyncResolvable.js.map