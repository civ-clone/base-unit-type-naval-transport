import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { TransportRegistry } from '@civ-clone/core-unit-transport/TransportRegistry';
import City from '@civ-clone/core-city/City';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
declare const NavalTransport_base: {
  new (
    city: City | null,
    player: Player,
    tile: Tile,
    ruleRegistry?: RuleRegistry
  ): {
    '__#30@#ruleRegistry': RuleRegistry;
    '__#30@#transportRegistry': TransportRegistry;
    canStow(unit: import('@civ-clone/core-unit/Unit').Unit): boolean;
    capacity(): import('@civ-clone/core-unit-transport/Yields').Capacity;
    cargo(): import('@civ-clone/core-unit/Unit').Unit[];
    cargoWeight(): import('@civ-clone/core-unit-transport/Yields').CargoWeight;
    hasCapacity(): boolean;
    hasCargo(): boolean;
    setRuleRegistry(ruleRegistry: RuleRegistry): void;
    setTransportRegistry(transportRegistry: TransportRegistry): void;
    stow(
      unit: import('@civ-clone/core-unit/Unit').Unit,
      sourceTile?: Tile
    ): boolean;
    unload(unit: import('@civ-clone/core-unit/Unit').Unit): boolean;
    '__#28@#active': boolean;
    '__#28@#busy': import('@civ-clone/core-unit/Rules/Busy').Busy | null;
    '__#28@#city': City | null;
    '__#28@#destroyed': boolean;
    '__#28@#moves': import('@civ-clone/core-unit/Yields').Moves;
    '__#28@#player': Player;
    '__#28@#ruleRegistry': RuleRegistry;
    '__#28@#status': import('@civ-clone/core-unit/Action').Action | null;
    '__#28@#tile': Tile;
    '__#28@#waiting': boolean;
    action(
      action: import('@civ-clone/core-unit/Action').Action,
      ...args: any[]
    ): void;
    actions(
      to?: Tile | import('@civ-clone/core-world/Tile').INeighbouringTiles,
      from?: Tile
    ): import('@civ-clone/core-unit/Action').Action[];
    actionsForNeighbours(
      from?: Tile
    ): import('@civ-clone/core-unit/Unit').IActionsForNeighbours;
    activate(): void;
    active(): boolean;
    setActive(active?: boolean): void;
    applyVisibility(): void;
    attack(): import('@civ-clone/core-unit/Yields').Attack;
    busy(): import('@civ-clone/core-unit/Rules/Busy').Busy | null;
    setBusy(rule?: import('@civ-clone/core-unit/Rules/Busy').Busy | null): void;
    city(): City | null;
    defence(): import('@civ-clone/core-unit/Yields').Defence;
    destroy(player?: Player | null): void;
    destroyed(): boolean;
    setDestroyed(): void;
    movement(): import('@civ-clone/core-unit/Yields').Movement;
    moves(): import('@civ-clone/core-unit/Yields').Moves;
    player(): Player;
    status(): import('@civ-clone/core-unit/Action').Action | null;
    setStatus(
      status: import('@civ-clone/core-unit/Action').Action | null
    ): void;
    tile(): Tile;
    setTile(tile: Tile): void;
    visibility(): import('@civ-clone/core-unit/Yields').Visibility;
    waiting(): boolean;
    setWaiting(waiting?: boolean): void;
    yield(
      ...yields: import('@civ-clone/core-yield/Yield').Yield[]
    ): import('@civ-clone/core-yield/Yield').Yield[];
    '__#9@#id': string;
    '__#9@#keys': (keyof any)[];
    addKey(...keys: (keyof any)[]): void;
    id(): string;
    keys(): (keyof any)[];
    sourceClass<T extends NewableFunction>(): T;
    toPlainObject(
      dataObjectFilter?: import('@civ-clone/core-data-object/DataObject').DataObjectFilter,
      additionalDataRegistry?: import('@civ-clone/core-data-object/AdditionalDataRegistry').AdditionalDataRegistry
    ): import('@civ-clone/core-data-object/DataObject').ObjectMap;
  };
  build(
    city: City,
    ruleRegistry?: RuleRegistry
  ): import('@civ-clone/core-city-build/Buildable').BuildableInstance;
};
export declare class NavalTransport extends NavalTransport_base {
  constructor(
    city: City | null,
    player: Player,
    tile: Tile,
    ruleRegistry?: RuleRegistry,
    transportRegistry?: TransportRegistry
  );
}
export default NavalTransport;
