/*������������������ ����� ��������� ����������� �� ������� �������
 F(n) = F(n-1) + F(n-2). � ��� ������ ��������� ����� �����������
 ��� ����� ���� ����������. ������ ��� ����� ����� 1 � 1.

 �������� ������� fib(n), ������� ���������� n-� ����� ���������.

 ��������:
 console.log(fib(3)); //2
 console.log(fib(7)); //13
 console.log(fib(77)); //5527939700884757
 */

//function for calculation Fibonacci number
function fib(number) {
    //defining variable, new Array for Fibonacci number
    var fibLine = new Array(number);
    //assigning value to first item of Fibonacci numbers
    fibLine[0] = 1;
    //assigning value to second item of Fibonacci number
    fibLine[1] = 1;
    //loop for calculation of Fibonacci numbers from third item
    for (var i = 2; i < number; i++) {
        //calculation of Fibonacci numbers from third item
        fibLine[i] = fibLine[i - 1] + fibLine[i - 2];
    }
    //display Fibonacci numbers
    console.log(fibLine);
    //display Fibonacci number on place(number)
    console.log(fibLine[number - 1]);
}
//function call
fib(15);


