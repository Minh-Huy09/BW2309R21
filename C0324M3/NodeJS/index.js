console.log('Hello')


let f1 = () => {
    console.log('Arrow Function!!!');
}
f1();
f1();
f1();

let f2 = a => {
    console.log('A = ' + a)
}
f2(10);
f2(20);

let f3 = a => a*a;
console.log(f3(5));
console.log(f3(6));

let f4 = (a, b) => {
    b = 10;
    return a + b;
}

console.log(f4(5,6));