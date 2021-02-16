import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import {
  TransportRegistry,
  instance as transportRegistryInstance,
} from '@civ-clone/core-unit-transport/TransportRegistry';
import City from '@civ-clone/core-city/City';
import { ITransport } from '@civ-clone/core-unit-transport/Transport';
import Naval from '@civ-clone/base-unit-type-naval/Naval';
import Player from '@civ-clone/core-player/Player';
import Sleep from '@civ-clone/base-unit-action-sleep/Sleep';
import Tile from '@civ-clone/core-world/Tile';
import TransportManifest from '@civ-clone/core-unit-transport/TransportManifest';
import Unit from '@civ-clone/core-unit/Unit';

export interface INavalTransport extends ITransport {}

export class NavalTransport extends Naval implements INavalTransport {
  #transportRegistry: TransportRegistry;

  constructor(
    city: City | null,
    player: Player,
    tile: Tile,
    rulesRegistry: RuleRegistry = ruleRegistryInstance,
    transportRegistry: TransportRegistry = transportRegistryInstance
  ) {
    super(city, player, tile, rulesRegistry);

    this.#transportRegistry = transportRegistry;
  }

  canStow(unit: Unit): boolean {
    return !this.cargo().includes(unit);
  }

  capacity(): number {
    return 0;
  }

  cargo(): Unit[] {
    return this.#transportRegistry
      .getByTransport(<Unit>this)
      .map((manifest: TransportManifest): Unit => manifest.unit());
  }

  hasCapacity(): boolean {
    return (
      this.#transportRegistry.getByTransport(<Unit>this).length <
      this.capacity()
    );
  }

  hasCargo(): boolean {
    return this.#transportRegistry.getByTransport(<Unit>this).length > 0;
  }

  stow(unit: Unit) {
    if (!this.hasCapacity() || !this.canStow(unit)) {
      return false;
    }

    this.#transportRegistry.register(
      new TransportManifest(this as ITransport, unit)
    );

    // TODO: use a rule to trigger this?
    unit.action(new Sleep(unit.tile(), unit.tile(), unit));

    return true;
  }

  unload(unit: Unit) {
    try {
      const manifest = this.#transportRegistry.getByUnit(unit);

      this.#transportRegistry.unregister(manifest);

      return true;
    } catch (e) {
      return false;
    }
  }
}

export default NavalTransport;
