let formInfos = document.getElementById("form-infos");
formInfos.style.display = "none";

let formation = document.getElementById("formation");

let btnAddPlayers = document.getElementById("add-players");

btnAddPlayers.addEventListener("click", function () {
  formInfos.style.display = "grid";
  formation.style.display = "none";
});

// button changer formation dans la form pour retour a la partie de formation
let btnChangeFormation = document.getElementById("change-formation");

btnChangeFormation.addEventListener("click", function () {
  formInfos.style.display = "none";
  formation.style.display = "flex";
});


// Recuperer (select) pour la formation
let selectFormation = document.getElementById("select-formation");

// recuperer card palyers
let cardPlayers=document.querySelectorAll(".card-player")

// Recuperer la position des attaquants
let positionAttaquant = document.querySelector(".attaquant");

//recuperer AT-3
let attaquant3 = document.getElementById("RW");

// Recuperer la position milieu
let positionMilieu = document.querySelector(".milieu");

//recuperer ML-1
let milieu1 = document.getElementById("CM-1");

//recuperer ML-2
let milieu2 = document.getElementById("CM-2");

//recuperer ML-3
let milieu3 = document.getElementById("CM-3");

//recuperer GK
let gardient = document.getElementById("GK");

//recuperer DF-2
let defenseur2 = document.getElementById("CB-2");

//recuperer DF-3
let defenseur3 = document.getElementById("CB-3");

// masquer les cards au debut
cardPlayers.forEach((element) => {
  element.style.display = "none";
});

// ecouter le changement de formation
selectFormation.addEventListener("change", function () {
  if (selectFormation.value === "") {
    cardPlayers.forEach((element) => {
      element.style.display = "none"; // Cacher les cartes
    });
    return; // Sortir de la fonction
  }

  // Afficher toutes les cartes
  cardPlayers.forEach((element) => {
    element.style.display = "block";
  });

  if (selectFormation.value === "4-4-2") {
    // Déplacer l'attaquant 1 vers les milieux
    positionMilieu.appendChild(attaquant3);

    // Ajuster les styles
    positionAttaquant.style.width = "40%";
    positionMilieu.style.width = "85%";

    milieu1.style.marginBottom = "5rem";
    attaquant3.style.marginBottom = "5rem";

    milieu2.style.marginRight = "8.1rem";
    milieu2.style.marginLeft = "0.1rem";

    milieu2.style.marginBottom = "1.2rem";
    milieu3.style.marginTop = "1.1rem";

    gardient.style.marginTop = "6.4rem";
    defenseur2.style.marginLeft = "1.8rem";

    defenseur3.style.marginRight = "1.4rem";
  }
  // Formation 4-4-2
  else if (selectFormation.value === "4-3-3") {
    // Formation 4-3-3 : ramener l'attaquant 3 a sa position originale
    positionAttaquant.appendChild(attaquant3);

    // Réinitialiser les styles
    positionAttaquant.style.width = "68%";
    positionMilieu.style.width = "60%";

    milieu1.style.marginBottom = "0";
    attaquant3.style.marginBottom = "0";

    milieu2.style.marginRight = "0";
    milieu2.style.marginLeft = "0";

    milieu2.style.marginBottom = "0";
    milieu3.style.marginTop = "0";

    gardient.style.marginTop = "8.8rem";
    defenseur2.style.marginLeft = "0";

    defenseur3.style.marginRight = "0";
  }
});


// Récupérer les valeurs du formulaire du joueur
let namePlayer = document.getElementById("name");
let post = document.getElementById("post");
let nationality = document.getElementById("nationality");
let club = document.getElementById("club");
let rating = document.getElementById("rating");
let pace = document.getElementById("pace");
let shooting = document.getElementById("shooting");
let passing = document.getElementById("passing");
let dribbling = document.getElementById("dribbling");
let physical = document.getElementById("physical");

//! fonction pour creer new card player

