// Creation constante theme Toggle Dark

const reverse = document.getElementById('reverse');

reverse.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// Random Color

var colors = ['blue', 'purple', 'green', 'yellow', 'red', 'orange'];

let random = document.getElementById('random');

random.addEventListener('click', () => {
var randomColor = colors[Math.floor(Math.random() * colors.length)]

let body = document.body;

body.style.background = randomColor;
})

// Fade RGB

var counter = 0;
var colors = ['blue', 'purple', 'green', 'yellow', 'red', 'orange'];

function setup() {
    setInterval(changeColor, 1500);
}

function changeColor() {
    var rgb = document.getElementById('rgb');
   rgb.style.background = colors[counter];

    if (counter == 6) {
        counter = 0;
    } else {
        counter++;
    }
}

// Generateur Aleatoire
const generateColor = () => {

// Operateur décalage Binaire "<<0" au lieu de Math.floor transforme nombre flottant en nombre entier 
const random = (Math.random() * 0xFFFFFF <<0).toString(16); // Convertir en string chaine de caractere de base 16 (code Hexadécimal)

document.querySelector('.gen').style.background = "#" + random;

// Affiche le code Hexadecimal dans la div 
document.querySelector('.code').innerText = "#" + random;
}


