"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavalTransport = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const TransportRegistry_1 = require("@civ-clone/core-unit-transport/TransportRegistry");
const Naval_1 = require("@civ-clone/base-unit-type-naval/Naval");
const Transport_1 = require("@civ-clone/core-unit-transport/Transport");
class NavalTransport extends (0, Transport_1.default)(Naval_1.default) {
    constructor(city, player, tile, ruleRegistry = RuleRegistry_1.instance, transportRegistry = TransportRegistry_1.instance) {
        super(city, player, tile, ruleRegistry);
        this.setRuleRegistry(ruleRegistry);
        this.setTransportRegistry(transportRegistry);
    }
}
exports.NavalTransport = NavalTransport;
exports.default = NavalTransport;
//# sourceMappingURL=NavalTransport.js.map