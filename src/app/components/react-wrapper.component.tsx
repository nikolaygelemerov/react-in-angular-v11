import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ReactComponent } from "../../react";

const containerElementName = "customReactComponentContainer";

@Component({
  selector: "app-my-component",
  template: `<span #${containerElementName}></span>`,
  // styleUrls: [''],
  styleUrls: ["./react-component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactComponentWrapper
  implements OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

  @Input() public counter = 0;
  @Output() public componentClick = new EventEmitter<number>();

  constructor() {
    this.handleDivClicked = this.handleDivClicked.bind(this);
  }

  public handleDivClicked(stateCounter: number) {
    if (this.componentClick) {
      this.componentClick.emit(stateCounter);
      this.render();
    }
  }

  private root: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    this.root?.unmount();
  }

  private render() {
    const { counter } = this;

    ReactDOM.render(
      <React.StrictMode>
        <div>
          <ReactComponent counter={counter} onClick={this.handleDivClicked} />
        </div>
      </React.StrictMode>,
      this.containerRef.nativeElement
    );
  }
}
