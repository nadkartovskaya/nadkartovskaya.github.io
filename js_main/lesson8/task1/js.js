/**
 ���� ������ ladder

 var ladder = {
  step: 0,
  up: function() { // ����� �� ��������
    this.step++;
  },
  down: function() { // ���� �� ��������
    this.step--;
  },
  showStep: function() { // ������� ������� ���������
    alert( this.step );
  }
};
 ������, ��� ����������������� ������ ���������� ������� �������, �����
 ������ ��� ������� ���:

 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 ������������� ��� ������� �������, ����� ������ ����� ���� ������ ��������:

 ladder.up().up().down().up().down().showStep(); // 1
 ����� ������ ���������� �������� (chaining)
 */

var ladder = {
    step: 0,
        up: function () {
            this.step++;
            return this;
        }
        ,
        down: function () {
            this.step--;
            return this;
        }
        ,
        showStep: function () {
            console.log(this.step);
            return this;
        }
    };
    console.log(ladder.up().up().down().up().showStep());
