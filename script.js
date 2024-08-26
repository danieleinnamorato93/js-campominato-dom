// Preparazione: richiamo elementi del DOM
const btn = document.getElementById('btn');
const grid = document.getElementById('grid');
const scoreCount = document.getElementById('score');


// Impostazioni griglia
const rows = 10;
const cols = 10;
const totalCells = rows * cols;
let score = 0;
const totalBombs = 16;

// Creo una funzione per generare una griglia
function createGrid() {
    grid.innerHTML = '';

    // Genero le celle con un ciclo
    // Genero le celle con un ciclo
    for (let i = 1; i <= totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;

        // Aggiungo l'evento alla cella
        cell.addEventListener('click', () => handleCellClick(i, cell));

        // Inserisco la cella nella griglia
        grid.appendChild(cell);
    }
}

function handleCellClick(i, cell) {
    if (cell.classList.contains('clicked')) return;
    console.log(`Hai scelto la numero: ${i}`);

    if (bombs.includes(i)) {
      
        cell.classList.add('clicked', 'bomb');
        cell.style.backgroundColor = 'red';
        alert(`Boom! Hai calpestato una bomba. Punteggio: ${score}`);
    } else {
       
        cell.classList.add('clicked');
        cell.style.backgroundColor = 'lightskyblue';
        score++;
        scoreCount.innerText = `Score: ${score}`;

    const maxScore= totalCells - totalBombs;
}
}
//funzione per generare le bombe
const generateBombs = (totalCells , totalBombs) => {
    const bombs = [];
    while(bombs.length < totalBombs) {
        const randomNumber = Math.floor(Math.random() * totalCells) + 1 ;
        if (!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }
    return bombs ;
}

//Genero le bombe
const bombs = generateBombs (totalCells , totalBombs);
console.log(bombs);

// Aggiungo l'evento al bottone
btn.addEventListener('click', createGrid);
