function assignID(machineName, newSeed) {
seed = newSeed;
return new Promise((resolve) => {
getID().then((id) => {
let message = `${machineName} : ${id}`;
      resolve(message);
    });
  });
}
assignID("Oxygen filter", 1).then(value => {
  console.log(value);
});
