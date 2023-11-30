/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/



// Funzione per generare numeri casuali
function generateRandomNumbers() {
    // Inizializza un array vuoto per contenere i numeri generati
    let numbers = [];
    
    // Ciclo per generare 5 numeri casuali da 1 a 10 e aggiungerli all'array
    for (let i = 0; i < 5; i++) {
      numbers.push(Math.floor(Math.random() * 10) + 1);
    }
    
    // Restituisci l'array di numeri generati casualmente
    return numbers;
  }
  
  // Funzione per avviare il gioco
  function startGame() {
    // Ottieni i riferimenti agli elementi HTML che utilizzeremo
    const numbersContainer = document.getElementById('numbers');
    const inputContainer = document.getElementById('inputContainer');
  
    // Genera numeri casuali e visualizzali nel contenitore specificato
    const randomNumbers = generateRandomNumbers();
    numbersContainer.textContent = `Numeri: ${randomNumbers.join(', ')}`;
  
    // Mostra l'area di input dopo 30 secondi
    setTimeout(() => {
      // Nasconde l'area dei numeri e mostra l'area di input
      numbersContainer.style.display = 'none';
      inputContainer.style.display = 'block';
    }, 30000);
  }
  
  // Funzione per verificare i numeri inseriti dall'utente
  function checkNumbers() {
    // Ottieni l'input dell'utente e convertilo in un array di numeri
    const userInput = document.getElementById('userInput').value;
    const inputNumbers = userInput.split(',').map(num => parseInt(num.trim(), 10));
  
    // Ottieni i numeri generati casualmente dal testo visualizzato precedentemente
    const randomNumbers = document.getElementById('numbers').textContent
      .replace('Numeri: ', '')  // Rimuove il testo iniziale
      .split(', ')  // Divide la stringa in un array di numeri sotto forma di stringhe
      .map(num => parseInt(num, 10));  // Converte ogni stringa in un numero intero
  
    // Verifica e mostra risultato
    const correctNumbers = inputNumbers.filter(num => randomNumbers.includes(num));
    alert(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`);
  }
  
  // Avvia il gioco quando la pagina è pronta
  document.addEventListener('DOMContentLoaded', startGame);
  