/*�������� ���������, ������� ������� ����� console.log ��� ����� �� 1 �� 100,
� ����� ������������. ��� �����, ������ ��������� �� 3, ��� ������ �������� �Fizz�,
� ��� �����, ��������� �� 5 (�� �� �� 3) � �Buzz�.*/

//loop for number that is checked
for (i=1; i<=100; i++) {
    //checking if i%5==0 and i%3!=0
    if (i%5==0&&i%3!=0) {
        //display data
        console.log('Buzz');
        //checking if first condition is wrong and if i%3==0
    } else if (i%3==0) {
        //display data
        console.log('Fizz');
        //all number, if first and second conditions are wrong
    } else {
        //display data
        console.log(i);
    }
}
