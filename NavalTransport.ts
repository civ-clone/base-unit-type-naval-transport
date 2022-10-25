import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import {
  TransportRegistry,
  instance as transportRegistryInstance,
} from '@civ-clone/core-unit-transport/TransportRegistry';
import City from '@civ-clone/core-city/City';
import Naval from '@civ-clone/base-unit-type-naval/Naval';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Transport from '@civ-clone/core-unit-transport/Transport';

export class NavalTransport extends Transport(Naval) {
  constructor(
    city: City | null,
    player: Player,
    tile: Tile,
    ruleRegistry: RuleRegistry = ruleRegistryInstance,
    transportRegistry: TransportRegistry = transportRegistryInstance
  ) {
    super(city, player, tile, ruleRegistry);

    this.setRuleRegistry(ruleRegistry);
    this.setTransportRegistry(transportRegistry);
  }
}

export default NavalTransport;
