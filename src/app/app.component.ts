import { AfterViewInit, Component, Injector, Type } from "@angular/core";
import { GridStack, GridStackWidget } from "gridstack";

export interface Cell {
  color: string;
  colspan: number;
  rowspan?: number;
  component?: Type<any>
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  constructor(
    private injector: Injector
  ) { }

  ngAfterViewInit(): void {
    const items: GridStackWidget[] = [
      {w: 5, h: 18, content: 'data roll up'},
      {h: 20, content: 'my first widget'},
      {w: 2, h: 20, content: 'another longer widget!'},
      {w: 5, h: 65, content: 'grid'}
    ];

    const grid = GridStack.init({
      column: 5,
      margin: 0,
      cellHeight: 10
    });
    grid.load(items);
  }
}
