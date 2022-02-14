export default function calcIMC() {
  const weight = document.getElementById('#weight');
  const height = document.getElementById('#height');
  const btnCalc = document.querySelector('#calcIMC');
  let finalResult = document.querySelector('#results');
  let imc;

  btnCalc.addEventListener('click', () => {
    imc = (weight/Math.pow((height/100),2)).toFixed(1); 
    finalResult.textContent = `IMC: ${imc}`

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
  })
}