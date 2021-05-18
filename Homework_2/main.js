// Задача №1
// Дано => массив различный данных (у нас это в основном типы просто для разнообразия).
// Необходимо => c помощью цикла for вывести в консоль только те элементы массива
// которые являются ложными (falsy) а так же их порядковый номер в массиве (или его еще называют индексом)
// пример вывода в консоль для одного из элементов - undefined, index - 1
// Где:
// 'undefined' - это элемент массива;
// ', ' - запятая и пробел просто для разделения значений
// 'index - ' - это просто строка которая обозначает что следом идет порядковый номер
// '1' - это сам порядковый номер массива (индекс) о чем предупреждает строка выше

let data = [
    null,
    undefined,
    false,
    'string',
    0,
    9999999999999999n,
    Symbol('id'),
    { itIsObject: true },
    [0, 11, 22, 33],
];

for (let i = 0; i < data.length; i++) {
	if (!data[i]) {
		console.log(data[i] + ', ' + 'index - ' + data.indexOf(data[i]));
	}
}

// Задача №2
// Дано => все тот же массив 'data'
// Необходимо => используя все тот же цикл for а так же логические операторы
// вывести в консоль только те элементы массива которые являются или объектом (object) или массивом

let data = [
    null,
    undefined,
    false,
    'string',
    0,
    9999999999999999n,
    Symbol('id'),
    { itIsObject: true },
    [0, 11, 22, 33],
];

for(let i = 0; i < data.length; i++) {
     if (typeof data[i] === 'object' || typeof data[i] === 'array') {
         console.log(data[i]);
     }
}

// Задача №3
// Существует пустой объект 'personInfo'
// Необходимо заполнить его информацией и использовать при этом минимум кода
// Полная свобода действий, никаких ограничений по использованию функций / методов / циклов для заполнения объекта
// Базовый объект можно редактировать / модифицировать как вам удобно

let personInfo = {
    firstName: null,
    surName: null,
    sex: null,
    age: null,
    weight: null,
    height: null,
    isMarried: null,
    hasChildren: null,
};

personInfo.firstName = (prompt('Напиши свою Фамилию'));
personInfo.surName = (prompt('Как тебя зовут?'));
personInfo.sex = (prompt('Ты Мужчина ли Женщина?'));
personInfo.age = (+prompt('Сколько тебе лет?'));
personInfo.weight = (+prompt('Какой у тебя Обхват талии, (см)?'));
personInfo.height = (+prompt('Какой у тебя Рост, (см)?'));
personInfo.isMarried = (prompt('Ты Женат/Замужем?'));
personInfo.hasChildren = (prompt('У тебя есть дети?'));

console.log(personInfo);

