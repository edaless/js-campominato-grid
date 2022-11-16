
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//  - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;





// const gioca = document.getElementById("gioca");

// gioca.addEventListener("click",
    
// );

const campo = document.querySelector(".campo");

// variabile che serve ad impedire di stampare un sacco di campi
let numPartita = 0;
const gioca = document.querySelector("#gioca");
gioca.addEventListener("click",
    function(){
        if(numPartita === 0){
            generaCampo();
            numPartita++;
        };
    }
);




function generaCampo(){
    for(let i = 1; i <= 100; i++){
        // costante in cui salvo la nuova cella
        const nuovaCella = newCella();
        // le inserisco il suo numero
        nuovaCella.innerHTML = i;
        // le aggiungo l'event listener
        nuovaCella.addEventListener("click",
            function(){
                // metto/tolgo la classe clicked (la rendo azzurra)
                nuovaCella.classList.toggle("clicked");
                // stampo il numero in console
                console.log("cella #" + i);
            }
        );



        campo.appendChild(nuovaCella);
        

        
        
    }

}


function newCella(){
    //creo nuovo div e lo salvo nella costante mioElement 
    const mioElement = document.createElement("div");
    // le aggiungo la classe cella
    mioElement.classList.add("cella")
    // ritorno questo div
    return mioElement;
}







// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }


