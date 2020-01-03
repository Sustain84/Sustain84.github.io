//xhr запросы
/*
const requestURL = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.onload = () => {
	console.log(xhr.response);
}
xhr.send();
*/

//обработчик события
/*
function changeColor() {
	var text = document.getElementById('chCol');
	text.style = 'color:blue;';
}
var butt = document.getElementById('clickButton');
butt.onclick = changeColor;
*/

//перебор элементов DOM
var pg = document.getElementsByClassName('page');
for (var i=0; i < pg.length; i++){
	document.write(pg[i].innerHTML+'<br>');
}
