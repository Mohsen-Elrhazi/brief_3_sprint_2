let formInfos = document.getElementById("form-infos");
formInfos.style.display = "none";

let formation = document.getElementById("formation");

let btnAddPlayers = document.getElementById("add-players");

btnAddPlayers.addEventListener("click", function () {
  formInfos.style.display = "grid";
  formation.style.display = "none";
});

// Recuperer tous les card-players
let cardPlayers = document.querySelectorAll(".card-player");
//structurer la card player
cardPlayers.forEach((element) => {
  //div de image et name
  let divImgName = document.createElement("div");
  divImgName.classList.add("image-name");

  let name = document.createElement("p");
  name.textContent = "Messi";
  divImgName.appendChild(name);

  let imgPlayer = document.createElement("img");
  imgPlayer.setAttribute("src", "./assets/images/messi.png");
  imgPlayer.style.width = "60px";
  // imgPlayer.style.order="1"

  divImgName.appendChild(imgPlayer);

  //creer deuxieme div de infos player
  let divInfos = document.createElement("div");
  divInfos.classList.add("info");

  // Créer le premier paragraphe
  let p1 = document.createElement("p");
  p1.textContent = "PAC"; 
  let span1 = document.createElement("span");
  span1.textContent = "0"; 
  p1.appendChild(span1);
  divInfos.appendChild(p1);

  // Créer le deuxième paragraphe
  let p2 = document.createElement("p");
  p2.textContent = "SHO"; 
  let span2 = document.createElement("span");
  span2.textContent = "0"; 
  p2.appendChild(span2);
  divInfos.appendChild(p2);

  // Créer le troisième paragraphe
  let p3 = document.createElement("p");
  p3.textContent = "PAS"; 
  let span3 = document.createElement("span");
  span3.textContent = "0";
  p3.appendChild(span3);
  divInfos.appendChild(p3);

  // Créer le quatrième paragraphe
  let p4 = document.createElement("p");
  p4.textContent = "DRI"; 
  let span4 = document.createElement("span");
  span4.textContent = "0";
  p4.appendChild(span4);
  divInfos.appendChild(p4);

  // Créer le cinquième paragraphe
  let p5 = document.createElement("p");
  p5.textContent = "DEF"; 
  let span5 = document.createElement("span");
  span5.textContent = "0"; 
  p5.appendChild(span5);
  divInfos.appendChild(p5);

  // Créer le sixième paragraphe
  let p6 = document.createElement("p");
  p6.textContent = "PHY";
  let span6 = document.createElement("span");
  span6.textContent = "0";
  p6.appendChild(span6);
  divInfos.appendChild(p6);

  // div flags
  let divFlags = document.createElement("div");
  divFlags.classList.add("flags");

  element.style.display = "grid";

  element.appendChild(divImgName);
  element.appendChild(divInfos);
  element.appendChild(divFlags);
});

// Recuperer (select) pour la formation
let selectFormation = document.getElementById("select-formation");

// Recuperer la position des attaquants
let positionAttaquant = document.querySelector(".attaquant");

//recuperer AT-3
let attaquant3 = document.getElementById("AT-3");

// Recuperer la position milieu
let positionMilieu = document.querySelector(".milieu");

//recuperer ML-1
let milieu1 = document.getElementById("ML-1");

//recuperer ML-2
let milieu2 = document.getElementById("ML-2");

//recuperer ML-3
let milieu3 = document.getElementById("ML-3");

//recuperer GK
let gardient = document.getElementById("GK");

//recuperer DF-2
let defenseur2 = document.getElementById("DF-2");

//recuperer DF-3
let defenseur3 = document.getElementById("DF-3");

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

// button changer formation dans la form pour retour a la partie de formation
let btnChangeFormation = document.getElementById("change-formation");

btnChangeFormation.addEventListener("click", function () {
  formInfos.style.display = "none";
  formation.style.display = "flex";
});

// recuperer les values de player de form
let name = document.getElementById("name");
let position = document.getElementById("position");
let nationality = document.getElementById("nationality");
let club = document.getElementById("club");
let rating = document.getElementById("rating");
let pace = document.getElementById("pace");
let shooting = document.getElementById("shooting");
let passing = document.getElementById("passing");
let dribbling = document.getElementById("dribbling");
let physical = document.getElementById("physical");

// Add player a la carte de terrain
let btnAddPlayer = document.getElementById("add-player");

btnAddPlayer.addEventListener("click", function () {});
