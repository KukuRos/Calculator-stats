

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
    const statF = Number(document.getElementById("fuerza").value);
    const statR = Number(document.getElementById("resistencia").value);
    const statA = Number(document.getElementById("agilidad").value);
    const statP = Number(document.getElementById("percepcion").value);
    const statI = Number(document.getElementById("inteligencia").value);
    const techResult = document.getElementById("QttyTechDice");
    const NomResultT = document.getElementById("NomTechDice");


    switch (document.getElementById("InputTechnics").value) {
        case "GolpePesado":
            var result = statF + 1;
            techResult.innerText = ` Cantidad de dados: ${result}`;
            NomResultT.innerText = `${result}d10`;

            break;
        case "Guillotina":
            var result = statF + (statF/2);
            techResult.innerText = ` Cantidad de dados: ${result}`;
            NomResultT.innerText = `${result}d10`;
            break;
        case "RompeFilas":
            var result = statF/2;
            techResult.innerText = ` Dados: ${result}, enemigos: ${result}`;
            NomResultT.innerText = `${result}d10`;
            break;
        case "MartilloCincel":
            var result = statF + 0;
            var result2 = statF/2
            techResult.innerText = ` Enemigo A: ${result}. Enemigo B: ${result2}`;
            NomResultT.innerText = `Tirada A: ${result}d10. Tirada B: ${result2}d10`;
            break;
        case "Nekodamashi":
            var result = statF/2;
            techResult.innerText = ` Cantidad de dados: ${result}`;
            NomResultT.innerText = `${result}d10`;
            break;
        case "Burbaj":
            var result = stat -1;
            techResult.innerText = ` Cantidad de dados: ${result}`;
            NomResultT.innerText = `${result}d10`;
            break;
        default:
            techResult.innerText = `No válido`;
            break;
    }
}

function EmptyCSD(){
    document.getElementById("QttySpellDice").innerHTML = "";
    document.getElementById("NomSpellDice").innerHTML = "";
}

function EmptyCTD(){
    document.getElementById("QttyTechDice").innerHTML = "";
    document.getElementById("NomTechDice").innerHTML = "";
}