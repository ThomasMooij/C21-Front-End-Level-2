let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  omdat het een zin is tussen haakjes vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype nummer waarom? _____het is een nummer_______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? om javascript te laten weten dat het om een variabel gaat ( decalareren) vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _________17_____ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _____Thomas_______ de waarde noemen we een Argument vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __melding_____ op het scherm met de tekst ____Thomas_____ deze tekst staan op regel __17_____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? alleen als je die ook in je html aanpast vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? als op het element met de id 'hide' wordt gedrukt verandert de display naar 'none', als op het element met de id 'show wordt verandert de display hiervan naar block' en waar wordt deze in je HTML aangeroepen? ____________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML lijn 25 waar de function wordt geroepen vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? laten weten om welke id het gaat vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? hide wordt block en show gaat weg vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____32_________ en wanneer wordt deze aangeroepen _____als er op de knop wordt gedrukt______ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan __________boven aan dit document____ en waar komt de waarde van getal vandaan? _______die wordt in het html bestand aan rekenen gegeven_____ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? de class .som selecteren Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? het variable myInt wordt bij de parameter getal opgetelt vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? de uitkomst verandert naar hand wat ik invul vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______44_______ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ______eerste parameter van de functie________ en waar komt de waarde van kleur vandaan? ______tweede parameter______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ______derde parameter______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ___________je kan een element aangeven en daar de kleur en grootte van veranderen__________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ______een alert met de veriable mystr wordt getoont_____ en wanneer gebeurt dat _______als alle code op deze pagina zich afgespeeld heeft___ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ____________de alert laat zien wat ik onder mystr invul_______ vul je antwoord in op de lijn.


















