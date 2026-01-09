const planets = [
  { name: "Mercury", gravity: 0.38 },
  { name: "Venus", gravity: 0.91 },
  { name: "Earth", gravity: 1.00 },
  { name: "Mars", gravity: 0.38 },
  { name: "Jupiter", gravity: 2.34 },
  { name: "Saturn", gravity: 1.06 },
  { name: "Uranus", gravity: 0.92 },
  { name: "Neptune", gravity: 1.19 },
  { name: "Pluto", gravity: 0.06 }
];

const grid = document.getElementById('planetGrid');
const resultBox = document.getElementById('result');

planets.forEach(p => {
  const card = document.createElement('div');
  card.className = 'planet-card';
  card.innerHTML = `<h3>${p.name}</h3><p>Gravity: ${p.gravity}×</p>`;
  card.onclick = () => showWeight(p);
  grid.appendChild(card);
});

function showWeight(planet) {
  const earthWeight = parseFloat(document.getElementById('earthWeight').value);
  if (isNaN(earthWeight)) {
    resultBox.innerHTML = "⚠️ Please enter your Earth weight.";
    return;
  }
  const weight = (earthWeight * planet.gravity).toFixed(2);
  resultBox.innerHTML = `On <strong>${planet.name}</strong>, you would weigh <strong>${weight} kg</strong>.`;
}