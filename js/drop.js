document.addEventListener("DOMContentLoaded", function() {
  const elementSected = document.getElementById("sectionChoise");
  const cableR = document.getElementById("cableR");
  const cableX = document.getElementById("cableX");

  if (elementSected) {
    elementSected.addEventListener("change", function () {
      const lista = [
        ["0,5", 14.5000, 0.1100],
        ["1", 19.5000, 0.3100],
        ["1,5", 13.3000, 0.4100],
        ["2,5", 7.9800, 0.4100],
        ["4", 4.9500, 0.5100],
        ["6", 3.3000, 0.5100],
        ["10", 1.9100, 0.5100],
        ["16", 1.2100, 0.6100],
        ["25", 0.7800, 0.6100],
        ["35", 0.5540, 0.6800],
        ["50", 0.3860, 0.6800],
        ["70", 0.2720, 0.6800],
        ["95", 0.2060, 0.6800],
        ["120", 0.1610, 0.6800],
        ["150", 0.1290, 0.8600],
        ["185", 0.1000, 0.8600],
        ["240", 0.0801, 0.8600],
        ["300", 0.0641, 0.8600]
      ];

      const selectedValue = elementSected.value;
      let varCol1, varCol2;

      for (let i = 0; i < lista.length; i++) {
        let sublista = lista[i];
        if (sublista[0] === selectedValue) {
          varCol1 = sublista[1];
          varCol2 = sublista[2];
          break;
        }
      }

      if (!isNaN(varCol1)) cableR.value = varCol1.toFixed(4);
      else cableR.value = "";

      if (!isNaN(varCol2)) cableX.value = varCol2.toFixed(4);
      else cableX.value = "";
    });
  } else {
    console.warn("Elemento #sectionChoise não encontrado!");
  }

  // Função calcCirc (simplificada aqui, adicione validações e lógicas conforme o anterior)
  window.calcCirc = function () {
    // Pegue os elementos necessários, valide, calcule...
    // Só exemplo simples:
    let dropTensionE = document.getElementById("dropTensionE");
    dropTensionE.value = "0.00"; // só um placeholder
  };
});