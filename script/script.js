// Primeira Tarefa

function cubicSquare() {
    let numbers = [];
    for (let i = 0; i <= 10; i++) {
        numbers.push(Math.pow(i, 3));
    }
    return numbers
}
console.log(cubicSquare());

//////////////////////////////

// Segunda Tarefa

function divisiblesFor(limitador, divisor) {
    let div = [];
    for (let i = 0; i <= limitador; i++) {
        if (i % divisor == 0) {
            div.push(i);
        }
    }
    return div;
}
console.log(divisiblesFor(100, 10));

//////////////////////////////////////

// Terceira Tarefa 

function stringElement(string, number) {
    for (let i = 0; i <= string.length; i++) {
        if ([i] == number) {
            return string[i].toUpperCase();
        }
    }
}
console.log(stringElement("algorítimos",8));

////////////////////////////////////////

// Quarta Tarefa

















































































































































































































