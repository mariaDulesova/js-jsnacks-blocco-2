// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var letters = ["a","b","c", "d","e", "f", "g", "h"];
var numbers= [1,2,3,4,5,6,7,8,9,10,11,12,13]


var test1 = newArray(letters, 0, 7);
var test2 = newArray(numbers, 0, 10);

console.log(test1);
console.log(test2);


//----FUNCTION----//

//Escludendo la posizione num1 e num2

function newArray (arr1, num1, num2){
    if (num2 <=arr1.length){
        var arr2 =[];
        for (var i = num1+1; i<(num2 - num1); i++){
            arr2.push(arr1[i]);
        }
        return arr2;
    } else {
        alert("num2 supera la lunghezza di array")
    }
}
