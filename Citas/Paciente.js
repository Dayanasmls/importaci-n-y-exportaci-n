class Paciente {
    nombre
    documento
    edad
    telefono

    constructor(nombre, documento, edad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.edad = edad
        this.telefono = telefono
        this.citas = []
    }

    registrarCita(cita) {
        this.citas.push(cita)
    }

    verInfo() {
        console.log(
            "Paciente: " + this.nombre +
            " Documento: " + this.documento +
            " Edad: " + this.edad +
            " Teléfono: " + this.telefono
        )
    }

    verCitas() {
        for (let i = 0; i < this.citas.length; i++) {
            console.log(
                "Cita: " +
                this.citas[i].fecha +
                " " +
                this.citas[i].hora
            )
        }
    }
}

export default Paciente