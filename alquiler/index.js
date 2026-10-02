import Vehiculo from "./Vehiculo.js"
import Cliente from "./Cliente.js"
import Alquiler from "./Alquiler.js"

// Crear vehículos
let carro = new Vehiculo(
    "ABC123",
    "Toyota",
    "2024",
    "Automóvil"
)

let moto = new Vehiculo(
    "XYZ456",
    "Honda",
    "2023",
    "Motocicleta"
)

carro.verVehiculo()
moto.verVehiculo()

// Crear cliente
let cliente = new Cliente(
    "Andres",
    "987654",
    "3155555555"
)

cliente.verInfo()

// Crear alquiler
let alquiler1 = new Alquiler(
    "02/10/2026",
    "05/10/2026",
    cliente,
    carro
)

// Registrar alquiler
cliente.registrarAlquiler(alquiler1)

// Mostrar alquiler
alquiler1.verAlquiler()

// Mostrar alquileres del cliente
cliente.verAlquileres()