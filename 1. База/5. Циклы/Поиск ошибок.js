// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }


// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }


// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }


// let i = 0;

// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }


// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);


// let res = 1;

// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }

// console.log(res);


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length-1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length-1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15


// let arr = [1, 2, 3, 4, 5];
// let i = 0;

// for (let elem of arr) {
// 	arr[i] = elem ** 2;
//   i++;
// }

// console.log(arr);


// let arr = [];

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);


// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let elem in obj) {
// 	sum += obj[elem];
// }

// console.log(sum);


// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let key in obj) {
// 	sum += obj[key];
// }

// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// let res = '';

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++';
//     break
// 	} else {
// 		res = '---';
// 	}
// }

// console.log(res);


// let arr = []

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let res = false;

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = true;
// 		break;
// 	}
// }

// console.log(res);


// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res);