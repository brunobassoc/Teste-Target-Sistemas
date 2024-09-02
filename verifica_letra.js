function verificaLetra(str) {
    const lowerCaseStr = str.toLowerCase();

    let count = 0;

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === 'a') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra 'a' aparece ${count} vezes na string.`;
    } else {
      return "A letra 'a' não aparece na string.";
    }
  }


const inputString = "Gatos e Cachorros";
console.log(verificaLetra(inputString));
