import Paciente from "./Paciente.js"
import Medico from "./Medico.js"
import Cita from "./Cita.js"

// Crear paciente
let paciente = new Paciente(
    "Camila",
    "123456",
    20,
    "3101234567"
)

paciente.verInfo()

// Crear médico
let medico = new Medico(
    "Carlos Perez",
    "789456",
    "Medicina General",
    "3009876543"
)

medico.verInfo()

// Crear citas
let cita1 = new Cita(
    "02/10/2026",
    "09:00",
    "Dolor de cabeza",
    paciente,
    medico
)

let cita2 = new Cita(
    "10/10/2026",
    "10:00",
    "Control médico",
    paciente,
    medico
)

// Registrar citas al paciente
paciente.registrarCita(cita1)
paciente.registrarCita(cita2)

// Mostrar citas
cita1.verCita()
cita2.verCita()

// Mostrar todas las citas del paciente
paciente.verCitas()