import { Observable } from "rxjs/Observable";

export interface CellTracker {
  generateNewCell(x: number, y: number, pattern: (x: number, y: number) => boolean): Observable<boolean>;
}
