/**
 �������� ��������� makeLogging(func, log), ��� ������� func ������������
 ������, ������� ��� ������ ������ ��������� � ��������� � ������ log.

 ������� ���������� ������ ���������� ��������� (1 ��������), �� �����������
 func � ����� ������� ����������.

 �������� ������ ���:
 function work(a, b) {
  alert( a + b ); // work - ������������ �������
}

 function makeLogging(f, log) { /* ��� ���  }

 var log = [];
 work = makeLogging(work, log);

 work(1, 2); // 3
 work(4, 5); // 9

 for (var i = 0; i < log.length; i++) {
    var args = log[i]; // ������ �� ���������� i-�� ������
    alert( '���:' + args.join() ); // "���:1,2", "���:4,5"
}
 */

function sum(a, b) {
    return a + b;
}
function makeLogging(func, log) {
    function wrapper() {
        log.push([].slice.call(arguments));
        console.log(this);
        return func.apply(this, arguments);
    }

    return wrapper;
}
var log = [];
sum = makeLogging(sum, log);
sum(1, 2);
sum(5, 6);
sum(8, 10);
for (var i = 0; i < log.length; i++) {
    console.log(log[i]);
}