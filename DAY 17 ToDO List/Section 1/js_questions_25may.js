const names = ['ramu', 'shamu', 'pappuu', 'kaliya'];

const newNames = [];

names.forEach((n) => {
    if (n.length > 5) {
        newNames.push(n);
    }
})

console.log(newNames);

const getPrimes = (start, end) => {

    for (let num = start; num <= end; num++) {
        let prime = true;

        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                // console.log('Not Prime');
                prime = false;
                break;
            }
        }

        if (prime) console.log(num);
    }
}

getPrimes(100, 180);