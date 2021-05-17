/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.
#
# 2) Написать скрипт который будет выполнять математические операции
# - спрашиваем у пользователя 3 операнда (3 промта).
# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
#   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
#   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
# - использовать if else или switch case для вызова необходимой функции. 
*/

//1
let array = [null, undefined];

let questionOne = +prompt('Сколько тебе лет?');
array.push(Number(questionOne));

let questionTwo = prompt('Как тебя зовут?');
array.push(String(questionTwo));

let questionThree = confirm('Ты еще на сайте?');
array.push(Boolean(questionThree));

let questionFour = prompt('Используешь id или class?');
array.push(Symbol(questionFour));

let questionFive = prompt('123n');
array.push(BigInt(questionFive));

let questionSix = prompt('Как зовут домашнего питомца?');
array.push(Object({name:(questionSix)}));

console.log(array);
//2

function addition (a, b) {
    let result = a + b;
    console.log('Результат сложения ' + 'a' +  '+' + 'b' + ' = ' + result);
}
// console.log(addition(5, 10));

function subtraction (a, b) {
    let result = a - b;
    console.log('Результат вычитания ' + 'a' +  '-' + 'b' + ' = ' + result);
}
// console.log(subtraction(8, 2));

function multiplication (a, b) {
    let result = a * b;
    console.log('Результат умножения ' + 'a' +  '*' + 'b' + ' = ' + result);
}
// console.log(multiplication(3, 4));

function division (a, b) {
    let result = a / b;
    console.log('Результат деления ' + 'a' +  '/' + 'b' + ' = ' + result);
}
// console.log(division(20, 4));

function divisionModulo (a, b) {
    let result = a % b;
    console.log('Результат остатка от деления ' + 'a' +  '/' + 'b' + ' = ' + result);
}
// console.log(divisionModulo(10, 3));

let a = +prompt('Введите значение a...');

let b = +prompt('Введите значение b...');

let operation = prompt('Вы хотите сделать: сложение(+), вычитание(-), умножение(*), деление(/), деление по модулю(%)?');

if (operation == 'сложение' || operation == '+') {
    console.log(addition(a, b));
} else if (operation == 'вычитание' || operation == '-') {
    console.log(subtraction(a, b));
} else if (operation == 'умножение' || operation == '*') {
    console.log(multiplication(a, b));
} else if (operation == 'деление' || operation == '/') {
    console.log(division(a, b));
} else if (operation == 'деление по модулю' || operation == '%') {
    console.log(divisionModulo(a, b));
};
