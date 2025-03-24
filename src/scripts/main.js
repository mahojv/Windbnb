/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
import { loadStays, sumador, totalCounterGuest } from "./utils.js";

// botones
const searchBarBtns = document.querySelectorAll("#searchBarBtns");
const locationSearch = document.querySelector("#locationSearch");
const guestSearch = document.querySelector("#guestSearch");
const searchBtn = document.querySelector("#searchBtn");
const closeTogleBtn = document.querySelector("#closeTogleBtn");
const counterAdult = document.querySelectorAll("#counterAdult");
const counterChildren = document.querySelectorAll("#counterChildren")

// contenedores y etiquetas
const cardsContainer = document.querySelector("#cardsContainer");
const toggleSearch = document.querySelector("#toggleSearch");
const counterAdultTag = document.querySelector("#counterAdultTag")
const counterChildTag = document.querySelector("#counterChildTag")
const guestInputSearch = document.querySelector("#guestInputSearch")
const placeSugestions = document.querySelector("#placeSugestions")
const guestCounter = document.querySelector("#guestCounter")

// Variables Globales
let contadorA = 0
let contadorC = 0
let contadorTotal = 0




locationSearch.addEventListener("click", function (x) {
  toggleSearch.classList.remove("hidden");
});
guestSearch.addEventListener("click", function (x) {
  toggleSearch.classList.remove("hidden");
});
searchBtn.addEventListener("click", function (x) {
  toggleSearch.classList.remove("hidden");
});

closeTogleBtn.addEventListener("click", function (x) {
  toggleSearch.classList.add("hidden");
});

searchBarBtns.forEach(function (event) {


    event.addEventListener('click', function (x){
        let codigo = x.target
        let etiqueta = codigo.id

        if(etiqueta === "locationLabelSearch" || etiqueta === "locationInputSearch"){

            placeSugestions.classList.remove("hidden")
            guestCounter.classList.add("hidden")
        } else if(etiqueta === "guestLabelSearch" || etiqueta === "guestInputSearch"){

            placeSugestions.classList.add("hidden")
            guestCounter.classList.remove("hidden")

        }
            
        
    
    
    })
  
});

counterAdult.forEach(function(event){


    
    event.addEventListener('click', function (x){
        let codigo = x.target
        let etiqueta = codigo.tagName

        if(etiqueta === "BUTTON"){
            contadorA =  sumador(contadorA, codigo.value, counterAdultTag)
            contadorTotal =  totalCounterGuest(contadorA, contadorC, guestInputSearch)
   
        }
    })
})

counterChildren.forEach(function(event){

    event.addEventListener('click', function (x){
        let codigo = x.target
        let etiqueta = codigo.tagName

        if(etiqueta === "BUTTON"){
            contadorC = sumador(contadorC, codigo.value, counterChildTag)         
            contadorTotal = totalCounterGuest(contadorA, contadorC, guestInputSearch)
    
        }
    })
    
})

loadStays(stays, cardsContainer);
