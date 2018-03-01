var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'G:\图片\画图/cf20ae7a9869ecb3bf08561d2e0d663b.jpg') {
        myImage.setAttribute('src', 'G:\图片\画图/29381f30e924b8993814c6e36f061d950b7bf6c5.jpg');
    } else {
        myImage.setAttribute('src', 'G:\图片\画图/cf20ae7a9869ecb3bf08561d2e0d663b.jpg');
    }
}
var muButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'm is cool' + myName;

}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}