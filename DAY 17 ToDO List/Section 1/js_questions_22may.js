let n = 144;

const sqrt = n ** 0.5

console.log(sqrt);

console.log(sqrt === parseInt(sqrt));

// check if integer
console.log(Number.isInteger(sqrt));


let num = 9;

let prime = true;

for (let i = 2; i < num/2; i++) {
    if (num % i === 0){
        console.log('Not Prime');
        prime = false;
        break;
    }
}

if(prime) console.log('Prime');