const promise = new Promise(function (resolve, reject) {
    resolve('hey!');
});

const cows = 16;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows!`);
    } else {
        reject('There are not enough cows!');
    }
});

countCows.then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log('We are done!');
});