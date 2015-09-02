/**
 ���� ������� sum, ������� ��������� ��� �������� �������:

 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

 alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

 �������� ����������� ������� sumArgs(), ������� ����� ����������� ��� ���� ���������:

 function sumArgs() {
  ��� ���
}

 alert( sumArgs(1, 2, 3) ); // 6, ��������� �������� ����� �������, ��� �������

 ��� ������� ��������� ����� reduce � arguments, ��������� call, apply ���
 ����������� ������.

 P.S. ������� sum ��� �� �����������, ��� ��������� � �������� �������
 ������������� reduce ��� ������� ������.
 */

//creating function for summarize arguments
function sumArgs(a1, a2, a3, a4, a5) {
    //borrowing method reduce
    arguments.reduce = [].reduce;
    //returning reduces arguments
    return arguments.reduce(function (a, b) {
        return a + b;
    })
}
//calling function and display result
console.log(sumArgs(1, 2, 3, 4, 5));



