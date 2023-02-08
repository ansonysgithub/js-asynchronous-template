function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterator(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterator(['a', 'b', 'c']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);