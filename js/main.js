;(function(){
	"use strict";

	/*let numberFirst = prompt("Введите первое число");
	let numberSecond = prompt("Введите второе число");
	alert(Number(numberFirst) + Number(numberSecond));*/

	/*let firstGameCube= Math.floor(Math.random() * 6) + 1;
	let secondGameCube= Math.floor(Math.random() * 6) + 1;
	document.write("Числа на кубиках " + firstGameCube +
		" и " + secondGameCube);*/

	alert("Киньте монетку");
	let sideCoin = Math.floor(Math.random() * 2) + 1;
	
	if (sideCoin == 1) { 
		document.write("Орел");
	} else {
		document.write("Решка");
	}


	/*let firstNumber = prompt("Введите первое число");
	let secondNumber = prompt("Введите второе число");

	if (secondNumber > firstNumber) {
		let randomNumber = Math.floor(Math.random() * secondNumber + 1);
		if (randomNumber > firstNumber) {
			alert(randomNumber);
		} else {
			return(randomNumber);
		}
	}

	if (secondNumber < firstNumber) {
		let randomNumber = Math.floor(Math.random() * firstNumber + 1);
		if (randomNumber > secondNumber)	{
			alert(randomNumber);
		} else {
			return(randomNumber);
		}
	}

	if (secondNumber === firstNumber) {
		alert("Введите разные числа");
	}

	let officialNameJS = prompt("Каково «официальное» название JavaScript?");

	if (officialNameJS == "ECMAScript") {
		alert("Верно");
	}	else {
		alert("Не знаете? «ECMAScript»!");
	}

if (a + b < 4) {
result = \'Мало\';
} else {
result = \'Много\';
}

(a + b < 4) ? "Мало" : "Много";

let userLogin = prompt("Введите login");

if (userLogin == "Админ") {
	let userParol = prompt("Введите Parol");
	alert(userParol);

	if (userParol == "Чёрный Властелин") {
		alert("Добро пожаловать!");
	} else if (userParol === null) {
		alert("Вход отменён");
	} else {
		alert("Пароль неверен");
	}

} else if (userLogin === null) {
	alert("Вход отменён");

} else {
	alert("Я Вас не знаю");
}*/

})();

