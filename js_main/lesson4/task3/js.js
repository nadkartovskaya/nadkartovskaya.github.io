/*
 �������� �������, ������� ��������� �� ���� ������ � ����������
 �� ���������� ���� �� ����� �� ��������� 20 ��������. ���� ������
 ������ 20, �� �������� ������ � ��������� � ����� ������ '...'
 */

//function for cutting string
function cutString(string) {
    //defining variables - new string with '...'
    var cutString;
    //checking
    if (string.length>20) {
        cutString=string.substring(0,20)+'...';
    }
    console.log(cutString);
}
cutString("Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");