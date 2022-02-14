export default function sliders() {
  let weight = document.querySelector('#weight');
  let weightValue = document.querySelector('#weightValue');

  let height = document.querySelector('#height');
  let heightValue = document.querySelector('#heightValue');

  weightValue.innerHTML = weight.value;
  heightValue.innerHTML = height.value;

  weight.oninput = function () {
    weightValue.innerHTML = this.value;
  }
  height.oninput = function () {
    heightValue.innerHTML = this.value;
  }
}