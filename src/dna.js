// function yo validate DA string as canonical DNA structure


function isValidDNA(str) { 
    if (!str) return false; // comprobar si el string es valido
    for (let i = 0; i < str.length; i++) { //uno por uno
      if (!['C', 'T', 'A', 'G'].includes(str[i])) { // establecer un orden
        return false; //  si no fue valido
      }
    }
    return true; // si todo bien.
  }
  
  module.exports = isValidDNA;
  
  // funcionó :)