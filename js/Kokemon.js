let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque");
  sectionSeleccionarAtaque.style.display = "none";
  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonKokemonJugador = document.getElementById("botonkokemon");
  botonKokemonJugador.addEventListener("click", seleccionarKokemonJugador);

  let botonFuego = document.getElementById("buttonFuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("buttonAgua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("buttonTierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("botonReiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarKokemonJugador() {
  let sectionSeleccionarKokemon = document.getElementById("seleccionarKokemon");
  sectionSeleccionarKokemon.style.display = "none";
  let sectionSeleccionarAtaque = document.getElementById("seleccionarAtaque");
  sectionSeleccionarAtaque.style.display = "flex";

  let inputhipodoge = document.getElementById("Hipodoge");
  let inputcapipepo = document.getElementById("Capipepo");
  let inputratigueya = document.getElementById("Ratigueya");
  let spanKokemonJugador = document.getElementById("kokemonJugador");

  if (inputhipodoge.checked) {
    spanKokemonJugador.innerHTML = "Hipodoge";
  } else if (inputcapipepo.checked) {
    spanKokemonJugador.innerHTML = "Capipepo";
  } else if (inputratigueya.checked) {
    spanKokemonJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
    reiniciarJuego();
  }

  seleccionarKokemonEnemigo();
}

function seleccionarKokemonEnemigo() {
  let kokemonAleatorio = aleatorio(1, 3);
  let spanKokemonEnemigo = document.getElementById("kokemonEnemigo");

  if (kokemonAleatorio == 1) {
    spanKokemonEnemigo.innerHTML = "Hipodoge";
  } else if (kokemonAleatorio == 2) {
    spanKokemonEnemigo.innerHTML = "Capipepo";
  } else {
    spanKokemonEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("VidasJugador");
  let spanVidasEnemigo = document.getElementById("VidasEnemigo");

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("Empate 🤝🏼");
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
    crearMensaje("Ganaste 🎊");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
    crearMensaje("Ganaste 🎊");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
    crearMensaje("Ganaste 🎊");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("Perdiste😖");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("HAS VENCIDO AL ENEMIGO");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("EL ENEMIGO HA GANADO");
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("resultado");
  let ataquesDelJugadorV = document.getElementById("ataquesDelJugador");
  let ataquesDelEnemigoV = document.getElementById("ataquesDelEnemigo");

  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugadorV.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigoV.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultado");

  sectionMensajes.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById("buttonFuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("buttonAgua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("buttonTierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
