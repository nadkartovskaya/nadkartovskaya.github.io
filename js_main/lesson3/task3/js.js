/*�������� ���������, ������� ������� ����� console.log ��� ����� �� 1 �� 100,
 � ����� ������������. ��� �����, ������ ��������� �� 3, ��� ������ �������� �Fizz�,
 � ��� �����, ��������� �� 5 (�� �� �� 3) � �Buzz�.*/

//loop for number that is checked
for (var i = 1; i <= 30; i++) {
    //checking if i%5==0 and i%3!=0
    if (i % 5 == 0 && i % 3 != 0) {
        //display data
        console.log("If "+'Buzz');
        //checking if first condition is wrong and if i%3==0
    } else if (i % 3 == 0) {
        //display data
        console.log("If "+'Fizz');
        //all number, if first and second conditions are wrong
    } else {
        //display data
        console.log("If "+i);
    }
}