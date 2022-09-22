let passage_personnage = document.querySelector("#passer")
let info = document.querySelector("#info")
let footer = document.querySelector("#piedpage")
let i = 0

function create(tagName, container, text=null, classs=null, id=null) {
    let element = document.createElement(tagName)
    container.appendChild(element)
    if (text)
        element.appendChild(document.createTextNode(text))
    if (classs)
        element.classList.add(classs)
    if (id)
        element.id = id
    return element
}

function create_row_image(starwars,container){
    /* cette fonction affiche les informations sur un personnages
    entré: 
        - starwars : list de d'objet
        - container : l'élement mère de la balise */  
    if (document.querySelector("#image")){
        document.querySelector("#image").remove()
        let img_perso = create("img",container,"","","image")
        img_perso.src = starwars[i].image
        img_perso.style.width = 500 + "px"
        img_perso.style.height = 500 + "px"
    }
    else {
        let img_perso = create("img",container,"","","image")
        img_perso.src = starwars[i].image
        img_perso.style.width = 500 + "px"
        img_perso.style.height = 500 + "px"
    }
}

function create_text_info(starwars,container){
    /* cette fonction affiche les informations sur un personnages
    entré: 
        - starwars : list de d'objet
        - container : l'élement mère de la balise*/    
    info.innerHTML=""
    let name = create("p",container,"nom: "+starwars[i].name,"info_perso","")
    let hairColor = create("p",container,"couleur des cheveux: "+starwars[i].hairColor,"info_perso","")
    let eyeColor = create("p",container,"couleur des yeux: "+starwars[i].eyeColor,"info_perso","")
    let skinColor = create("p",container,"couleur de la peau : "+starwars[i].skinColor,"info_perso","")
    let mass = create("p",container,"mass : "+starwars[i].mass +" kg","info_perso","")
    let height = create("p",container,"height : "+starwars[i].height +" m","info_perso","")
    let home = create("p",container,"planète : "+starwars[i].homeworld,"info_perso","")
    let species = create("p",container,"espèce : "+starwars[i].species,"info_perso","")
}

/* affichage */

//bouton
let bouton_prec = create("button",footer,"précédent","","")
let bouton_suiv = create("button",footer,"suivant","","")

//affiche image
let div_image = create("div",passage_personnage,"","","")

//image
create_row_image(starwars,div_image)

//info personnage
create_text_info(starwars,info)

/*passage des personnages*/
bouton_suiv.addEventListener("click",() => {
    i++
    if ( i == starwars.length ){
        i = 0
    }
    create_row_image(starwars,div_image)
    create_text_info(starwars,info)
})
bouton_prec.addEventListener("click",() => {
    i--
    if ( i < 0 ){
        i = starwars.length -1
    }
   create_row_image(starwars,div_image)
    create_text_info(starwars,info)
})

/* intéraction texte */
info.addEventListener("mouseenter",() => {
    document.querySelector("#info p ").style.color  = "orange"
})
info.addEventListener("mouseleave",() => {
    document.querySelector("#info p ").style.color  = "blue"
})
