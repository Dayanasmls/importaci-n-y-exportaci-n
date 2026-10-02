class Cliente {
    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.alquileres = []
    }

    registrarAlquiler(alquiler) {
        this.alquileres.push(alquiler)
    }

    verInfo() {
        console.log(
            "Cliente: " + this.nombre +
            " Documento: " + this.documento +
            " Teléfono: " + this.telefono
        )
    }

    verAlquileres() {
        for (let i = 0; i < this.alquileres.length; i++) {
            console.log(
                "Alquiler del vehículo: " +
                this.alquileres[i].vehiculo.marca
            )
        }
    }
}

export default Cliente