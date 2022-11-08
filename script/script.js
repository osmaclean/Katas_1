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
console.log(stringElement("algorítimos", 8));

////////////////////////////////////////

// Quarta Tarefa

function stringSlicer(string, number) {
    let = novaString = "";
    for (let i = 0; i <= number; i++) {
        if (number > 0) {
            novaString += string[i].toUpperCase();
        }
    }
    return novaString;
}
console.log(stringSlicer("algorítimo", 3));

//////////////////////////////////////////


// Quinta Tarefa

function stringRest(string, number) {
    let = novaString1 = "";
    for (let i = 4; i <= number; i++) {
        if (number > 0) {
            novaString1 += string[i].toUpperCase();
        }
    }
    return novaString1;
}
console.log(stringRest("algorítimos", 10));

/////////////////////////////////////////////////////


// Sexta Tarefa

function countVowels(string) {
    let conta = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] == "a" || string[i] == "i") {
            conta ++;
        }
    }
    return conta;
}
console.log(countVowels("abacaxi"));

































































































































































































