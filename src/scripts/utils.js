


export function loadStays (array, box, itemsBox){
    
box.innerHTML = ""
itemsBox.innerHTML = ""

let items = array.length
let itemsTemplate = ""

if(items > 12){

     itemsTemplate = `<p id="itemsCardCounter" class="font-semibold">12+ stays</p>`

}else if(items > 1 || items === 0){
    
    itemsTemplate = `<p id="itemsCardCounter" class="font-semibold">${items} stays</p>`

}else{

    itemsTemplate = `<p id="itemsCardCounter" class="font-semibold">${items} stay</p>`


}



array.forEach(item => {

    let superHostItem = ""
    let bedsItem = 
            `${item.beds} beds`




        if(item.superHost === true){
            superHostItem = `
            <p class="flex border h-[34px] min-w-[100px] justify-center items-center rounded-xl px-[5px] font-extrabold text-[12px]">
    SUPER HOST</p>`
        
        }
        if(item.beds === null){
            bedsItem =      ""   

        }

    const template = `

            <div role="card" class="flex gap-1 flex-col max-w-[600px] max-h-[460px] sm:max-w-[283px] md:max-w-[380px]">
                <figure class="rounded-xl overflow-hidden max-h-[252px] w-full ">
                    <img class="object-cover aspect-video" src=${item.photo}
                        alt="">
                </figure>
                <span class="flex justify-between ">
                    <span class=" flex items-center  gap-3 ">
                        ${superHostItem}
                        <p class="text-grisTexto text-[14px]">${item.type}. ${bedsItem} </p>
                    </span>
                    <span class="flex gap-2 w-fit items-center ">
                        <figure class="size-6 text-rojoclaro ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                                fill="currentColor" stroke="currentColor" class="  ">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </figure>
                        <p class="text-grisRanking text-[15px]">${item.rating}</p>
                    </span>
                </span>
                <p>${item.title} </p>


            </div> `

         box.innerHTML += template
         itemsBox.innerHTML = itemsTemplate

});


}


export function sumador (counter, op, tag){
    const idIndividual = tag.id
    if (op === "-" && counter > 0){
        counter-= 1 


   }else if (op === "+"){

         counter+= 1
    }
    const template = `
        <p id="${idIndividual}" >${counter}</p>
        `
    tag.innerHTML= template

    return counter
}

export function totalCounterGuest(cA, cB, tag){

    const cT = cA + cB

    tag.innerHTML= `<p class="text-center" id="guestInputSearch">${cT}</p>`
    
    return cT


}

export function filterSearch(contentInputSearch, guestSearch , arrayStay) {

    let arrayFiltered = arrayStay.filter(function (search){


        if(contentInputSearch.toLowerCase().includes(search.city.toLowerCase()) && search.maxGuests >= guestSearch ){

            return search
            

        }



        

        

    

    }
    

)


return arrayFiltered
        


    
}