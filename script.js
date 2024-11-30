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

//! Propriete player et gardient
document.querySelectorAll("#normal-player").forEach((element) => {
  element.style.display = "none";
});
document.getElementById("post").addEventListener("change", function () {
  if (document.getElementById("post").value === "GK") {
    document.querySelectorAll("#normal-player").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#propriete-GK").forEach((element) => {
      element.style.display = "block";
    });
  } else {
    document.querySelectorAll("#normal-player").forEach((element) => {
      element.style.display = "block";
    });
    document.querySelectorAll("#propriete-GK").forEach((element) => {
      element.style.display = "none";
    });
  }
});

// Recuperer (select) pour la formation
let selectFormation = document.getElementById("select-formation");

// recuperer card palyers
let cardPlayers = document.querySelectorAll(".card-player");

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
let nationality = document.getElementById("flag-country");
let club = document.getElementById("flag-club");
let rating = document.getElementById("rating");
let pace = document.getElementById("pace");
let shooting = document.getElementById("shooting");
let passing = document.getElementById("passing");
let dribbling = document.getElementById("dribbling");
let deffensing = document.getElementById("deffensing");
let physical = document.getElementById("physical");
let imagePlayer = document.getElementById("image-player");

// !todo

// recuperer id reservation
let reservation = document.getElementById("reservation");

var GK = 0;

//! fonction pour creer new card player

function createCardPlayer() {
  // Creer une nouvelle carte pour le joueur
  let newCard = document.createElement("div");
  newCard.classList.add("new-card-player");

  //! div contain
  let divContain = document.createElement("div");
  divContain.classList.add("divContain");

  //! div Rating Club Country
  let divRatingClubCountry = document.createElement("div");
  divRatingClubCountry.classList.add("ratingCountryClub");
  //  span rating
  let spanRating = document.createElement("span");
  spanRating.textContent = rating.value;
  divRatingClubCountry.appendChild(spanRating);

  //  image country
  let flagImageUrl = nationality.value;
  let imgCountry = document.createElement("img");
  imgCountry.src = flagImageUrl;
  imgCountry.style.width = "20px";

  //image club
  let clubImageUrl = club.value;
  let imgClub = document.createElement("img");
  imgClub.src = clubImageUrl;
  imgClub.style.width = "20px";

  divRatingClubCountry.appendChild(spanRating);
  divRatingClubCountry.appendChild(imgCountry);
  divRatingClubCountry.appendChild(imgClub);

  //! div image et name
  let divImgName = document.createElement("div");
  divImgName.classList.add("image-name"); //!

  let namePl = document.createElement("p");
  namePl.textContent = namePlayer.value;
  divImgName.appendChild(namePl);

  // image player
  let imagePlayerUrl = imagePlayer.value;
  let imgPlayer = document.createElement("img");
  imgPlayer.src = imagePlayerUrl;
  imgPlayer.style.width = "70px";
  divImgName.appendChild(imgPlayer);

  divContain.appendChild(divRatingClubCountry);
  divContain.appendChild(divImgName);

  //! Div pour les informations du joueur
  let divInfos = document.createElement("div");
  divInfos.classList.add("info"); //!

  //! Ajouter les statistiques

  let p1 = document.createElement("p");
  let span1 = document.createElement("span");

  let p2 = document.createElement("p");
  let span2 = document.createElement("span");

  let p3 = document.createElement("p");
  let span3 = document.createElement("span");

  let p4 = document.createElement("p");
  let span4 = document.createElement("span");

  let p5 = document.createElement("p");
  let span5 = document.createElement("span");

  let p6 = document.createElement("p");
  let span6 = document.createElement("span");

  if (document.getElementById("post").value === "GK") {
    p1.textContent = "DIV";
    span1.textContent = document.getElementById("diving").value;

    p2.textContent = "HND";
    span2.textContent = document.getElementById("handling").value;

    p3.textContent = "KIC";
    span3.textContent = document.getElementById("kicking").value;

    p4.textContent = "REF";
    span4.textContent = document.getElementById("reflexes").value;

    p5.textContent = "SPE";
    span5.textContent = document.getElementById("speed").value;

    p6.textContent = "POS";
    span6.textContent = document.getElementById("positioning").value;
  } else {
    p1.textContent = "PAC";
    span1.textContent = pace.value;

    p2.textContent = "SHO";
    span2.textContent = shooting.value;

    p3.textContent = "PAS";
    span3.textContent = passing.value;

    p4.textContent = "DRI";
    span4.textContent = dribbling.value;

    p5.textContent = "DEF";
    span5.textContent = deffensing.value;

    p6.textContent = "PHY";
    span6.textContent = physical.value;
  }
  p1.appendChild(span1);
  p2.appendChild(span2);
  p3.appendChild(span3);
  p4.appendChild(span4);
  p5.appendChild(span5);
  p6.appendChild(span6);

  divInfos.appendChild(p1);
  divInfos.appendChild(p2);
  divInfos.appendChild(p3);
  divInfos.appendChild(p4);
  divInfos.appendChild(p5);
  divInfos.appendChild(p6);

  // Ajouter tout à la carte
  newCard.appendChild(divContain);
  newCard.appendChild(divInfos);

  newCard.style.backgroundImage = 'url("/assets/images/gold-card.png")';
  newCard.style.backgroundPosition = "center";
  newCard.style.backgroundSize = "contain";
  newCard.style.backgroundRepeat = "no-repeat";

  return newCard;
}

