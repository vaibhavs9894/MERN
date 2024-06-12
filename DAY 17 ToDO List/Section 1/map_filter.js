const nums = [ 2, 7, 3, 9, 12, 62 ];

const newNums = nums.map( (n) => { return n**2 } );

console.log(newNums);

const names = ['ramu', 'shamu', 'pappu', 'kaliya'];
// const len = [4, 5, 5, 6];

const prices = ['₹234.762/-', '₹264.22/-', '₹90.1/-', '₹123.212/-'];
// const cleanedPrices = [234.762, 264.22, 90.1, 123.212];

const cleanedPrices = prices.map( (p) => { return parseInt(p.slice(1, -2)) });
console.log(cleanedPrices);

const evenNums = nums.filter( (n) => { return n%2===0 } );
console.log(evenNums);

const prices2 = [599, 220, 199, 350, 3200, 2830, 1980];
// filter all prices between 500 and 3000