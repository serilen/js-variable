;(function(){
    "use strict";

//Создайте страницу, которая предлагает ввести два числа и выводит их сумму
//------------------------------------------------------------------------
    let numberFirst = prompt("Введите первое число");

    if (isNaN(+numberFirst)) {
        alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
    } else if (numberFirst.trim() === '') {
        alert("Значение не может быть пустым!");
    } else if (numberFirst === null) {
        alert("До встречи снова!");
    } else {
        let numberSecond = prompt("Введите второе число");

        if (isNaN(+numberSecond)) {
            alert("Значение ДОЛЖНО быть ЧИСЛОВЫМ");
        } else if (numberSecond.trim() === '') {
            alert("Значение не может быть пустым!");
        } else if (numberSecond === null) {
            alert("До встречи снова!");
        } else {
            let summa = parseInt(numberFirst) + parseInt(numberSecond);
            alert('Сумма: ' + summa);
        }
    }
})();