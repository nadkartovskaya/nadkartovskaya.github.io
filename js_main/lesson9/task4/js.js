/**
 �������� ��������� makeCaching(f), ������� ����� ������� f � ���������� �������,
 ������� �������� � ����������.

 � ���� ������ ������� f ����� ������ ���� ��������, � �� �������� ������.

 ��� ������ ������ ������� � ������������ ���������� � ��� �������� f � ����������
 ��������.
 ��� ������ � ����������� ������� � ��� �� ���������� ������������ ����������� ��������.
 ������ �������� ���:

 function f(x) {
  return Math.random() * x; // random ��� �������� ������������
}

 function makeCaching(f) { /* ��� ��� }

 f = makeCaching(f);

 var a, b;

 a = f(1);
 b = f(1);
 alert( a == b ); // true (�������� ������������)

 b = f(2);
 alert( a == b ); // false, ������ �������� => ������ ��������

 */

//creating function func with parameter x
function f(x) {
    //returning result
    return x;
}
//creating function makeCashing with parameter func
function makeCashing(func) {
    //creating array cash for cashing arguments
    var cash = [];
    //returning function for checking whether argument is cashed or not
    return function (x) {
        if (!(x in cash)) {
            cash[x] = func.call(this, x);
        }
        return cash[x];
    }
}
//defining variable as function makeCashing
var f = makeCashing(f);
//defining variable a as function f with argument 1
var a = f(1);
//defining variable b as function f with argument 1
var b = f(1);
//checking whether argument 1 is cashed, result true
console.log(a == b);
//assigning value of variable b as function f with argument 4
b = f(4);
//checking whether argument 4 is cashed, result false
console.log(a == b);


