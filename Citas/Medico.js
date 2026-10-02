class Medico {
    nombre
    documento
    especialidad
    telefono

    constructor(nombre, documento, especialidad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.especialidad = especialidad
        this.telefono = telefono
    }

    verInfo() {
        console.log(
            "Médico: " + this.nombre +
            " Documento: " + this.documento +
            " Especialidad: " + this.especialidad +
            " Teléfono: " + this.telefono
        )
    }
}

export default Medico