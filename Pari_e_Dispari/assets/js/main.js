/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//Pari e Dispari

//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var userChoice, userChoiceNumber;

userChoice = prompt("Scegli pari o dispari [Pari/Dispari]");
userChoiceNumber =Number(prompt("Scegli un numero da 1 a 5"));

console.log("L'utente ha dichiarato ", userChoice, "ed ha scelto come numero", userChoiceNumber);

//2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//3. Sommiamo i due numeri
var sum = getRandomNumber(1, 5) + userChoiceNumber;
console.log("Il PC ha scelto " + getRandomNumber(1, 5));
console.log("L'utente ha scelto " + userChoiceNumber);
console.log("La loro somma è " + sum);

//4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function checkNumberIsEven(number) {
  if (Number(number) % 2 === 0) {
    return true;
  }
}

// 5.Dichiariamo chi ha vinto.
if (checkNumberIsEven(sum)) {
  alert("Vince Pari");
  console.log("Quindi essendo " + sum + " Pari, vince Pari");
} else {
  alert("Vince Dispari");
  console.log("Quindi essendo " + sum + " Dispari, vince Dispari");
}

