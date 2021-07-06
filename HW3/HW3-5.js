// Задание:
// Преобразуйте регистр первого символа строки из нижнего регистра в верхний.
const str = "string not starting with capital";
const result =`${str.substring(0,1).toUpperCase()}${str.substring(1)}`;

console.log(result); // "String not starting with capital"