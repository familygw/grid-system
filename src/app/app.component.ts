import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Injector, Type } from "@angular/core";
import { TableGridComponent } from "./table-grid/table-grid.component";

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
export class AppComponent {
  constructor(
    private injector: Injector
  ) { }

  cells: Cell[] = [
    { color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`, colspan: 1, rowspan: 10 },
    { color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`, colspan: 2, rowspan: 10 },
    { color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`, colspan: 3, rowspan: 28.5, component: TableGridComponent },
    { color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`, colspan: 2, rowspan: 10 },
    { color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`, colspan: 1, rowspan: 10 }
  ];

  drop(event: CdkDragDrop<Cell[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  createInjector(cell: Cell): Injector {
    return Injector.create({
      providers: [{ provide: "cell", useValue: cell }],
      parent: this.injector
    });
  }
}
