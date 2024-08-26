// Preparazione: richiamo elementi del DOM
const btn = document.getElementById('btn');
const grid = document.getElementById('grid');
const scoreCount = document.getElementById('score');

// Impostazioni griglia
const rows = 10;
const cols = 10;
const totalCells = rows * cols;
let score = 0;

// Creo una funzione per generare una griglia
function createGrid() {
    grid.innerHTML = '';

    // Genero le celle con un ciclo
    for (let i = 1; i <= totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = i;

        // Aggiungo l'evento alla cella
        cell.addEventListener('click', () => {
            if (!cell.classList.contains('clicked')) { 
                console.log(`Hai scelto la numero: ${i}`);

                if(cell.classList.contains('clicked')) return;
                cell.classList.add('clicked');
                
                // Aumento lo score
                score++;
                scoreCount.innerText = `Score: ${score}`;
            }
        });

        // Inserisco la cella nella griglia
        grid.appendChild(cell);
    }
}

// Aggiungo l'evento al bottone
btn.addEventListener('click', createGrid);
