/*�������� ������� checkSpam ������� ��������� ������ �� ����������
 ����: spam, sex.

 checkSpam('get new Sex videos'); // true
 checkSpam('[SPAM] How to earn fast money?'); // true
 checkSpam('New PSD template'); // false */


//function for checking spam
function checkSpam(string) {
    //defining variables for key word with letters in different variants
    var sex = new Array('sex', 'Sex', 'SEX', 'SeX', 'seX');
    var spam = new Array('spam', 'Spam', 'SPAM', 'SPam', 'SpAM', 'SPaM', 'spaM');
    //defining variables for result
    var resultSex, resultSpam;
    //loop for checking "sex"
    for (var iSex = 0; iSex < sex.length; iSex++) {
        //checking "sex" in string
        if (string.indexOf(sex[iSex]) >= 0) {
            //result if word was found and break loop
            resultSex = true;
            break;
        } else {
            //result if word was not found
            resultSex = false;
        }
    }
    //loop for checking "spam"
    for (var iSpam = 0; iSpam < spam.length; iSpam++) {
        //checking "sex" in string
        if (string.indexOf(spam[iSpam]) >= 0) {
            //result if word was found and break loop
            resultSpam = true;
            break;
        } else {
            //result if word was not found
            resultSpam = false;
        }
    }
    //display data for "sex"
    console.log('Sex ' + resultSex);
    //display data for "spam"
    console.log('Spam ' + resultSpam);
}
//call function
checkSpam('[SPAM] How to earn fast money?');
