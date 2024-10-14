function initializeMachine(machineName, timeRequired) {
return new Promise((resoudre) => {
setTimeout(() => {
      resoudre(machineName + " initialized");
    }, timeRequired * 1000); 
  });
}
initializeMachine("Computer", 3)
  .then(valeur => {
    console.log(valeur);
  });
console.log("Initialisation en cours...");
