class Cliente {
    nombre
    documento
    telefono

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.pedidos = []
    }

    registrarPedido(pedido) {
        this.pedidos.push(pedido)
    }

    verInfo() {
        console.log(
            "Cliente: " + this.nombre +
            " Documento: " + this.documento +
            " Teléfono: " + this.telefono
        )
    }

    verPedidos() {
        for (let i = 0; i < this.pedidos.length; i++) {
            console.log(
                "Pedido número: " +
                this.pedidos[i].numeroPedido
            )
        }
    }
}

export default Cliente