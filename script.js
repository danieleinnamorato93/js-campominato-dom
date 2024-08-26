// Preparazione: richiamo elementi del DOM
const btn = document.getElementById('btn');
const grid = document.getElementById('grid');
const scoreCount = document.getElementById('score');
const difficultySelect = document.getElementById('difficulty');

// Impostazioni griglia iniziali
let rows = 10;
let cols = 10;
let totalCells = rows * cols;
let score = 0;
const totalBombs = 16;
let maxScore = totalCells - totalBombs;
let bombs = [];

// Funzione per aggiornare le impostazioni della griglia in base alla difficoltà selezionata
function updateGridSettings() {
    const size = parseInt(difficultySelect.value);
    rows = size;
    cols = size;
    totalCells = rows * cols;
    maxScore = totalCells - totalBombs;
}

// Funzione per generare le bombe
function generateBombs(totalCells, totalBombs) {
    const bombs = [];
    while (bombs.length < totalBombs) {
        const randomNumber = Math.floor(Math.random() * totalCells) + 1;
        if (!bombs.includes(randomNumber)) bombs.push(randomNumber);
    }
    return bombs;
}

// Funzione per generare la griglia
function createGrid() {
    // Aggiorna le impostazioni della griglia in base alla difficoltà
    updateGridSettings();

    // Resetto la griglia e il punteggio
    grid.innerHTML = '';
    score = 0;
    scoreCount.innerText = `Score: ${score}`;

    // Genero le bombe per la nuova griglia
    bombs = generateBombs(totalCells, totalBombs);
    console.log(bombs);

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

// Funzione per gestire il click sulla cella
function handleCellClick(i, cell) {
    if (cell.classList.contains('clicked')) return;

    console.log(`Hai scelto la numero: ${i}`);

    if (bombs.includes(i)) {
        // Se è una bomba
        cell.classList.add('clicked', 'bomb');
        cell.style.backgroundColor = 'red';
        alert(`Boom! Hai calpestato una bomba. Punteggio: ${score}`);
        disableGrid();
        revealBombs(); // Mostra tutte le bombe quando esplode
    } else {
        // Se non è una bomba
        cell.classList.add('clicked');
        cell.style.backgroundColor = 'lightskyblue';
        score++;
        scoreCount.innerText = `Score: ${score}`;

        if (score === maxScore) {
            alert(`Complimenti! Hai vinto! Punteggio: ${score}`);
            disableGrid();
        }
    }
}

// Funzione per disabilitare ulteriori clic sulla griglia dopo la fine del gioco
function disableGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.pointerEvents = 'none');
}

// Funzione per mostrare tutte le bombe
function revealBombs() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        if (bombs.includes(index + 1)) {
            cell.style.backgroundColor = 'red';
        }
    });
}

// Aggiungo l'evento al bottone per generare la griglia
btn.addEventListener('click', createGrid);
