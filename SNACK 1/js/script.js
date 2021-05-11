// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
// Stampare a schermo la bici con peso minore.

var bike = [
    {
        name: "bici1",
        weight: 5.4,
    },
    {
        name: "bici2",
        weight: 10,
    },
    {
        name: "bici3",
        weight: 9,
    },
    {
        name: "bici4",
        weight: 2.0,
    },
    {
        name: "bici5",
        weight: 2.5,
    },

]


var bikeLight = bike[0];

for (var i=1; i<bike.length; i++){
    if(!(bikeLight.weight < bike[i].weight)){
        bikeLight = bike[i];
    }  
}
console.log(bikeLight);

