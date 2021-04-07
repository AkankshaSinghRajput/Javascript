//let a = +prompt('Enter value of a', '');
//if (a == 0) {
//    alert(0);
//}
//if (a == 1) {
//    alert(1);
//}
//if (a == 2 || a == 3) {
//    alert('2,3');
//}


//let a = +prompt('Enter value of a', '');

//switch(a){
//case 0:
//    alert(0);
//    break;
//case 1:
//    alert(1);
//    break;
//case 2:
//case 3:
//    alert(2,3);
//    break;
//default:
//    alert("Don't know such value");
//}



let userName = 'Akanksha';

function showMessage() {
    userName = "Bob";
    let message = 'Hello, ' + userName;
    alert(message);
}
alert(userName);
showMessage();
alert(userName);

function showMessage(from, text) {
    alert(from + ': ' + text);
}