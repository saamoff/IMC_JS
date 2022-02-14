export default function calcIMC() {
  let weight = parseInt(document.getElementById('weight').value);
  document.getElementById('weightValue').textContent = weight + ' kg';
}