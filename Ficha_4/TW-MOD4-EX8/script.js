const listaPalavras = ["jogging","running","swimming"];
console.log(`Palavras: ${listaPalavras}`);

function ContarPalvras_Letras_media(Palavras) {
    
    const palavrasTotal = Palavras.length;
    console.log(`Total Palavras: ${palavrasTotal}`);

    let letrasTotal = 0;
    for (const i in Palavras) {

        letrasTotal += Palavras[i].length;

    }
    console.log(`Total Letras: ${letrasTotal}`);

    let media = 0
    media = letrasTotal/palavrasTotal
    console.log(`Media Letras: ${media}`);
}

ContarPalvras_Letras_media(listaPalavras);