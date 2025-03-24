/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import {stays} from "./stays.js";
import { loadStays } from "./utils.js";

const buscadorBtns = document.querySelectorAll("#buscadorBtns")
const locationSearch = document.querySelector("#locationSearch")
const guestSearch = document.querySelector("#guestSearch")
const searchBtn = document.querySelector("#searchBtn")
const closeTogleBtn = document.querySelector("#closeTogleBtn")

const cardsContainer = document.querySelector("#cardsContainer")
const toggleSearch = document.querySelector("#toggleSearch")

locationSearch.addEventListener('click', function(x){
    toggleSearch.classList.remove("hidden")

    }
)
guestSearch.addEventListener('click',function(x){
    toggleSearch.classList.remove("hidden")

    } )
searchBtn.addEventListener('click', function(x){
    toggleSearch.classList.remove("hidden")

    })

    closeTogleBtn.addEventListener('click', function(x){

        toggleSearch.classList.add("hidden")

    })


    buscadorBtns.forEach(function (event){

        console.log(event.tagName) 

    })

console.log("fh")

loadStays(stays, cardsContainer )

