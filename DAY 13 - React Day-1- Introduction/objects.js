const student = {
    name: 'Ramu',
    rollno: 2465362,
    email: 'ram@mail.com'
}

console.log(student);

console.log(student.name);
console.log(student['name']);

student.address = 'Lucknow';
console.log(student);
student.rollno = 7625713;

console.log(student);

console.log( Object.keys(student) );
console.log( Object.values(student) );

const smartphone = {
    brand : 'Samsung',
    model: 'S23',
    price : 79000,
    colors : [ 'black', 'grey', 'white' ]
};

console.log( smartphone.price);
console.log( smartphone.colors[1]);

smartphone.colors.push('red');

console.log(smartphone);

const smartphoneList = [
    { brand : 'Samsung', model: 'S23', price : 79000, colors : [ 'black', 'grey'] },
    { brand : 'Mi', model: 'Note 13', price : 15000, colors : [ 'blue', 'red', 'white'] },
    { brand : 'Oneplus', model: '12R', price : 45000, colors : [ 'black', 'green'] },
    { brand : 'Nokia', model: 'Lumia', price : 25000, colors : [ 'red', 'yellow'] },
    { brand : 'Apple', model: '17', price : 13000, colors : [ 'silver', 'white', 'black'] },
    { brand : 'Samsung', model: 'A55', price : 39999, colors : [ 'white', 'black'] },
    
];

console.log(smartphoneList[0].brand);
console.log(smartphoneList[0].colors[1]);
smartphoneList[0].colors.push('blue');

console.log(smartphoneList);

// print price of 4th smartphone
console.log(smartphoneList[3].price);

// filter all smartphones with price lower than 30000
const budgetPhones = smartphoneList.filter( ( phone ) => { return phone.price < 30000 } );
console.log('------------');
console.log(budgetPhones);
//  filter all smartphones with brand 'Samsung'
const samsungPhones = smartphoneList.filter( ( phone ) => { return phone.brand === 'Samsung' } );
console.log(samsungPhones);

// filter all smartphones with color 'black'

console.log( ['a', 'b', 'c'].includes('c') );
const blackPhones = smartphoneList.filter( ( phone ) => { return phone.colors.includes('black') } );
console.log(blackPhones);

const b = smartphoneList.filter( ( phone ) => { return phone.brand})
console.log('----------------');
console.log(b);