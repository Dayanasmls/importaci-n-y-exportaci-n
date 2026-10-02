import Libros from "./Libros.js"
import Prestamo from "./Prestamos.js"
import Usuarios from "./Usuarios.js"

// Instancias de libros
let quijote = new Libros(
    "El Quijote",
    "Miguel de Cervantes",
    "Novela",
    1605
)

let maria = new Libros(
    "La María",
    "Jorge Isaacs",
    "Romance",
    1867
)

quijote.verLibro()
maria.verLibro()

// Instancia de usuario
let alexa = new Usuarios(
    "Alexandra",
    "111",
    "123"
)

alexa.verInfo()

// Instancia de préstamo
let prestarQuijoteMaria = new Prestamo(
    alexa,
    "2/10/2026",
    "5/10/2026"
)

// Registrar libros
prestarQuijoteMaria.registrarLibros(quijote)
prestarQuijoteMaria.registrarLibros(maria)

// Mostrar préstamos
prestarQuijoteMaria.verLibros()