/**
 ��������� � �����, ��������� �� ����������� ���������� ���������� ����,
 �� � ������ �������. ��������:

 ��� - ��� ������ - ������ ������ - ������ - ������ �������� ������� anClean(arr),
 ������� ���������� ������ ����, ��������� �� ��������.

 var arr = ['���', '������', '������', '���', '������', '������', '������'];

 console.log( anClean(arr) ); // '���,������,������' ��� '���,������,������'
 �� ������ ������ �������� ������ �������� ������ ���� �����, �� ����� �����.
 */

//creating array
var arr = ['voz', 'kiborg', 'korset', 'ZOV', 'grobik', 'koster', 'sektor'];
//creating function for cleaning array
function anClean(arr) {
    //creating object for unique items
    var object = {};
    //creating array for result
    var result = [];
    //loop for transforming and checking array
    for (var i = 0; i < arr.length; i++) {
        //defining variable sortedArray for items after transforming
        var sortedArray = arr[i].toLowerCase().split('').sort().join('');
        console.log(sortedArray);
        //assigning value to object
        object[sortedArray] = arr[i];
        console.log(object);
    }
    //loop for filling array by unique items
    for (var item in object) {
        //adding items
        result.push(object[item]);
        console.log(item);
    }
    //returning result
    return result;
}
//calling function and display data
console.log(anClean(arr));
