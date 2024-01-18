import { Component } from '@angular/core';

const operations = ['+', '-', '*', '/'];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numbers: string = '';
  result: number = 0;

  constructor() {}

  addNumber(num: number | string): void {
    console.log(this.numbers.slice(-1).toString());
    if (!operations.includes(this.numbers.slice(-1).toString())) {
      this.numbers = `${this.numbers}${num}`;
    } else if (!operations.includes(num.toString())) {
      this.numbers = `${this.numbers}${num}`;
    }
  }

  calculate(): void {
    if (operations.includes(this.numbers.slice(-1).toString())) {
      this.numbers = this.numbers.slice(0, -1);
    }
    this.result = eval(this.numbers);
  }

  deleteDigit(): void {
    this.numbers = this.numbers.slice(0, -1);
  }

  clear(): void {
    this.numbers = '';
    this.result = 0;
  }
}
