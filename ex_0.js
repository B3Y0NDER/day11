function direBonjour() {
return new Promise((resoudre) => {
setTimeout(() => {
      resoudre("Hello World !");
    }, 1000);
  });
}
direBonjour().then((message) => {
console.log(message);
});
