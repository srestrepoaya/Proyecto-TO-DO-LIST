// Decalracion de variables
let actividades = [];

function crearActividad() {
    document.getElementById("textBoxes").style.display = "contents";
}

function confirmarActividad() {

    let titulo = document.getElementById("tituloActividad").value;
    let estado = document.getElementById("estadoActividad").value;
    let prioridad = document.getElementById("prioActividad").value;

    let actividadBase = {
        titulo: "",
        estado: 0,
        prioridad: 0
    }

    if (estado > 3 || estado < 0 || prioridad > 3 || prioridad < 0 || titulo == "" || estado == "" || prioridad == "") {
        alert("Digite lo solicitado correctamente")
    } else {
        let nuevaActividad = { ...actividadBase };

        nuevaActividad.titulo = titulo;
        nuevaActividad.estado = estado;
        nuevaActividad.prioridad = prioridad;

        actividades.push(nuevaActividad);

        console.log(actividades);

        document.getElementById("textBoxes").style.display = "none";

        //Creando cada actividad

        let listaActividades = document.getElementById("listaActividades");
        let actividad = document.createElement("div");
        actividad.className = "actividades";

        let br = document.createElement("br");

        actividad.innerHTML = `<h2>${nuevaActividad.titulo}</h2> <h3 align="right">${nuevaActividad.prioridad}</h3> <h3>${nuevaActividad.estado}</h3>`;

        listaActividades.appendChild(actividad);
        listaActividades.appendChild(br);
    }
}

function addElementos() {
    let listaActividades = document.getElementById("listaActividades");
    let h3 = document.createElement("h3");

    h3.innerHTML = texto;

    listaActividades.appendChild(h3);
}