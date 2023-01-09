function contaVogais(str) {
    let texto = str
    let vogalTotal = 0
    let consTotal = 0
    let special = 0
    const vogais = ["a","A","e","E","i","I","o","O","u","U"]
    for (let i = 0; i <= texto.length; i++){
        if (vogais.includes(texto.charAt(i))){
            vogalTotal += 1
        }
        else if(texto.charAt(i) == " "){
            special += 1
        }
        else{
            consTotal += 1
        }
    }
    console.log(`vogais: ${vogalTotal}`)
}
let texto1 = "Hello world!"
contaVogais(texto1)
let texto2 = "aeiou"
contaVogais(texto2)