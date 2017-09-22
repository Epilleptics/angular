import { Observable } from "rxjs/Observable";

export interface Board {
  setDimension(dimension: number): void;
  getDimension(): Observable<number>;
}
