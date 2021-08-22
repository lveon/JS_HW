//
// Задание:
// Запросите у пользователя число,
// посчитайте сумму всех числе между 0 и введенным значением и отобразите результат на экран.


let result = Number(prompt("Введите число"));
let sumNumber = 0;
for (; result > 0;) {

    sumNumber += result;
    result--;
    console.log(sumNumber);
}
alert(`Сумма всех чисел ${sumNumber}`)
