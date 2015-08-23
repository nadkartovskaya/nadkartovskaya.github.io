/**
 �������� ���, ������� ����������� ������ �������� people �� ���� age.

 ��������:

 var vasya = { name: '����', age: 23 };
 var masha = { name: '����', age: 18 };
 var vovochka = { name: '�������', age: 6 };

 var people = [ vasya , masha , vovochka ];

 ... ��� ��� ...

 // ������ people: [vovochka, masha, vasya]
 console.log(people[0].age) // 6
 �������� ������ ��� � ������� ����� ����������.
 */

//creating objects vasya, masha, vovochka
var vasya = {
    name: 'Vasya',
    age: 23
};
var masha = {
    name: 'Masha',
    age: 18
};
var vovochka = {
    name: 'Vovochka',
    age: 6
};
//creating array of object
var people = [vasya, masha, vovochka];
//creating function increase for sorting array with property age
function increase(peopleA, peopleB) {
    if (peopleA.age > peopleB.age) {
        return 1;
    } else if (peopleA.age < peopleB.age) {
        return -1;
    } else {
        return 0;
    }
}
//sorting array by function increase
people.sort(increase);
//display array people with all properties of objects
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}




