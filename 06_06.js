class Calculator {
    result = 0;
    
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    inputRequest() {
      this.a = prompt("Введите первое число");
      this.b = prompt("Введите второе число");
  
    }
    sum() {
      this.result = Number(this.a) + Number(this.b);
      this.getResult();
    }
    minus() {
      this.result = this.a - this.b;
      this.getResult();
    }
    mult() {
      this.result = this.a * this.b;
      this.getResult();
    }
    division() {
      this.result = this.a / this.b;
      this.getResult();
    }
  
    getResult() {
      console.log(`Результат операції ${this.result}`);
    }
  
    getNewFunc(callback) {
      this.result = callback.call(this, this.a, this.b);
      this.getResult();
    }
  }
  
  const calc = new Calculator();
  
  //let first = document.querySelector('.firstNum')
  calc.inputRequest();
  calc.sum();
  calc.minus();
  calc.mult();
  calc.division();
  calc.getNewFunc((a, b) => {
      return Math.pow(a, b);
    });
  
  
  // document.querySelector('button').onclick = myClick;
  // function myClick(){
  //   let a = document.querySelector('.first_number').value
  //   let b = document.querySelector('.second_number').value
  //   document.querySelector('.out').innerHTML = Number(a) + Number(b)
  // }
  //============================// class Calculator{

//   constructor(a, b) {
//         this.a = a;
//         this.b = b;
//       }
  
//     getNumber() {
//         this.a = Number(prompt('Введите первое число'));
//         this.b = Number(prompt('Введите второе число'));
//       }
//     sum(){
//       return megaCalc.result(this.a+this.b);
//       }
//     minus(){
//       return  megaCalc.result(this.a-this.b);
//      }
//     multi(){
//       return  megaCalc.result(this.a*this.b);
      
//       }
//     division(){
//       return megaCalc.result(this.a/this.b);
//      }
    
//     addMethod (calculate, callback){
     
//           return megaCalc.result(callback(calculate.a,calculate.b));
//     }
//     result(place, value){
//       // let result = document.querySelector('.result')
//       // result.textContent = (`Результат операции =  ${value}`);
//       console.log((`Результат операции =  ${value}`));
//     }
//     }
//     let degree = ((a,b)=>a ** b);
//     const megaCalc = new Calculator(5, 4);
//     megaCalc.getNumber();
//     megaCalc.sum();
//     megaCalc.minus();
//     megaCalc.multi();
//     megaCalc.division();
//     megaCalc.addMethod(megaCalc, degree);

// let plus = document.querySelector('.plus').innerHTML = megaCalc.sum();
// let min = document.querySelector('.min')
// let mult = document.querySelector('.mult')
// let div = document.querySelector('.div')

//========================================================

// class Calculator {

//   constructor(firstInput,secondInput,resultInput,calcButton,operatorSelect) {
//       this.num1Input = document.getElementById(firstInput); 
//       this.num2Input = document.getElementById(secondInput);
//       this.resultInput = document.getElementById(resultInput);
//       this.calcButton = document.getElementById(calcButton);
//       this.operatorSelect = document.getElementById(operatorSelect);

//       const _t = this;
//       this.calcButton.onclick = function () {
//           _t.num1 = parseInt(_t.num1Input.value);
//           _t.num2 = parseInt(_t.num2Input.value);

//           let operator = _t.operatorSelect.value;

//           if (operator == "+") {
//               _t.add();
//           } else if (operator == "-") {
//               _t.subtract();
//           } else if (operator == "*") {
//               _t.multiply();
//           } else if (operator == "/") {
//               _t.divide();
//           }

//           _t.output();
//       };
//   }


//   add() {
//       this.result = this.num1 + this.num2
//   }
//   subtract() {
//       this.result = this.num1 - this.num2
//   }
//   multiply() {
//       this.result = this.num1 * this.num2
//   }
//   divide() {
//       this.result = this.num1 / this.num2
//   }


//   output() {
//       this.resultInput.value = this.result;
//   }
// }

// new Calculator('num1', 'num2', 'result', 'calc_btn', 'operator');

// Калькулятор
// const btnPlus = document.querySelector('plus')
// const btnMinus = document.querySelector('minus')
// const btnMult = document.querySelector('mult')
// const btnShare = document.querySelector('share')
// const first = document.querySelector('firstNum')
// const second = document.querySelector('secondNum')
// const result = document.querySelector('result')

// class Calc {
//     constructor(id) {
//         this.id = id;
//     }
//     toGetNumbers(tag1,tag2) {
//         this.firstValue = +prompt('Введите первое число')
//         this.secondValue = +prompt('Введите второе число')
//         tag1.textContent = this.firstValue 
//         tag2.textContent =  this.secondValue

// }
//     toSum(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         return this.firstValue + this.secondValue
//         this.toShowResult(place,total)
//     }
//     toSub(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         return this.firstValue - this.secondValue
//         this.toShowResult(place,total)
//     }

//     toMult(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         return this.firstValue * this.secondValue
//         this.toShowResult(place,total)
//     }
//     toShare(place,tag1,tag2) {
//         this.toGetNumbers(tag1,tag2)
//         let total = this.firstValue / this.secondValue
//         this.toShowResult(place,total)
//     }

//     toShowResult(place,value) {
//         // alert(`Результат операции: ${value}`)
//         place.textContent = value;
//     }

// }

// const myCalc = new Calc(1);
// console.log(myCalc)

// btnPlus.addEventListener('click', () => myСalc.toSum(resul, first, second))
// btnMinus.addEventListener('click', () => myСalc.toSub(resul, first, second))
// btnMult.addEventListener('click', () => myСalc.toMult(resul, first, second))
// btnShare.addEventListener('click', ()=> myСalc.toShare(resul, first, second))