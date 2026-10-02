class Alquiler {
    fechaInicio
    fechaFinalizacion

    constructor(fechaInicio, fechaFinalizacion, cliente, vehiculo) {
        this.fechaInicio = fechaInicio
        this.fechaFinalizacion = fechaFinalizacion
        this.cliente = cliente
        this.vehiculo = vehiculo
    }

    verAlquiler() {
        console.log(
            "Fecha inicio: " + this.fechaInicio +
            " Fecha finalización: " + this.fechaFinalizacion +
            " Cliente: " + this.cliente.nombre +
            " Vehículo: " + this.vehiculo.marca +
            " " + this.vehiculo.modelo +
            " Placa: " + this.vehiculo.placa
        )
    }
}

export default Alquiler