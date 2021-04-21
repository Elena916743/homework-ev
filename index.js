//задание3
//Выведите столбец чисел от 1 до 100.
var i = 1; 
while (i <= 100) {
    document. write(i + '<br>');
    i++;
}
for (var i = 1; i <= 100; i++) {
	document.write(i + '<br>');
}

//Выведите столбец чисел от 11 до 33
var i = 11;
while (i <= 33) {
    document.write(i + '<br>');
}
for (var i = 11; i <=33; i++) {
     document.write(i +'<br>');
}
//С помощью цикла найдите сумму чисел от 1 до 100.
var sum = 0;

for (var i = 1; i <= 100; i++) {
sum += i;
}
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все
let arr = [1, 2, 3, 4, 5]; 
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + '<br>');
}
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
let arr = [1, 2, 3, 4, 5];
 for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  console.log(result);
  //Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х,
//но меньше 10.
var arr = [2, 5, 9, 15, 0, 4];

 for (var i = 0; i < arr.length; i++) {

    if (arr[i] > 3 && arr[i] < 10) document.write(arr[i]+'<br>');
}


  
