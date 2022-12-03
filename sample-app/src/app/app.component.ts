import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;

  // Method for Number Click
  numClick(val: { toString: () => string; }) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  // Method for Operations Click
  oper(action: string | null) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  // Method for Calculating Results
  calculate() {
    debugger;
    const a = this.firstValue ?? 0;
    const b = parseFloat(this.display);

    let result;
    if (this.action === 'm') {
      result = a * b;
    } else if (this.action === 'd') {
      result = a / b;
    } else if (this.action === 'a') {
      result = a + b;
    } else if (this.action === 's') {
      result = a - b;
    }

    this.firstValue = result ?? 0;
    this.display = (result ?? 0).toString();
  }

  // Method for Clearing Results
  clear() {
    this.display = '0';
  }
}
