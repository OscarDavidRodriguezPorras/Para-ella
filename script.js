function mostrarSeccion(id){

const secciones = document.querySelectorAll(".seccion");

secciones.forEach(sec => {
sec.style.display = "none";
});

document.getElementById(id).style.display = "block";

}



// FRASES MOTIVACIONALES

const frases = [

"Nunca dudes de lo capaz que eres.",
"Cada esfuerzo que haces hoy construye tu futuro.",
"Los sueños grandes requieren valentía.",
"Todo lo que estás haciendo vale la pena.",
"Tu esfuerzo hoy será tu orgullo mañana.",
"Las cosas grandes toman tiempo, sigue adelante."

];

function nuevaFrase(){

let random = Math.floor(Math.random()*frases.length);

document.getElementById("fraseTexto").innerText = frases[random];

}



// POEMAS

const poemas = [

"Entre páginas y sueños caminas,\ncon esfuerzo y esperanza.\nCada paso que das\nte acerca a lo que serás.",

"Los días difíciles también cuentan,\nporque en ellos crece tu fuerza.",

"Todo lo que sueñas empieza con un paso,\ny tú ya has dado muchos."

];

function nuevoPoema(){

let random = Math.floor(Math.random()*poemas.length);

document.getElementById("poemaTexto").innerText = poemas[random];

}