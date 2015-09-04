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

function func(x) {
    return Math.random() * x;
}

function makeCashing(func) {
    var cash = {};
    return function (x) {
        if (!(x in cash)) {
            cash[x] = func.call(this, x);
        }
        return cash[x];
    }
}

func = makeCashing(func);
var a = func(1);
var b = func(1);
console.log(a == b);
b = func(4);
console.log(a == b);


