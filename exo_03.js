function promiseMe(message) {
return new Promise((resoudre) => {
let promesse = "I promise you to" + message;
resoudre(promesse);
  });
}
function checkStatus(promesse) {
promesse
.then((message) => {
console.log(message);
})
.catch((erreur) => {
console.log("Erreur :", erreur);
})
.finally(() => {
console.log("Checking status over");
});
}
checkStatus(promiseMe(" fly to the moon"));
