// Задание:
// Напишите преобразование первого символа строки в нижний регистр.

const str = "Пример строки";
const result =`${str.substring(0,1).toLowerCase()}${str.substring(1)}`;

console.log(result); // пример строки
