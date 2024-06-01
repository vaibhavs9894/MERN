const myArr = [765, 'hello', true, console.log, [1, 2, 3]];

console.log(myArr);

const movies = ['Tere Naam', 'Animal', 'PK', 'RRR', 'Deja Vu', 'Shaitaan'];
console.log(movies.length); // also works for strings

// indexing
console.log(movies[4]); // also works for strings
console.log(movies.at(3));

movies[4] = 'The Shawshank Redemption';
console.log(movies);
console.log(movies.at(-2));

// slicing
console.log(movies.slice(1, 4)); // also works for strings
console.log(movies.slice(1, 40));
console.log(movies.slice(1));

const price = '₹536.65/-';
console.log(price.slice(1, 7));

// adding new elements
movies.push('The Dark Knight');  // adds new element at end of array
movies.unshift('The Godfather');  // adds new element at start of array
console.log(movies);

// removing elements
movies.pop();  // removes last element
movies.shift();  // removes first element
console.log(movies);

// movies.splice(3, 2);  // it will remove 2 elements starting from index 3
// movies.splice(3, 2, 'Batman', 'Superman', 'Thor'); // it will remove 2 elements starting from index 3 and add 3 new elements
movies.splice(3, 0, 'Batman', 'Superman', 'Thor');


console.log(movies);