//declararativas

function miFuncion() {
  return 3;
}

// expresion
var miFuncion = function (a, b) {
  return a + b;
};

miFuncion();

// ejemplo

function saludarEstudiantes(estudiantes) {
  console.log(estudiantes);
}
saludarEstudiantes("johan");


var miMano = "piedra"; //def variable aqui inicia el juego, voy con piedra  a ver si gano
var opcionesMaquina = ["piedra","papel","tijera"]; //crear array para guardar posibles resultados de la maquina
var aleatorio = Math.floor(Math.random()*(opcionesMaquina.length)); //aleatoriamente genera un numero del 0 al 2, como el tamaño del array
manoRobot = opcionesMaquina[aleatorio]; // selecciona en una var el numero anterior aletorio del array, osea una opcion de las 3
function resultado (miMano, manoRobot ) {// la funcion
    jugando = miMano === manoRobot && miMano === "piedra" ? "empate"  
: manoRobot === "tijera" && miMano === "piedra" ? "gane"
: manoRobot === "papel" && miMano === "piedra" ? "perdi"
: miMano === manoRobot && miMano === "papel" ? "empate" 
: manoRobot === "piedra" && miMano === "papel" ? "gane"
: manoRobot === "tijera" && miMano === "papel" ? "perdi"
: miMano === manoRobot && miMano === "tijera" ? "empate" 
: manoRobot === "papel" && miMano === "tijera" ? "gane"
: manoRobot === "piedra" && miMano === "tijera" ? "perdi"
:"no juego"
console.log( "la maquina jugo con: " + manoRobot); // muestra mano de la maquina
console.log( jugando); // muestra resultado de la partida
}

resultado(miMano, manoRobot); // llama a la funcion para iniciar el juego
