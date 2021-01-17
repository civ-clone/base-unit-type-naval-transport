"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _transportRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavalTransport = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const TransportRegistry_1 = require("@civ-clone/core-unit-transport/TransportRegistry");
const Naval_1 = require("@civ-clone/base-unit-type-naval/Naval");
const Sleep_1 = require("@civ-clone/base-unit-action-sleep/Sleep");
const TransportManifest_1 = require("@civ-clone/core-unit-transport/TransportManifest");
class NavalTransport extends Naval_1.default {
    constructor(city, player, tile, rulesRegistry = RuleRegistry_1.instance, transportRegistry = TransportRegistry_1.instance) {
        super(city, player, tile, rulesRegistry);
        _transportRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _transportRegistry, transportRegistry);
    }
    canStow(unit) {
        return !this.cargo().includes(unit);
    }
    capacity() {
        return 0;
    }
    cargo() {
        return __classPrivateFieldGet(this, _transportRegistry).getByTransport(this)
            .map((manifest) => manifest.unit());
    }
    hasCapacity() {
        return (__classPrivateFieldGet(this, _transportRegistry).getByTransport(this).length <
            this.capacity());
    }
    hasCargo() {
        return __classPrivateFieldGet(this, _transportRegistry).getByTransport(this).length > 0;
    }
    stow(unit) {
        if (!this.hasCapacity() || !this.canStow(unit)) {
            return false;
        }
        __classPrivateFieldGet(this, _transportRegistry).register(new TransportManifest_1.default(this, unit));
        // TODO: use a rule to trigger this?
        unit.action(new Sleep_1.default(unit.tile(), unit.tile(), unit));
        return true;
    }
    unload(unit) {
        try {
            const manifest = __classPrivateFieldGet(this, _transportRegistry).getByUnit(unit);
            __classPrivateFieldGet(this, _transportRegistry).unregister(manifest);
            return true;
        }
        catch (e) {
            return false;
        }
    }
}
exports.NavalTransport = NavalTransport;
_transportRegistry = new WeakMap();
exports.default = NavalTransport;
//# sourceMappingURL=NavalTransport.js.map