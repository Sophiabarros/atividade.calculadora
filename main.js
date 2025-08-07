function somar(event) {
    event.preventDefault();
  
    const numero1 = document.querySelector("#num1").valueAsNumber;
    const numero2 = document.querySelector("#num2").valueAsNumber;
  
    const soma = numero1 + numero2;
  
    const paragrafoResultado = document.querySelector("#resultado");
    paragrafoResultado.innerHTML = `Soma: ${soma}`;
  }
  
  document.querySelector("#btnSomar").addEventListener("click", somar);
  
  // 
  
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btnSomar');
    const resultadoEl = document.getElementById('resultado');
    let timerId = null;
  
    btn.addEventListener('click', function (e) {
      e.preventDefault();
  
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
  
      if (!isNaN(num1) && !isNaN(num2)) {
        resultadoEl.textContent = `Resultado: ${num1 + num2}`;
      } else {
        resultadoEl.textContent = "Digite dois números válidos.";
      }
  
      resultadoEl.classList.remove('esconder', 'mostrar');
      void resultadoEl.offsetWidth;
      resultadoEl.classList.add('mostrar');
  
      if (timerId) clearTimeout(timerId);
  
      timerId = setTimeout(() => {
        resultadoEl.classList.remove('mostrar');
        resultadoEl.classList.add('esconder');
      }, 1000);
    });
  });
  