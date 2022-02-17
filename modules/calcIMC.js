export default function calcIMC() {
  const weight = document.querySelector('#weight');
  let weightValue = document.querySelector('#weightValue');
  const height = document.querySelector('#height');
  let heightValue = document.querySelector('#heightValue');
  const btnCalc = document.querySelector('#calcIMC');
  let result = document.querySelector('#results');

  weight.oninput = function () {
    weightValue.innerHTML = weight.value;
  }
  height.oninput = function () {
    heightValue.innerHTML = height.value;
  }

  btnCalc.addEventListener('click', () => {
    let heightCalc = height.value;
    let weightCalc = weight.value;
    let imc = (weightCalc/(heightCalc*heightCalc)).toFixed(1);
    
    let finalResult = ''

    if(imc < 18.5){
      finalResult = `IMC: ${imc} (Abaixo do Peso).`

    }else if(imc >= 18.5 && imc <= 24.9 ){
      finalResult = `IMC: ${imc} (Peso Normal).`

    }else if(imc >= 25 && imc <= 29.9){
      finalResult = `IMC: ${imc} (Sobrepeso).`

    }else if(imc >= 30 && imc <= 34.9){
      finalResult = `IMC: ${imc} (Obesidade Grau I).`

    }else if(imc >= 35 && imc <= 39.9){
      finalResult = `IMC: ${imc} (Obesidade Grau II).`

    }else{
      finalResult = `IMC: ${imc} (Obesidade Morbida).`
    };
    result.textContent = finalResult
  })
}