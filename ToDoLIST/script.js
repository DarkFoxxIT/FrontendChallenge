
/*Modo per creare una data e visualizzarla all'interno di un elemento HTML*/



window.onload = function(){
  let mesi = ['Gennaio',
            'Febbraio',
            'Marzo',
            'Aprile',
            'Maggio',
            'Giugno',
            'Luglio',
            'Agosto',
            'Settembre',
            'Ottobre',
            'Novembre',
            'Dicembre'],
giorno,mese,anno,attuale_data,  output_data;

attuale_data = new Date();
giorno = attuale_data.getDate();
mese = attuale_data.getMonth();
anno = attuale_data.getFullYear();

 output_data = giorno +' '+ mesi[mese] + ' ' + anno;

document.getElementById('data').innerHTML =   output_data;
};
/*Bottone per creare la nota -> capire come poi memorizzarlo */

function CreaNota(){
let nodo = document.createElement("LI");
let nodoTesto = document.createTextNode(document.getElementById("nota").value);
nodo.appendChild(nodoTesto);
document.getElementById("lista-note").appendChild(nodo);
};

/*function SalvaNota(e){
  e.preventDefault();
  let notaDaSalvare = document.getElementById("nota").value;
  localStorage.setItem("serverNota", input);
  document.getElementById('nota').value = localStorage.getItem('serverNota');
}*/
