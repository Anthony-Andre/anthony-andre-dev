let parcours = document.getElementById('parcours')
let realisations = document.getElementById('realisations')
let contact = document.getElementById('contact')

function afficherParcours(){
  realisations.style.display="none"; 
  contact.style.display="none"; 
  parcours.style.display="flex";
}

function afficherRealisations(){
  parcours.style.display="none";
  contact.style.display="none";
  realisations.style.display="grid"; 
}

function afficherContact(){
  parcours.style.display="none";
  realisations.style.display="none";
  contact.style.display="flex";
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function parcoursMelange(){
  let presentation = "Bonjour, je m'appelle Anthony, voici mon parcours : J'ai commencé ma vie professionnelle en tant que réceptionniste d'hôtel, pendant 10 ans. Après avoir découvert le monde du développement web, j'ai décidé de changer complètement de voie et d'en faire mon métier. Me voici donc."; 
  let tableauPresentationMelange = Array.from(presentation);

  tableauPresentationMelange.sort(()=> Math.random() - 0.5);
  for (let i=0; i<tableauPresentationMelange.length; i++){
    let newDiv = document.createElement("div");
    let caractere = tableauPresentationMelange[i]; 
    newDiv.innerHTML = caractere; 
    newDiv.id = "newDiv"+i;
    parcours.appendChild(newDiv);
  }
}

function remiseParcoursEnOrdre(){
  let presentation = "Bonjour, je m'appelle Anthony, voici mon parcours : J'ai commencé ma vie professionnelle en tant que réceptionniste d'hôtel, pendant 10 ans. Après avoir découvert le monde du développement web, j'ai décidé de changer complètement de voie et d'en faire mon métier. Me voici donc."; 
  let tableauPresentation = Array.from(presentation);

  for (let i=0; i < tableauPresentation.length; i++){
    let divARemplacer = document.getElementById("newDiv"+i); 
    divARemplacer.innerHTML = tableauPresentation[i]; 
  }

  parcours.style.backgroundColor = "black";
  parcours.style.transition="background-color 2s"
}

function shuffleParcours(){
  let presentation = "Bonjour, je m'appelle Anthony, voici mon parcours : J'ai commencé ma vie professionnelle en tant que réceptionniste d'hôtel, pendant 10 ans. Après avoir découvert le monde du développement web, j'ai décidé de changer complètement de voie et d'en faire mon métier. Me voici donc."; 
  let tableauPresentationMelange = Array.from(presentation);
  tableauPresentationMelange.sort(()=> Math.random() - 0.5);

  for (let i=0; i < tableauPresentationMelange.length; i++){
    let divARemplacer = document.getElementById("newDiv"+i); 
    divARemplacer.innerHTML = tableauPresentationMelange[i]; 
  }

  parcours.style.backgroundColor = "";
}