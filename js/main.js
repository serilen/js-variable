;(function(){
	"use strict";

//Создайте страницу, которая предлагает ввести два числа и выводит их сумму
//------------------------------------------------------------------------
	/*let numberFirst = +prompt("Введите первое число");
	if (isNaN(parseInt(numberFirst, 10))) {
		alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
		return(numberFirst);
	} else {
	var numberSecond = +prompt("Введите второе число");
}

if (isNaN(parseInt(numberSecond, 10))) {
		alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
		return(numberSecond);
	} else {
	alert(numberFirst + numberSecond);
}*/

//Имитация бросания двух игральных костей
//------------------------------------------------------------------------
	/*let firstGameCube= Math.floor(Math.random() * 6) + 1;
	let secondGameCube= Math.floor(Math.random() * 6) + 1;
	document.write("Числа на кубиках " + firstGameCube +
		" и " + secondGameCube);*/


//Имитация игры орел-решка
//------------------------------------------------------------------------
	/*alert("Киньте монетку");
	let sideCoin = Math.floor(Math.random() * 2) + 1;

	if (sideCoin === 1) { 
		document.write("Орел");
	} else {
		document.write("Решка");
	}*/


//Создать программу, которая принимает значение от пользователя, а затем выводит случайное число от 1 до числа, что ввел пользователь.
/*let userNumber = +prompt("Введите число");
if (isNaN(parseInt(userNumber, 10))) {
		alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
		return(userNumber);
	} else {
	alert(Math.floor(Math.random() * userNumber + 1));
}
*/


//Создать программу, которая принимает два значение от пользователя, а затем выводит случайное число от первого до второго числа, что ввел пользователь.
//---------------------------------------------------------------
/*var firstNumber = +prompt("Введите первое число");
	if (isNaN(parseInt(firstNumber, 10))) {
		alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
		return(firstNumber);
	} else {
	var secondNumber = +prompt("Введите второе число");
}

if (isNaN(parseInt(secondNumber, 10))) {
		alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
		return(secondNumber);
	} else if (secondNumber > firstNumber) 
	{
		let randomNumber = Math.floor(Math.random() * secondNumber + 1);
		if (randomNumber > firstNumber) {
			alert(randomNumber);
		} else {
			return(randomNumber);
		}
	}

	else if (secondNumber < firstNumber) {
		let randomNumber = Math.floor(Math.random() * firstNumber + 1);
		if (randomNumber > secondNumber)	{
			alert(randomNumber);
		} else {
			return(randomNumber);
		}
	}

	else if (secondNumber === firstNumber) {
		alert("Введите разные числа");
	}*/


//Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
//Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
//------------------------------------------------------------------
	/*let officialNameJS = prompt("Каково «официальное» название JavaScript?");

	if (officialNameJS == "ECMAScript") {
		alert("Верно");
	}	else {
		alert("Не знаете? «ECMAScript»!");
	}*/


//Перепишите if с использованием оператора \'?\':
//---------------------------------------------------------
/*if (a + b < 4) {
result = \'Мало\';
} else {
result = \'Много\';
}
//Ответ
(a + b < 4) ? "Мало" : "Много";*/


//Напишите код, который будет спрашивать логин (prompt).
//Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».
//Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
//---------------------------------------------------------------
/*let userLogin = prompt("Введите login");

if (userLogin == "Админ") {
	let userPassword = prompt("Введите пароль");

	if (userPassword == "Чёрный Властелин") {
		alert("Добро пожаловать!");
	} else if (userPassword === null) {
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

