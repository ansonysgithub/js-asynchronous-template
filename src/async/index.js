const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('After await');
}

console.log('Before');
anotherFn();
console.log('After');