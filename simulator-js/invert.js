// Инверсия объекта
// Напишите функцию, которая принимает объект и возвращает новый объект, где:
// ключи — значения исходного объекта,
// значения — ключи исходного объекта.
// Поля исходного объекта — строки или числа.

// аналог lodash.invert
// { a: 1 } => { 1: 'a' }


function invert(obj) {
    const invertObj ={};
    for(let key in obj) {
      invertObj[obj[key]] = key;
    }
    return invertObj
}

console.log(invert({a:1}));