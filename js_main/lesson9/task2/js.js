/**
 �������� ������� applyAll(func, arg1, arg2...), ������� �������� �������
 func � ������������ ���������� ����������.

 ��� ������ ������� func(arg1, arg2...), �� ���� �������� � func ���
 ���������, ������� �� �������, � ���������� ���������.

 ��������:
 // ��������� Math.max � ���������� 2, -2, 3
 alert( applyAll(Math.max, 2, -2, 3) ); // 3

 // ��������� Math.min � ���������� 2, -2, 3
 alert( applyAll(Math.min, 2, -2, 3) ); // -2
 */


function applyAll(func) {
    return func.apply(func, [].slice.call(arguments,1));
}

function mul(arg1, arg2, arg) {
    return [].reduce.call(arguments, function(a,b) {
        return a*b;
    })
}
function sum(arg1, arg2, arg3) {
    return [].reduce.call(arguments, function(a,b) {
        return a+b;
    })
}
console.log(applyAll(mul, 1,2,3));
console.log(applyAll(sum, 1,2,3));

