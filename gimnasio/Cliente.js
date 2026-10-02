class Cliente {
    nombre
    documento
    telefono
    edad

    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.edad = edad
        this.rutinas = []
    }

    registrarRutina(rutina) {
        this.rutinas.push(rutina)
    }

    verInfo() {
        console.log(
            "Cliente: " + this.nombre +
            " Documento: " + this.documento +
            " Teléfono: " + this.telefono +
            " Edad: " + this.edad
        )
    }

    verRutinas() {
        for (let i = 0; i < this.rutinas.length; i++) {
            console.log(
                "Rutina: " + this.rutinas[i].nombre +
                " Objetivo: " + this.rutinas[i].objetivo +
                " Duración: " + this.rutinas[i].duracion
            )
        }
    }
}

export default Cliente