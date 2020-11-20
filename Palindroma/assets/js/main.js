/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//1. Chiedere all’utente di inserire una parola

var userWord = prompt("Inserisci la parola che vuoi verificare sia palindroma");

//2. Creare una funzione per capire se la parola inserita è palindroma

/**** Funzione che permette di verificare mediante confronto sistemico, se una stringa è palindroma ovvero i caratteri che la compongono seppur specchiati di posizione restano identici
 * @param string 
 * @returns  true  verificata - false non verificata
 */
function palindormaChecker(palindromaWord) {
  var starChartWord, lastCharWord, arrayStar, arrayMirrored, stringStar, stringMirror, positiveCheckMessage,negativeCheckMessage;
  arrayStar = [];
  arrayMirrored = [];
  positiveCheckMessage = "  - questa stringa è palindroma ed il suo specchiato è : ";
  negativeCheckMessage = "  - questa stringa non è palindroma ed il suo specchiato è : ";

  for (var i = 0; i < palindromaWord.length; i++) {

    //var starChartWord = userWord.charAt(i), lastCharWord = userWord.charAt((palindromaWord.length - i));    

    starChartWord = userWord.charAt(i);
    console.log(starChartWord);
    arrayStar.push(starChartWord);
    lastCharWord = userWord.charAt((palindromaWord.length - i - 1));
    arrayMirrored.push(lastCharWord);
    console.log(lastCharWord);
  }
  stringMirror = arrayMirrored.join("");
  console.log(arrayMirrored);
  console.log(stringMirror);

  stringStar = arrayStar.join("");
  console.log(arrayStar);
  console.log(stringStar);

  if ( stringStar === stringMirror ) {
    alert(stringMirror + positiveCheckMessage + stringMirror);
    console.log(stringMirror);
    return true;
  } else {
    alert(stringStar + negativeCheckMessage + stringMirror);
    return false;
  }

}

(palindormaChecker(userWord));