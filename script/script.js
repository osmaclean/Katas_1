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
            conta++;
        }
    }
    return conta;
}
console.log(countVowels("abacaxi"));

/////////////////////////////////////////////////

// Sétima Tarefa

function countTextOccurrences(string, letra) {
    let conta1 = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] == "a") {
            conta1++
        }
    }
    return conta1;
}
console.log(countTextOccurrences("abacaxi", "a"));

////////////////////////////////////////////////

// Oitava Tarefa 

function textBackwards(string) {
    let palavra = "";
    for (let i = string.length; i > 0; i--) {
        palavra += string[i - 1]
    }
    return palavra;
}
console.log(textBackwards("abacaxi"));

//////////////////////////////////////////////

// Nona Tarefa

function removeBlank(string) {
    let naoEspaco = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            naoEspaco += string[i]
        }
    }
    return naoEspaco;
}
console.log(removeBlank("Não ficará espaços em branco"));

//////////////////////////////////////////////////////////

// Décima Tarefa

function encryptText(string) {
    let crypto = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "A") {
            crypto += "X"
        } else if (string[i] == "E") {
            crypto += "Y"
        } else if (string[i] == "I") {
            crypto += "W"
        } else if (string[i] == "O") {
            crypto += "K"
        } else if (string[i] == "U") {
            crypto += "Z"
        } else if (string[i] == "a") {
            crypto += "x"
        } else if (string[i] == "e") {
            crypto += "y"
        } else if (string[i] == "i") {
            crypto += "w"
        } else if (string[i] == "o") {
            crypto += "k"
        } else if (string[i] == "u") {
            crypto += "z"
        }
    }
    return crypto;
}
console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada"));

alert(`Page made by: Lucas Maclean.`);
alert(`Página de aprendizado e execução de Loops, Condições, Retorno de Valores e Relacionais`);
alert(`Tudo dentro do "Console"`);


















































































































































































