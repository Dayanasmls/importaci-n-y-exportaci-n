class Rutina {
    nombre
    objetivo
    duracion

    constructor(nombre, objetivo, duracion, entrenador) {
        this.nombre = nombre
        this.objetivo = objetivo
        this.duracion = duracion
        this.entrenador = entrenador
    }

    verRutina() {
        console.log(
            "Rutina: " + this.nombre +
            " Objetivo: " + this.objetivo +
            " Duración: " + this.duracion +
            " Entrenador: " + this.entrenador.nombre
        )
    }
}

export default Rutina