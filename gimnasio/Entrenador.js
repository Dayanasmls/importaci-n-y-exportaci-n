class Entrenador {
    nombre
    especialidad
    telefono

    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
    }

    verInfo() {
        console.log(
            "Entrenador: " + this.nombre +
            " Especialidad: " + this.especialidad +
            " Teléfono: " + this.telefono
        )
    }
}

export default Entrenador