/**
 �������� ������� ������� ��������� �� ����
 2 ���������: ������, � ������� (������ ����).
 ���� ������� ����� �������� � ����� �������.
 ������� ������ ������� ������ � �����������
 ����� ���������.
 */

//defining variable array
var array = new Array(1, 2, 3, 4, 5);
//function for adding new item
function newItem(array, item) {
    //adding new item
    array.push(item);
    //returning array with new item
    return array;
}
//calling function and display data
console.log(newItem(array, "kuku"));

