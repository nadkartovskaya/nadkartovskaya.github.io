/*�������� ���������, ��������� ������, ���������� ������� 8�8,
 � ������� ����� ����������� ��������� ����� ������.
 �� ������ ������� ���� ������, ���� #. � ���������� ������ ����������
 ��������� �����.

 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 */

//loop for lines
for (j = 0; j < 8; j++) {
    //checking if j is even number
    if (j % 2 == 0) {
        //display line if j is even number
        console.log('# # # #');
    } else {
        //display data if j is odd number
        console.log(' # # # #');
    }
}
