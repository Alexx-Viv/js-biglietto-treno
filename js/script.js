var tripLenght = Math.ceil(
  prompt(
    "Digiti la lunghezza del suo viaggio in kilometri (in caso di neccessità la cifra da lei indicata verà arrotondata per eccesso)"
  )
);
var userAge = prompt(
  "Indichi cortesemente la sua età, la informeremo se sono presenti sconti di cui può usufruire"
);
var tripPrice;
var sale = "";

if (tripLenght > 0 && userAge > 0) {
  tripPrice = tripLenght * 0.21;
  console.log(tripPrice);
  if (userAge < 18) {
    tripPrice = (tripPrice * 4) / 5;
    console.log(tripPrice);
    sale = "grazie ad uno sconto del 20% sul prezzo originale";
  } else if (userAge > 65) {
    tripPrice = (tripPrice * 2) / 5;
    console.log(tripPrice);
    sale = "grazie ad uno sconto del 60% sul prezzo originale";
  }

  document.getElementById("km").innerText = tripLenght;
  document.getElementById("price").innerText = Math.round(tripPrice * 100) / 100;
  document.getElementById("sale").innerText = sale;
} else {
  alert(
    "Spiacenti, si è verificato un errore con i dati da lei forniti, ricarichi la pagina e riprovi."
  );
}
