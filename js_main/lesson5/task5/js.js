/**
 1. �������� ������ fruits � ���������� �apple�, �orange�.
 2. �������� � ����� �������� �kiwi�
 3. �������� ������������� �������� � ����� �� �pear�. ���
 ������ �������������� �������� ������ �������� ���
 �������� ����� �����.
 4. ������� ������ �������� ������� � �������� ��� console.
 5. �������� � ������ �������� �apricot� � �peach�.
 */

//creating array
var fruits = new Array("apple", "orange");
//adding new last item kiwi
fruits.push("kiwi");
//change item
fruits.splice(fruits.length - 2, fruits.length - 2, "pear");
//deleting last item and display array
console.log(fruits.shift());
//adding new first items apricot and peach
fruits.unshift("apricot", "peach");
//display array
console.log(fruits);

