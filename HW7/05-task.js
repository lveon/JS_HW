//
// Задание:
// Напишите сценарий "Игра 'Угадай число'".
// Суть игры - угадать за меньшее количество попыток число, которое загадал сценарий.
// Каждый раз, когда игрок пытается угадать число,
// сценарий выводит подсказку - меньшее или большее число было загадано сценарием.
// Сценарий загадывает число только один раз в начале игры и это число не меняется до завершения игры.
// Для решения задачи используйте циклические и условные конструкции.
//
// для генерации случайного числа используйте следующий код:
// let randomValue = Math.floor(Math.random() * 101); // случайное значение от 0 до 100 будет записано в переменную randomValue
//
// Пример игры:
// Сценарий: я загадал случайное значение от 0 до 100
// Пользователь: 50
// Сценарий: я загадал значение больше, чем 50
// Пользователь: 75
// Сценарий: я загадал значение меньше, чем 75
// Пользователь: 62
// Сценарий: я загадал значение меньше, чем 62
// Пользователь: 56
// Сценарий: Правильно! Загаданное значение 56. Вы угадали с 4й попытки.
//
let randomValue = Math.floor(Math.random() * 101)
let counter = 0

alert(`Угадай число от 0 до 100.`);


while (true) {
    let customValue = Number(prompt("Угадай число"));
    if (customValue >= 0 && customValue <= 100) {
        if (customValue > randomValue) {
            counter++;
            alert(`Нужно число меньше ${customValue}`);
        } else if (customValue < randomValue) {
            counter++;
            alert(`Нужно число больше ${customValue}`);
        } else {
            counter++;
            alert(`Бинго! Загаданное число ${randomValue}. Вы угадали с ${counter} попытки`);
            break;
        }


    }

}