// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число



// for (let i = 0; i < 11; i++) {
//  if (i === 0) {
//   console.log(`${i} - это ноль`);
//  } else if(i % 2 === 0){
//   console.log(`${i} - четное число`);
//  }else{
//   console.log(`${i} - не четное число`);
//  }
// }





// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1,2,3,4,5,6,7]
// arr.splice(3,2);
// console.log(arr);






// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3




const randomNumber = Array.from({length: 5}, () => Math.floor(Math.random() * 9));
console.log(randomNumber)

// Summa
let sum = 0;
randomNumber.map((item) => sum += item);
console.log(sum); 

// minimal numbers
let minimalNumber = Math.min.apply(null,randomNumber);
console.log(minimalNumber)

// Есть тройка? - TRUE. Нету тройки? = FALSE
console.log(randomNumber.includes(3));













// Доп задание
// for (let i = 0; i < 21; i++) {
//   let string = '';
//   for (let j = 1; j <= i; j++) {
//     string += "x";

    
//   }
//   console.log(string)
// }