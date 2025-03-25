/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
import { loadStays, sumador, totalCounterGuest, filterSearch } from "./utils.js";

// botones
const searchBarBtns = document.querySelectorAll("#searchBarBtns");
const locationSearch = document.querySelector("#locationSearch");
const guestSearch = document.querySelector("#guestSearch");
const searchBtn = document.querySelector("#searchBtn");
const closeTogleBtn = document.querySelector("#closeTogleBtn");
const counterAdult = document.querySelectorAll("#counterAdult");
const counterChildren = document.querySelectorAll("#counterChildren")
const searchStay = document.querySelector("#searchStay")
const searchStay2 = document.querySelector("#searchStay2")



// contenedores y etiquetas
const cardsContainer = document.querySelector("#cardsContainer");
const toggleSearch = document.querySelector("#toggleSearch");
const counterAdultTag = document.querySelector("#counterAdultTag")
const counterChildTag = document.querySelector("#counterChildTag")
const guestInputSearch = document.querySelector("#guestInputSearch")
const locationInputSearch = document.querySelector("#locationInputSearch")
const placeSugestions = document.querySelector("#placeSugestions")
const guestCounter = document.querySelector("#guestCounter")
const itemsCardCounter = document.querySelector("#itemsCardCounter")

// Variables Globales
let contadorA = 0
let contadorC = 0
let contadorTotal = 0
let contentInputSearch = ""
let contentGuestSearch = ""



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
        let locationValue = locationInputSearch.value
        
        

        if(etiqueta === "locationLabelSearch" || etiqueta === "locationInputSearch"){


            // locationValue = codigo.value
            



            placeSugestions.classList.remove("hidden")
            guestCounter.classList.add("hidden")
        } else if(etiqueta === "guestLabelSearch" || etiqueta === "guestInputSearch"){

            placeSugestions.classList.add("hidden")
            guestCounter.classList.remove("hidden")

        } 
        // else if(etiqueta === "searchStay"){
             
        //     console.log(locationValue)
            


        // }


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

locationInputSearch.addEventListener('input', function(event){

    contentInputSearch = event.target.value

    
    
    // console.log(contentInputSearch)
    
    let nuevaLista = filterSearch(contentInputSearch,contadorTotal, stays)
    console.log(nuevaLista)

    if(nuevaLista.length > 0){

        loadStays(nuevaLista, cardsContainer, itemsCardCounter);
    }

    
})

guestInputSearch.addEventListener('input', function(event){

    contentGuestSearch = event.target.value
    console.log(contentGuestSearch)
    

    let nuevaLista = filterSearch(contentInputSearch,contadorTotal, stays)
    console.log(nuevaLista)

    if(nuevaLista.length > 0){

        loadStays(nuevaLista, cardsContainer, itemsCardCounter);
    }


})


searchStay.addEventListener('click', function (x){


    

    let nuevaLista = filterSearch(contentInputSearch,contadorTotal, stays)
    console.log(nuevaLista)

    if(nuevaLista.length > 0){

        loadStays(nuevaLista, cardsContainer, itemsCardCounter);
    }else{
        console.log("cero destinos")
        cardsContainer.innerHTML = ""
        itemsCardCounter.innerHTML = `<p id="itemsCardCounter" class="font-semibold">0 stays</p>`
    }


    toggleSearch.classList.add("hidden");

    locationSearch.value = contentInputSearch
    guestSearch.value = `${contadorTotal} guests`



})

searchStay2.addEventListener('click', function (x){

   
    

    let nuevaLista = filterSearch(contentInputSearch,contadorTotal, stays)
    console.log(nuevaLista)

    if(nuevaLista.length > 0){

        loadStays(nuevaLista, cardsContainer, itemsCardCounter);
    }else{
        console.log("cero destinos")

        cardsContainer.innerHTML = ""
        itemsCardCounter.innerHTML = `<p id="itemsCardCounter" class="font-semibold">0 stays</p>`
    }

    toggleSearch.classList.add("hidden");

    locationSearch.value = contentInputSearch
    guestSearch.value = `${contadorTotal} guests`



})


loadStays(stays, cardsContainer, itemsCardCounter);
