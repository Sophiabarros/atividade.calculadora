function somar(event) {
    event.preventDefault();
  
    const numero1 = document.querySelector("#num1").valueAsNumber;
    const numero2 = document.querySelector("#num2").valueAsNumber;
  
    const soma = numero1 + numero2;
  
    const paragrafoResultado = document.querySelector("#resultado");
    paragrafoResultado.innerHTML = `Soma: ${soma}`;
  }
  
  document.querySelector("#btnSomar").addEventListener("click", somar);
  