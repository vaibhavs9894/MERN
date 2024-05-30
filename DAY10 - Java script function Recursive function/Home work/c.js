const prices2 = [599, 220, 199, 350, 3200, 2830, 1980 ]
const newNums= prices2.filter( (n) => { return  500<n<3000 });
console.log(newNums);