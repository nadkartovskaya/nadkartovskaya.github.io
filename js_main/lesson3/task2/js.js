/*����������� �����, ������� 1, ���������� �������, ���� ��� �� �� ��� �� �������,
 ����� ���� � 1.
 ������� �������, n>1 � �������, ���� ��� ������� �� ����� ����� �� 2 �� n-1
 ���� �������.
 �������� ���, ������� ������� ��� ������� ����� �� ��������� �� 2 �� 10.
 ��������� ������ ����: 2,3,5,7.
 P.S. ��� ����� ������ ����� ���������������� ��� ����� ������ ����������.*/


//loop for number, that is checked. Loop starts from 2, because 1 is not prime number
for (var i = 2; i <= 10; i++) {
    //loop number-denominator
    for (var j = 2; j <= i; j++) {
        //checking remainder of division, if it==0, loop breaks
        if (i % j == 0) break;
    }
    //checking number==denominator, if ==, this number is prime
    if (j == i) console.log(i);
}
