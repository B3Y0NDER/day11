function checkFuel(carburant) {
return new Promise((resoudre, rejeter) => {
if (carburant >= 9) {
      resoudre("Ready to launch");
    } else {
rejeter("Please refill fuel");
}
});
}
checkFuel(10)
.then((message) => {
console.log("Success :", message);
  })
  .catch((erreur) => {
    console.log("Errore :", erreur);
  });

checkFuel(8)
  .then((message) => {
    console.log("Success :", message);
  })
  .catch((erreur) => {
    console.log("Error :", erreur);
  });
