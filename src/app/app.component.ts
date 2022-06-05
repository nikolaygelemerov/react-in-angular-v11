import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'react-in-angular-v11';

  public counter = 0;
  public stateCounter: number = 0;

  public handleOnClick(stateCounter: number) {
    this.stateCounter = stateCounter;
    this.counter++;
  }
}
