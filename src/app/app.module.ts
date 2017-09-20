import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellViewComponent } from './cell-view/cell-view.component';
import { CellsTrackerService } from './cells-tracker.service';
import { BoardModule } from "./board/board.module";

@NgModule({
  declarations: [
    AppComponent,
    CellViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BoardModule
  ],
  providers: [CellsTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
