import { Component, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-cell-view',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.css']
})
export class CellViewComponent {
  @Input() alive$: Observable<boolean>;
}
