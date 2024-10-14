function promiseMe(message) {
  return new Promise((resoudre) => {
let promesse = "I promise you to" + message;
resoudre(promesse);
});
}
promiseMe(" fly to the moon")
  .then((valeur) => {
console.log(valeur);
  });
