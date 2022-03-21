

function CalcSpellDice(){
    const stat = Number(document.getElementById("inteligencia").value);
    const spellResult = document.getElementById("QttySpellDice");
    const NomResult = document.getElementById("NomSpellDice");


    switch (document.getElementById("InputSpells").value) {
        case "Thalera":
            var result = stat + 0;
            spellResult.innerText = ` Cantidad de dados: ${result}`;
            NomResult.innerText = `${result}d10`;

            break;
        case "Brism":
            var result = stat + 0;
            spellResult.innerText = ` Cantidad de dados: ${result}`;
            NomResult.innerText = `${result}d10`;
            break;
        case "Arcael":
            var result = stat + 0;
            spellResult.innerText = ` Cantidad de dados: ${result}`;
            NomResult.innerText = `${result}d10`;
            break;
        case "Glancie":
            var result = stat + 0;
            spellResult.innerText = ` Cantidad de dados: ${result}`;
            NomResult.innerText = `${result}d10`;
            break;
        case "Fulgor":Burbaj
            var result = stat + 0;
            spellResult.innerText = ` Cantidad de dados: ${result}`;
            NomResult.innerText = `${result}d10`;
            break;
        case "Burbaj":
            var result = stat -1;
            spellResult.innerText = ` Cantidad de dados: ${result}`;
            NomResult.innerText = `${result}d10`;
            break;
        default:
            spellResult.innerText = `No válido`;
            break;
    }


}


function CalcTechDice(){
    
}