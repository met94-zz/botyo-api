"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractModule_1 = require("./AbstractModule");
const Constants_1 = require("../../util/Constants");
class AbstractScheduledTaskModule extends AbstractModule_1.AbstractModule {
    getSchedule() {
        return this.getRuntime()
            .getConfiguration()
            .getProperty(Constants_1.Constants.CONFIG_KEY_SCHEDULE);
    }
    shouldExecuteOnStart() {
        return this.getRuntime()
            .getConfiguration()
            .getOrElse(Constants_1.Constants.CONFIG_KEY_EXECUTE_ON_START, false);
    }
}
exports.AbstractScheduledTaskModule = AbstractScheduledTaskModule;
//# sourceMappingURL=AbstractScheduledTaskModule.js.map