function createCardPlayer(){
  // Créer une nouvelle carte pour le joueur
  let newCard = document.createElement("div");
  newCard.classList.add("new-card-player");

  // Div pour l'image et le nom
  let divImgName = document.createElement("div");
  divImgName.classList.add("image-name");//!

  let namePl = document.createElement("p");
  namePl.textContent = namePlayer.value; // Affecter le nom du joueur
  divImgName.appendChild(namePl);

  let imgPlayer = document.createElement("img");
  imgPlayer.setAttribute("src", "./assets/images/messi.png"); // Exemple pour l'image 
  imgPlayer.style.width = "60px";
  divImgName.appendChild(imgPlayer);

  // Div pour les informations du joueur
  let divInfos = document.createElement("div");
  divInfos.classList.add("info");//!

  // Ajouter les statistiques
  let p1 = document.createElement("p");
  p1.textContent = "PAC";
  let span1 = document.createElement("span");
  span1.textContent = pace.value; // Affecter la valeur de PAC
  p1.appendChild(span1);
  divInfos.appendChild(p1);

  let p2 = document.createElement("p");
  p2.textContent = "SHO";
  let span2 = document.createElement("span");
  span2.textContent = shooting.value; // Affecter la valeur de SHO
  p2.appendChild(span2);
  divInfos.appendChild(p2);

  let p3 = document.createElement("p");
  p3.textContent = "PAS";
  let span3 = document.createElement("span");
  span3.textContent = passing.value; // Affecter la valeur de PAS
  p3.appendChild(span3);
  divInfos.appendChild(p3);

  let p4 = document.createElement("p");
  p4.textContent = "DRI";
  let span4 = document.createElement("span");
  span4.textContent = dribbling.value; // Affecter la valeur de DRI
  p4.appendChild(span4);
  divInfos.appendChild(p4);

  let p5 = document.createElement("p");
  p5.textContent = "DEF";
  let span5 = document.createElement("span");
  span5.textContent = "0"; // Par défaut, vous pouvez ajouter une valeur statique pour la défense
  p5.appendChild(span5);
  divInfos.appendChild(p5);

  let p6 = document.createElement("p");
  p6.textContent = "PHY";
  let span6 = document.createElement("span");
  span6.textContent = physical.value; // Affecter la valeur de PHY
  p6.appendChild(span6);
  divInfos.appendChild(p6);

  // creer div de flags
  let divFlags=document.createElement("div")
  divFlags.classList.add("flags")
   let imgClub=document.createElement("img")
   imgClub.setAttribute("src","/assets/images/inter miami.webp")
   imgClub.style.width="20px"
   divFlags.appendChild(imgClub)


  // Ajouter tout à la carte
  newCard.appendChild(divImgName);
  newCard.appendChild(divInfos);
  newCard.appendChild(divFlags);

  return newCard
}


// Bouton pour ajouter un joueur
let btnAddPlayer = document.getElementById("add-player");

//! Fonction pour ajouter un joueur à la carte de terrain
btnAddPlayer.addEventListener("click", function () {
  let newCard = createCardPlayer();

  // let positionContainer = document.getElementById(position.value); 
  // if (positionContainer) {
  //     positionContainer.appendChild(newCard); 
  // } else {
  //     console.error("Position invalide : " + position.value);
  // }
  //  positionContainer.innerHTML = ""
  if(post.value==="GK"){
    document.getElementById("GK").appendChild(newCard)
  }
  else if(post.value==="CB"){
    document.getElementById("CB").appendChild(newCard)
  }else if(post.value==="WB"){
    document.getElementById("WB").appendChild(newCard)
  }else if(post.value==="LB"){
    document.getElementById("LB").appendChild(newCard)
  }else if(post.value==="RB"){
    document.getElementById("RB").appendChild(newCard)
  }

  else if(post.value==="CM"){
    document.getElementById("CM").appendChild(newCard)
  }else if(post.value==="RM"){
    document.getElementById("RM").appendChild(newCard)
  }else if(post.value==="LM"){
    document.getElementById("LM").appendChild(newCard)
  }

  else if(post.value==="LW"){
    document.getElementById("LW").appendChild(newCard)
  }else if(post.value==="RW"){
    document.getElementById("RW").appendChild(newCard)
  }
  else if(post.value==="ST"){
    document.getElementById("ST").appendChild(newCard)
  }
    
});

