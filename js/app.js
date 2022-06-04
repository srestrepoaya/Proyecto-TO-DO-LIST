"use strict";
class nuevaActividad {
    constructor() {
        this.titulo = "";
        this.estado = "";
        this.prioridad = "";
    }
}
let actividades = [];
function crearActividad() {
    document.getElementById("textBoxes").style.display = "contents";
}
function confirmarActividad() {
    let titulo = document.getElementById("tituloActividad").value;
    let estado = document.getElementById("estadoActividad").value;
    let prioridad = document.getElementById("prioActividad").value;
    let crearActividad = new nuevaActividad();
    crearActividad.titulo = titulo;
    crearActividad.estado = estado;
    crearActividad.prioridad = prioridad;
    if (titulo === "" || prioridad === "") {
        alert("Ingrese los datos correctamente");
    }
    else {
        actividades.push(crearActividad);
        document.getElementById("textBoxes").style.display = "none";
        let listaActividades = document.getElementById("listaActividades");
        let actividad = document.createElement("div");
        actividad.className = "actividades";
        let br = document.createElement("br");
        actividad.innerHTML = `<h1>${crearActividad.titulo}</h1> <h3>${crearActividad.estado}</h3> <h3>${crearActividad.prioridad}</h3> `;
        listaActividades.appendChild(actividad);
        listaActividades.appendChild(br);
    }
}