// ! creer fonction reservation pour placer un card de reservation vers celle
function cardReserv(){
  let divCardReserv=document.createElement("div")
  divCardReserv.classList.add("cardPlayerReserv")
  return divCardReserv
}
// Bouton pour ajouter un joueur
let btnAddPlayer = document.getElementById("add-player");

// todo les variable pour tester si leplayer a ete ajouter ...
let GKAdded=0
let CBAdded=0
let WBAdded=0
let LBAdded=0
let RBAdded=0
let CMAdded=0
let LMAdded=0
let RMAdded=0
let STAdded=0
let LWAdded=0
let RWAdded=0
//! Fonction pour ajouter un joueur à la carte de terrain
btnAddPlayer.addEventListener("click", function () {
  let newCard = createCardPlayer();
  if (
    !namePlayer.value ||
    !post.value ||
    !nationality.value ||
    !club.value ||
    !rating.value ||
    !pace.value ||
    !shooting.value ||
    !passing.value ||
    !dribbling.value ||
    !deffensing.value ||
    !physical.value
  ) {
    alert("Veuillez remplir tous les champs ");
  } else {
    switch (post.value) {
      case "GK":if(GKAdded===0){
        document.getElementById("GK").appendChild(newCard);
        GKAdded=1
      }else {
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }    
        break;
      case "CB":if(CBAdded===0){
        document.getElementById("CB").appendChild(newCard);
        CBAdded=1
      }else {
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "WB":if(WBAdded===0){
        document.getElementById("WB").appendChild(newCard);
        WBAdded=1
      } else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "LB":if(LBAdded===0){
        document.getElementById("LB").appendChild(newCard);
        LBAdded=1;
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "RB":if(RBAdded===0){
        document.getElementById("RB").appendChild(newCard);
        RBAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "CM":if(CMAdded===0){
        document.getElementById("CM").appendChild(newCard);
        CMAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "LM":if(LMAdded===0){
        document.getElementById("LM").appendChild(newCard);
        LMAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "RM":if(RMAdded===0){
        document.getElementById("RM").appendChild(newCard);
        RMAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "ST":if(STAdded===0){
        document.getElementById("ST").appendChild(newCard);
        STAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "RW":if(RWAdded===0){
        document.getElementById("RW").appendChild(newCard);
        RWAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
      case "LW":if(LWAdded===0){
        document.getElementById("LW").appendChild(newCard);
        LWAdded=1
      }else{
        let newCardReserv=cardReserv()
        document.getElementById("reservation").appendChild(newCardReserv);
        newCardReserv.appendChild(newCard);
      }
        break;
    }
  }
 
});
