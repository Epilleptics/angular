import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellViewComponent } from './cell-view/cell-view.component';
import { CellTrackerService } from './cells-tracker.service';
import { BoardModule } from "./board/board.module";
import {
  BOARD_DIMENSION as BOARD_DIMENSION_TOKEN, CELL_TRACKER,
  TICK_DURATION as TICK_DURATION_TOKEN
} from "./app.tokens";
import { BOARD_DIMENSION, TICK_DURATION } from "./app.globals";

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
  providers: [
    {provide: CELL_TRACKER, useClass: CellTrackerService},
    {provide: BOARD_DIMENSION_TOKEN, useValue: BOARD_DIMENSION},
    {provide: TICK_DURATION_TOKEN, useValue: TICK_DURATION}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
