/**
 �������� � ����������� Article:

 ������� ������ ���������� ��������� ��������.
 ����������� ���� ���������� ���������� �������.
 ����������� ��� ����� ����������� ��������.
 ����� ����� Article.showStats() ������� �� � ������.

 �������������:

 function Article() {
  this.created = new Date();
  // ... ��� ��� ...
}

 new Article();
 new Article();

 Article.showStats(); // �����: 2, ���������: (����)

 new Article();

 Article.showStats(); // �����: 3, ���������: (����)
 */

//creating function for calculating objects and saving last's object date
function Article() {
    //increasing count
    Article.count++;
    //creating date
    Article.created = new Date();
}
//adding count and assigning it's value
Article.count = 0;
//creating method for showing of amount of objects and last object's date
Article.showStats = function () {
    //display result
    console.log("Vsego: " + this.count + " Posledniaya data: " + Article.created);
}
//creating new object
new Article();
//calling method showStats
Article.showStats();
//creating new object
new Article();
//calling method showStats
Article.showStats();
//creating new object
new Article();
//calling method showStats
Article.showStats();