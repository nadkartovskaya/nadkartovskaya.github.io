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
