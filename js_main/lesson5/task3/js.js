/**
 �������� ���, �������:

 ����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������.
 ����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������.
 ��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����.
 ������� ����� ���� �������� ������� ����� ���� ���������.
 */

    //defining variable sum
var sum = 0;
//creating array for saving numbers
var numberArray = new Array(5);
//loop for saving numbers and calculating sum
for (var i = 0; i < 5; i++) {
    //saving number in array
    numberArray[i] = prompt("Vvedite chislo", "");
    //checking number null/""/NaN
    if (numberArray[i] == null || numberArray[i] == "" || isNaN(numberArray[i])) {
        break;
    }
    //calculating sum
    sum += parseInt(numberArray[i]);
}
//display array
console.log(numberArray);
//display sum
console.log(sum);

