import Cliente from "./Cliente.js"
import Entrenador from "./Entrenador.js"
import Rutina from "./Rutina.js"

// Crear entrenador
let entrenador = new Entrenador(
    "Carlos",
    "Musculación",
    "3001234567"
)

entrenador.verInfo()

// Crear rutinas
let rutina1 = new Rutina(
    "Fuerza",
    "Aumentar fuerza",
    "60 minutos",
    entrenador
)

let rutina2 = new Rutina(
    "Cardio",
    "Mejorar resistencia",
    "45 minutos",
    entrenador
)

rutina1.verRutina()
rutina2.verRutina()

// Crear cliente
let cliente = new Cliente(
    "Maria",
    "123456",
    "3109876543",
    20
)

cliente.verInfo()

// Asignar rutinas
cliente.registrarRutina(rutina1)
cliente.registrarRutina(rutina2)

// Mostrar rutinas
cliente.verRutinas()