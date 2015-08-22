/**
 � ������� ���� �������� className, ������� ������ ������ css ������ � ����,
 ����������� ���������:

 var obj = {
  className: 'open menu'
};

 �������� ������� removeClass(obj, cls), ������� ������� ����� cls, ���� �� ����:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // ��� ���������

 P.S. �������������� ����������. ������� ������ ��������� ������������
 ������������ ������ � ������:

 obj = {
  className: 'my menu menu'
};

 removeClass(obj, 'menu');

 console.log( obj.className ); // 'my'
 ������ �������� ����� ������� �������������� �� ������.
 */



    //creating Object obj with property "className"
var obj = {
    "className": "open menu my my menu menu open",
};

//creating function for removing classes, function has parameters: obj, cls (type string)
function removeClass(obj, cls) {
    //defining variable classNameArray for array, which created by method split
    var classNameArray = obj.className.split(" ");
    //loop for searching cls in classNumberArray and removing those items
    for (var i = 0; i < classNameArray.length; i++) {
        //defining variable numberClass for saving number index of item, which matches with cls
        var numberClass = classNameArray.indexOf(cls);
        //condition: if numberClass>=0 (some item of classNumberArray matches with cls
        if (numberClass >= 0) {
            //removing 1 item from index=numberClass
            classNameArray.splice(numberClass, 1);
        }
    }
    //joining items in one line with separator " "
    obj.className = classNameArray.join(" ");
    //returning result-object obj with new value of property
    return obj;
}
//calling function and display data
console.log(removeClass(obj, "open"));
