function isFibonnacci(number) {
    if (number < 0) return false


    let a = 0;
    let b = 1;

    if (number === a || number === 0) {
        return `O número ${number} pertence à sequência de Fibonnacci`;
    }

    let next = a + b;

    while (next <= number) {
        if (next === number) {
            return `O número ${number} pertence à sequência de Fibonnacci`;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return `O número ${number} não pertence à sequência de Fibonnacci`;

}

const numero = 12;
console.log(isFibonnacci(numero));