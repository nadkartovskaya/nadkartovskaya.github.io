/**
 � ��� ���� ������ User, ������� ������ ��� � ������� � �������� this.fullName:

 function User(fullName) {
  this.fullName = fullName;
}

 var vasya = new User('��������� ������');
 ��� � ������� ������ ����������� ��������.

 ��������, ����� ���� �������� �������� firstName � lastName, ������ �� ������
 �� ������, �� � �� ������, ��� ���:

 var vasya = new User('��������� ������');

 // ������ firstName/lastName
 console.log( vasya.firstName ); // ���������
 console.log( vasya.lastName ); // ������

 // ������ � lastName
 vasya.lastName = '�������';

 console.log( vasya.fullName ); // ��������� �������
 �����: � ���� ������ fullName ������ �������� ���������, � firstName/lastName �
 ����������� ����� get/set. ������ ������������ ����� �� � ����.
 */

function User(fullName) {
    this.fullName = fullName;
    var fullNameArray = fullName.split(" ");
    var firstName = fullNameArray[0];
    var lastName = fullNameArray[1];
    return {
        getFirstName: function () {
            this.firstName = firstName;
            return this;
        },
        setFirstName: function (firstName) {
            this.firstName = firstName;
        },
        getLastName: function () {
            this.LastName = lastName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
        }
    };
};

var petya = new User("Petya Vasechkin");
petya.firstName="Vasya";
petya.lastName="Petechkin";
console.log(petya.getFirstName());
console.log(petya.getLastName());
petya.firstName="Masha";
petya.setLastName="Mishyna";
console.log(petya.getFirstName());
console.log(petya.getLastName());


