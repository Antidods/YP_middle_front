// Zip
// Напишите функцию zip. Она принимает любое число объектов, а возвращает единственный объект, который содержит все поля исходных объектов.
//  Если один и тот же ключ встречается в нескольких объектах, следует оставить то значение, что встретилось первым.

// Пример работы
//  const objects = [
//    { foo: 5, bar: 6 },
//    { foo: 13, baz: -1 } // foo - повторяющийся ключ
//  ];

//  zip(...objects); // { foo: 5, bar: 6, baz: -1 }

function zip(...args) {
   const arr = Object.values(args);
   return arr.reduceRight(
      (accumulator, item) => Object.assign(accumulator, item),
      {}
   );
}
const objects = [
   { foo: 5, bar: 6 },
   { foo: 13, baz: -1 }, // foo - повторяющийся ключ
];

console.log(zip(...objects));
