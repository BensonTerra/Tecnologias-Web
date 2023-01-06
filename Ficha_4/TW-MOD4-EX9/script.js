const cores = ['red', 'orange', 'pink', 'yellow'];

for (let i = 0; i < cores.length; i++) {
    const numEscolhido = i + 1;
    console.log(numEscolhido);
    let numEscolhidoSuffix;

    if (numEscolhido ===1)
        numEscolhidoSuffix = 'st';
    else if (numEscolhido === 2)
        numEscolhidoSuffix = 'nd';
    else if (numEscolhido === 3)
        numEscolhidoSuffix = 'rd';
    else if (numEscolhido === 4)
        numEscolhidoSuffix = 'th';
    else if (numEscolhido === 5)
        numEscolhidoSuffix = 'th';

    console.log(`My ${numEscolhido} ${numEscolhidoSuffix} choice is ${cores}`);
}