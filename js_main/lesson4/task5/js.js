/*���������� ����� ������ �������������� ���������� �� 1 �� n � ����� d
 ����� �������������� ���������� a[n]=a[1]+(n-1)*d
 ����� ������ �������������� ���������� s=(a[1]+a[n])/2*n

 * */

(function (n, d) {
    var aN, s;
    aN = 1 + (n - 1) * d;
    s = (1 + aN) / 2 * n;
    console.log("Chlen arifmeticheskoj progressii n=" + aN);
    console.log("Summa chlenov arifmeticheskoj progressii ot 1 do n=" + s);
})(10, 2);
