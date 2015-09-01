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

//------------1---------------

var string = prompt("Vvedite chislo, operatsyju b eshche odno chislo", "");
function Calculator() {
    var operation = {
        "+": function (x, y) {
            return x + y;
        },
        "-": function (x, y) {
            return x - y;
        }
    };

    this.calculate = function (string) {
        var task = string.split(" ");
        x = string[0];
        oper = string[1];
        y = string[3];
        if (oper != "+" || oper != "-") {
            return console.log("Ya takogo ne umeyu :(");
        }
        if (isNaN(x) || isNaN(y)) {
            return console.log("Nado bylo vvesty chislo :(");
        }
        return operation[oper](+x, +y);
    }
}
var myCalc=new Calculator();
console.log(myCalc());


/*function Calculator() {

 var methods = {
 "-": function(a, b) {
 return a - b;
 },
 "+": function(a, b) {
 return a + b;
 }
 };

 this.calculate = function(str) {

 var split = str.split(' '),
 a = +split[0],
 op = split[1],
 b = +split[2]

 if (!methods[op] || isNaN(a) || isNaN(b)) {
 return NaN;
 }

 return methods[op](+a, +b);
 }

 this.addMethod = function(name, func) {
 methods[name] = func;
 };
 }
 var calc = new Calculator;

 calc.addMethod("*", function(a, b) {
 return a * b;
 });
 calc.addMethod("/", function(a, b) {
 return a / b;
 });
 calc.addMethod("**", function(a, b) {
 return Math.pow(a, b);
 });

 var result = calc.calculate("2 ** 3");
 alert( result ); // 8*/





