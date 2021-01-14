import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { TransportRegistry } from '@civ-clone/core-unit-transport/TransportRegistry';
import City from '@civ-clone/core-city/City';
import { ITransport } from '@civ-clone/core-unit-transport/Transport';
import Naval from '@civ-clone/base-unit-type-naval/Naval';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export interface INavalTransport extends ITransport {}
export declare class NavalTransport extends Naval implements INavalTransport {
  #private;
  constructor(
    city: City | null,
    player: Player,
    tile: Tile,
    rulesRegistry?: RuleRegistry,
    transportRegistry?: TransportRegistry
  );
  canStow(unit: Unit): boolean;
  capacity(): number;
  cargo(): Unit[];
  hasCapacity(): boolean;
  hasCargo(): boolean;
  stow(unit: Unit): boolean;
  unload(unit: Unit): boolean;
}
export default NavalTransport;
