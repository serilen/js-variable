;(function(){
	"use strict";

//Создайте страницу, которая предлагает ввести два числа и выводит их сумму
//------------------------------------------------------------------------
/*let firstNumber = prompt("Введите первое число");
let secondNumber;

if (firstNumber === null) {
	alert("Введите число");
} else if (!isNaN(parseInt(firstNumber))) {
	secondNumber = prompt("Введите второе число");
}

if (secondNumber === null) {
	alert("Введите число");
} else if (!isNaN(parseInt(secondNumber))) {
	alert(+firstNumber + +secondNumber);
} else {
	alert("Введите числовое значение");
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
/*let userNumber = prompt("Введите число");
if (isNaN(parseInt(userNumber))) {
	alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
} else if (userNumber === null) {
	alert("Введите число");
	
} else {
	alert(Math.floor(Math.random() * userNumber + 1));
}*/



//Создать программу, которая принимает два значение от пользователя, а затем выводит случайное число от первого до второго числа, что ввел пользователь.
//---------------------------------------------------------------

/*if (isNaN(parseInt(secondNumber, 10))) {
	alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
	return(secondNumber);
}
else if (secondNumber > firstNumber) {
	let randomNumber = Math.floor(Math.random() * secondNumber + 1);
	if (randomNumber > firstNumber) {
		alert(randomNumber);
	} else {
		return randomNumber;
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

