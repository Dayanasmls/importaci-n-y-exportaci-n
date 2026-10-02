class Vehiculo {
    placa
    marca
    modelo
    tipo

    constructor(placa, marca, modelo, tipo) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
        this.tipo = tipo
    }

    verVehiculo() {
        console.log(
            "Placa: " + this.placa +
            " Marca: " + this.marca +
            " Modelo: " + this.modelo +
            " Tipo: " + this.tipo
        )
    }
}

export default Vehiculo