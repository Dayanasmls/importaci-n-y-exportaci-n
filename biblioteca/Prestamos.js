class Prestamo {
    fechaPrestamo
    fechaDevolucion

    constructor(usuario, fechaPrestamo, fechaDevolucion) {
        this.usuario = usuario
        this.fechaPrestamo = fechaPrestamo
        this.fechaDevolucion = fechaDevolucion
        this.libro = []
    }

    registrarLibros(libro) {
        this.libro.push(libro)
    }

    verLibros() {
        for (let i = 0; i < this.libro.length; i++) {
            console.log(
                "Libro: " + this.libro[i].nombre +
                " Fecha préstamo: " + this.fechaPrestamo +
                " Fecha devolución: " + this.fechaDevolucion +
                " Usuario: " + this.usuario.nombre
            )
        }
    }
}

export default Prestamo