class Pedido {
    fecha
    numeroPedido

    constructor(fecha, numeroPedido, cliente) {
        this.fecha = fecha
        this.numeroPedido = numeroPedido
        this.cliente = cliente
        this.platos = []
    }

    registrarPlato(plato) {
        this.platos.push(plato)
    }

    verPedido() {
        console.log(
            "Fecha: " + this.fecha +
            " Número de pedido: " + this.numeroPedido +
            " Cliente: " + this.cliente.nombre
        )

        for (let i = 0; i < this.platos.length; i++) {
            console.log(
                "Plato solicitado: " +
                this.platos[i].nombre
            )
        }
    }
}

export default Pedido