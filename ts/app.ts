//Llamar a "actividad.ts" para poder usar la clase "nuevaActividad"
/// <reference path="actividad.ts" /> 

let actividades: Array<object> = []; //Array que guarda la informacion de las actividades registradas para futuro almacenamiento

//Funcion que hace aparecer los input boxes para crear una nueva actividad
function crearActividad(): void {

    document.getElementById("textBoxes")!.style.display = "contents";

}

function confirmarActividad():void {

    //variables que guardan los valores de los inputs
    
    let titulo: string = (<HTMLInputElement>document.getElementById("tituloActividad")!).value;
    let estado: string = (<HTMLInputElement>document.getElementById("estadoActividad")!).value;
    let prioridad: string = (<HTMLInputElement>document.getElementById("prioActividad")!).value;

    let crearActividad: nuevaActividad = new nuevaActividad(); //Creacion de la actividad a partir de la clase creada en "actividad.ts"

    //Relacionamiento entre los datos ingresados y los datos dentro de la clase antes creada
    crearActividad.titulo = titulo;
    crearActividad.estado = estado;
    crearActividad.prioridad = prioridad;

    //Revision de los datos ingresados
    if (titulo === "" || prioridad === "") {
        alert("Ingrese los datos correctamente");
    } else {
        //Guardado de las actividades en el array "actividades"
        actividades.push(crearActividad);

        //Dejar de mostrar los text boxes en pantalla
        document.getElementById("textBoxes")!.style.display = "none";

        //Creacion de cada actividad
        let listaActividades = document.getElementById("listaActividades");
        let actividad = document.createElement("div");
        actividad.className = "actividades";

        let br = document.createElement("br");

        actividad.innerHTML = `<h1>${crearActividad.titulo}</h1> <h3>${crearActividad.estado}</h3> <h3>${crearActividad.prioridad}</h3> `;

        listaActividades!.appendChild(actividad);
        listaActividades!.appendChild(br);
    }
}