/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from "./stays.js";
import {
  loadStays,
  sumador,
  totalCounterGuest,
  filterSearch,
  listaPrincipal,
  suggestionDeploy,
} from "./utils.js";

// botones
const searchBarBtns = document.querySelectorAll("#searchBarBtns");
const locationSearch = document.querySelector("#locationSearch");
const guestSearch = document.querySelector("#guestSearch");
const searchBtn = document.querySelector("#searchBtn");
const closeTogleBtn = document.querySelector("#closeTogleBtn");
const counterAdult = document.querySelectorAll("#counterAdult");
const counterChildren = document.querySelectorAll("#counterChildren");
const searchStay = document.querySelector("#searchStay");
const searchStay2 = document.querySelector("#searchStay2");

// contenedores y etiquetas
const cardsContainer = document.querySelector("#cardsContainer");
const toggleSearch = document.querySelector("#toggleSearch");
const counterAdultTag = document.querySelector("#counterAdultTag");
const counterChildTag = document.querySelector("#counterChildTag");
const guestInputSearch = document.querySelector("#guestInputSearch");
const locationInputSearch = document.querySelector("#locationInputSearch");
const placeSugestions = document.querySelector("#placeSugestions");
const guestCounter = document.querySelector("#guestCounter");
const itemsCardCounter = document.querySelector("#itemsCardCounter");
const sugerenciasBox = document.querySelector("#sugerenciasBox");
const locationPlaceBox = document.querySelector("#locationPlaceBox");

// Variables Globales
let contadorA = 0;
let contadorC = 0;
let contadorTotal = 0;
let contentInputSearch = "Whole, Finland";
let contentGuestSearch = "";
let reduccionSugerencias = [];
let principalArray = [];
let arrayInput = "";
let nuevaLista = "";

locationSearch.textContent = contentInputSearch;
guestSearch.textContent = `Add Guest`;

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
  event.addEventListener("click", function (x) {
    let codigo = x.target;
    let etiqueta = codigo.id;

    if (
      etiqueta === "locationLabelSearch" ||
      etiqueta === "locationInputSearch"
    ) {
      principalArray = listaPrincipal(stays);
      suggestionDeploy(principalArray, sugerenciasBox);

      placeSugestions.classList.remove("hidden");
      guestCounter.classList.add("hidden");
    } else if (
      etiqueta === "guestLabelSearch" ||
      etiqueta === "guestInputSearch"
    ) {
      placeSugestions.classList.add("hidden");
      guestCounter.classList.remove("hidden");
    }
  });
});

counterAdult.forEach(function (event) {
  event.addEventListener("click", function (x) {
    let codigo = x.target;
    let etiqueta = codigo.tagName;

    if (etiqueta === "BUTTON") {
      contadorA = sumador(contadorA, codigo.value, counterAdultTag);
      contadorTotal = totalCounterGuest(contadorA, contadorC, guestInputSearch);
    }
  });
});

counterChildren.forEach(function (event) {
  event.addEventListener("click", function (x) {
    let codigo = x.target;
    let etiqueta = codigo.tagName;

    if (etiqueta === "BUTTON") {
      contadorC = sumador(contadorC, codigo.value, counterChildTag);
      contadorTotal = totalCounterGuest(contadorA, contadorC, guestInputSearch);
    }
  });
});

locationInputSearch.addEventListener("input", function (event) {
  contentInputSearch = event.target.value;

  principalArray = listaPrincipal(stays);
  suggestionDeploy(principalArray, sugerenciasBox);

  arrayInput = contentInputSearch.split(", ");

  nuevaLista = filterSearch(arrayInput, contadorTotal, stays);

  if (nuevaLista.length > 0) {
    console.log(typeof arrayInput.length);

    loadStays(nuevaLista, cardsContainer, itemsCardCounter);

    if (arrayInput.length === 1) {
      locationSearch.textContent = `${contentInputSearch}, Finland`;
      guestSearch.textContent = `${contadorTotal} guests`;
    } else if (arrayInput.length === 2) {
      locationSearch.textContent = contentInputSearch;
      guestSearch.textContent = `${contadorTotal} guests`;
    }
  }

  locationPlaceBox.innerHTML = `
        <h1 id="locationPlaceBox" class="text-2xl font-bold">Stays in ${contentInputSearch}</h1>
        `;
});

guestInputSearch.addEventListener("input", function (event) {
  contentGuestSearch = event.target.value;
  console.log(contentGuestSearch);

  nuevaLista = filterSearch(arrayInput, contadorTotal, stays);
  console.log(nuevaLista);

  if (nuevaLista.length > 0) {
    loadStays(nuevaLista, cardsContainer, itemsCardCounter);

    locationPlaceBox.innerHTML = `
        <h1 id="locationPlaceBox" class="text-2xl font-bold">Stays in ${contentInputSearch}</h1>
        `;
    locationSearch.textContent = contentInputSearch;
    guestSearch.textContent = `${contadorTotal} guests`;
  }
});

searchStay.addEventListener("click", function (x) {
  if (arrayInput.length === 1) {
    locationSearch.textContent = `${contentInputSearch}, Finland`;
    guestSearch.textContent = `${contadorTotal} guests`;
  } else if (arrayInput.length === 2) {
    locationSearch.textContent = contentInputSearch;
    guestSearch.textContent = `${contadorTotal} guests`;
  }
  nuevaLista = filterSearch(arrayInput, contadorTotal, stays);

  if (nuevaLista.length > 0) {
    loadStays(nuevaLista, cardsContainer, itemsCardCounter);

    locationPlaceBox.innerHTML = `
        <h1 id="locationPlaceBox" class="text-2xl font-bold">Stays in ${contentInputSearch}</h1>
        `;
  } else {
    console.log("cero destinos");
    cardsContainer.innerHTML = "";
    locationPlaceBox.innerHTML = `
        <h1 id="locationPlaceBox" class="text-2xl font-bold">Sin resultados</h1>
        `;
    itemsCardCounter.innerHTML = `<p id="itemsCardCounter" class="font-semibold">0 stays</p>`;
  }
  toggleSearch.classList.add("hidden");
});

searchStay2.addEventListener("click", function (x) {
  if (arrayInput.length === 1) {
    locationSearch.textContent = `${contentInputSearch}, Finland`;
    guestSearch.textContent = `${contadorTotal} guests`;
  } else if (arrayInput.length === 2) {
    locationSearch.textContent = contentInputSearch;
    guestSearch.textContent = `${contadorTotal} guests`;
  }

  nuevaLista = filterSearch(arrayInput, contadorTotal, stays);

  if (nuevaLista.length > 0) {
    loadStays(nuevaLista, cardsContainer, itemsCardCounter);

    locationPlaceBox.innerHTML = `
        <h1 id="locationPlaceBox" class="text-2xl font-bold">Stays in ${contentInputSearch}</h1>
        `;
  } else {
    cardsContainer.innerHTML = "";
    locationPlaceBox.innerHTML = `
        <h1 id="locationPlaceBox" class="text-2xl font-bold">Sin resultados</h1>
        `;
    itemsCardCounter.innerHTML = `<p id="itemsCardCounter" class="font-semibold">0 stays</p>`;
  }

  toggleSearch.classList.add("hidden");
});

loadStays(stays, cardsContainer, itemsCardCounter);
