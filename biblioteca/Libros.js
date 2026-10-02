class Libros {
    nombre
    autor
    genero
    año

    constructor(nombre, autor, genero, año) {
        this.nombre = nombre
        this.autor = autor
        this.genero = genero
        this.año = año
    }

    registrarNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }

    registrarAutor(nuevoAutor) {
        this.autor = nuevoAutor
    }

    registrarGenero(nuevoGenero) {
        this.genero = nuevoGenero
    }

    registrarAño(nuevoAño) {
        this.año = nuevoAño
    }

    verLibro() {
        console.log(
            "Libro: " + this.nombre +
            " Autor: " + this.autor +
            " Género: " + this.genero +
            " Año: " + this.año
        )
    }
}

export default Libros