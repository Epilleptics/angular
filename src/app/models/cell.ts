import { Observer } from 'rxjs/Observer';

export interface Cell {
  alive: boolean;
  aliveInNextTick: boolean;
  observer: Observer<boolean>;
}
