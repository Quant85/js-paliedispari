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
  var starChartWord, lastCharWord, check = 0;

  for (var i = 0; i < palindromaWord.length; i++) {

    //var starChartWord = userWord.charAt(i), lastCharWord = userWord.charAt((palindromaWord.length - i)), check, sumCheck;    

    starChartWord = userWord.charAt(i);
    console.log(starChartWord);
    lastCharWord = userWord.charAt((palindromaWord.length - i - 1));
    console.log(lastCharWord);


    if (starChartWord === lastCharWord) {
      check +=  1;
      console.log(check);
    } 
    
  }
    if (check == palindromaWord.length ) {
      return true;
    } else {
      return false;
    }

}

if (palindormaChecker(userWord)) {
  alert("Questa parola è palindroma");
} else {
  alert("Questa parola non è palindroma");
}