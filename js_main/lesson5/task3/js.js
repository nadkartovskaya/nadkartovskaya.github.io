/**
 �������� ���, �������:

 ����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������.
 ����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������.
 ��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����.
 ������� ����� ���� �������� ������� ����� ���� ���������.
 */

var sum = 0;
var numberArray = new Array(5);
for (var i = 0; i < 5; i++) {
    numberArray[i] = +prompt("Vvedite chislo", "");

    if (prompt("Vvedite chislo", "")==null||prompt("Vvedite chislo", "")=="") {
        break;
    }
    console.log(numberArray[i]);
    sum += numberArray[i];
}
console.log(numberArray);
console.log(sum);

