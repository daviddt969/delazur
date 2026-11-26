const modale = document.querySelector(".modale-infolettre");
const ouvrir = document.querySelector(".ouvrir-infolettre");
const formulaire = document.querySelector("#formulaire-infolettre");
const courriel = document.querySelector("#courriel");
const confirmation = document.querySelector("#confirmation-infolettre");
const fermer = confirmation.querySelector("button");

// Repartir du formulaire à chaque ouverture, même après une inscription.
ouvrir.addEventListener("click", () => {
  formulaire.reset();
  formulaire.hidden = false;
  confirmation.hidden = true;
  modale.showModal();
});

// Le formulaire reste sur la page. Le champ email fournit la règle de validation.
formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault();
  if (!courriel.checkValidity()) {
    window.alert("Votre courriel n'est pas valide!");
    courriel.focus();
    return;
  }

  // Simuler une inscription en remplaçant le formulaire par le remerciement.
  formulaire.hidden = true;
  confirmation.hidden = false;
  fermer.focus();
});

// La croix et le bouton Fermer ferment la fenêtre. Échap est natif avec dialog.
modale.querySelector(".croix-infolettre").addEventListener("click", () => modale.close());
fermer.addEventListener("click", () => modale.close());
