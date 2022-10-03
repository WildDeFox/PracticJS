// function func1() {
// 	return 3
// }
// function func2() {
// 	return 5
// }

// console.log( func1() + func2() );


// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
		
// 	}
//   return res;
// }

// console.log(sum([1, 2, 3, 4, 5]));


// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	console.log(res);
// }

// func(arr)



// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2() );



// let arr = sum([1, 2, 3, 4, 5]);
// console.log(arr);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }


// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}

//   return sum;
// }


// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
//   return num;
// }

// console.log(add(10))


// let arr = [1, 2, 3, 4, 5];
// let abc = sum(arr);
// console.log(abc);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }


// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
// 	let arr = String(num).split('');
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
	
// 	return sum;
// }


console.log(isPrime(5)); // должен вывести true

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
}