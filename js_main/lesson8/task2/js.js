/**
 �������� ����������� Calculator, ������� ������ ����������� �������-������������.

 ��� ������ ������� �� ���� ������, ������� ����� ������ ���� �� ������.

 ������ ��� ������: ����� calculate(str) ��������� ������, �������� �1 + 2�,
 � ����� �������� �������� ������ �������� ����λ (�� ������ ������� ������
 ��������), � ���������� ���������. �������� ���� + � ����� -. ������ �������������:

 var calc = new Calculator;

 console.log( calc.calculate('3 + 7') ); // 10
 ������ ��� � �������� ������������ ����� addMethod(name, func), �������
 ���� ����������� ����� ��������. �� �������� ��� �������� name � �������
 �� ���� ���������� func(a,b), ������� ������ � �������������. ��������,
 ������� �������� �������� , �������� / � �������� � ������� *:

 var powerCalc = new Calculator;
 powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
 powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
 powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

 var result = powerCalc.calculate('2 ** 3');
 console.log( result ); // 8
 ��������� ������ � ������� �������������� ��������� � ���� ������ �� ���������.
 ����� � �������� ����� �������� �� ���������� ��������. ����� ���� ����� ���� ������.
 ������������� ��������� ������. ����� ��� ������ ���� � ������ ����.
 */


//creating function Calculator
function Calculator() {
    //creating object operation for "+" and "-"
    var operation = {
        //creating element of object "+". It is a function, which returns x+y
        "+": function (x, y) {
            return x + y;
        },
        //creating element of object "-". It is a function, which returns x-y
        "-": function (x, y) {
            return x - y;
        }
    };
//creating method calculate. It is a function, which splits string
//to two numbers an operator and returns result. There is also checking whether x and y
    //are numbers
    this.calculate = function (string) {
        //spliting string to x, y, operator
        var taskArray = string.split(" "),
            x = +taskArray[0],
            oper = taskArray[1],
            y = +taskArray[2]
        //checking x,y
        if (isNaN(x) || isNaN(y)) {
            return console.log("Nado bylo vvesty chislo :(");
        }
        //returning result
        return operation[oper](x, y);
    }
    //constructor this.addMethod for adding new operations with name operation and func
    // for calculating x, y arrording operation
    this.addMethod = function (name, func) {
        operation[name] = func;
    };
}

//creating calc as new Calculator
var calc = new Calculator;

//invoking calc and displaying results for "+" and "-"
console.log(calc.calculate("2 + 3"));
console.log(calc.calculate("2 - 3"));

//creating new methods "*", "/", "^" according constructor this.addMethod
calc.addMethod("*", function (x, y) {
    return x * y;
});
calc.addMethod("/", function (x, y) {
    if (y!=0) {
        return x / y;
    } else {
        return console.log("Error");
    }
});
calc.addMethod("^", function (x, y) {
    return Math.pow(x, y);
});
//invoking calc and displaying results for "*", "/", "^"
console.log(calc.calculate("2 * 3"));
console.log(calc.calculate("2 / 3"));
console.log(calc.calculate("2 ^ 3"));

