$(document).ready(function () {
  let audioRojo = document.getElementById("a_rojo");
  let audioAzul = document.getElementById("a_azul");
  let audioAmarillo = document.getElementById("a_amarillo");
  let audioVerde = document.getElementById("a_verde");
  let audioAnaranjado = document.getElementById("a_anaranjado");
  let audioMorado = document.getElementById("a_morado");
  let audioBlanco = document.getElementById("a_blanco");
  let audioNegro = document.getElementById("a_negro");

  $("#rojo").on("click", function () {
    audioRojo.play();
  });
  $("#azul").on("click", function () {
    audioAzul.play();
  });
  $("#amarillo").on("click", function () {
    audioAmarillo.play();
  });
  $("#verde").on("click", function () {
    audioVerde.play();
  });
  $("#anaranjado").on("click", function () {
    audioAnaranjado.play();
  });
  $("#morado").on("click", function () {
    audioMorado.play();
  });
  $("#blanco").on("click", function () {
    audioBlanco.play();
  });
  $("#negro").on("click", function () {
    audioNegro.play();
  });
});
