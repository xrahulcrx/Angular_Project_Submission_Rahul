import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})


export class CalculatorComponent {

  @ViewChild('calcDisplay') calcDisplay!: ElementRef; 

  display: string = '0';
  isResult: boolean = false;

  buttons = [
    '','⌫','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    'C','0','.','='
  ];

  onButtonClick(value: string){

    //array for operators and spliting to get the last char of the values using regex
    const listOperators = ['+','-','*','/','%'];
    const isOperator = listOperators.includes(value);
    const tokens = this.display.match(/\d+(\.\d+)?|[+\-*/%]/g) || [];
    const lastChar = tokens[tokens.length - 1] ?? '';


    /* Handles clear */
    if (value === 'C'){
      this.display = '0';
      this.isResult = false;
      return;
    }

    /* Handles calculation */
    if (value === '='){

      if (listOperators.includes(this.display[this.display.length - 1])){
        this.display = 'Incomplete Expression';
        this.isResult = false;
        return;
      }

      this.calculate();
      return;
    }

    


    if (value === '⌫'){
      if (this.display.length > 1){
        this.display = this.display.slice(0,-1);
      } else {
        this.display = '0';
      }
      this.isResult = false;
      return;
    }

    // decimals
    if (value === '.') {

      if (this.isResult){
        this.display = '0.';
        this.isResult = false;
        return;
      }

      // If last char is operator, append 0.
      if (listOperators.includes(lastChar)){
        this.display += '0.';
        return;
      }

      //prevents multiple decimals in display
      
      const parts = this.display.split(/[\+\-\*\/\%]/) 
      const currentNumber = parts[parts.length - 1]

      if (currentNumber.includes('.')){
        return;
      }
              

      this.display += '.';
      return;

    }

    // prevents multiple same duplicate operators  in display
    if (isOperator) {
        if (this.display === '0') return;

        if (listOperators.includes(lastChar)) return;

        this.display += value;
        this.isResult = false;
        return;
      }

    

    //handles after result is shown

    if(this.isResult){
      if(isOperator) {
        this.isResult = false;
      } else {
        this.display = value;
        this.isResult = false;
        return;
      }

    }

    /* handles numbers entry */
    if (this.display === '0' && !isOperator){
      this.display = value;  
    }else{
      this.display += value;
    }

    this.scrollToEnd();

  }

  calculate() {
    try {
          const result = Function(`return ${this.display}`)();

          //divisible by zero or infinity
          if (!Number.isFinite(result)){
            this.display = 'Infinity';
            this.isResult = true;
            return;
          }
          
          //final result result the char length in display and shorten to exponential
          if (result === 0){
            this.display = '0';
          } else{
              this.display = 
              Math.abs(result) > 1e12 || Math.abs(result) < 1e-8 
              ? result.toExponential(6) 
              : parseFloat(result.toFixed(10)).toString();

            this.isResult = true;
            this.scrollToEnd();
          }



    } catch {
      this.display = 'Syntax Error';
      this.isResult = true;
      this.scrollToEnd();
    }
  }

  // dynamic font size in display
  getFontSize(): string {
    const size = this.display.length;
    if (size > 24) return '13px';
    if (size > 16) return '16px';
    if (size > 12) return '22px';
    if (size > 8) return '28px';
    return '36px';
  }

  //move the display to right side for new values exceeding the display length
  scrollToEnd() {
    setTimeout(() => {
      if (this.calcDisplay) {
        const el = this.calcDisplay.nativeElement;
        // Scroll the input all the way to the right
        el.scrollLeft = el.scrollWidth;
      }
    });
  }

};
