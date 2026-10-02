import Plato from "./Plato.js"
import Cliente from "./Cliente.js"
import Pedido from "./Pedido.js"

// Crear platos
let hamburguesa = new Plato(
    "Hamburguesa",
    "Comida rápida",
    18000,
    true
)

let pizza = new Plato(
    "Pizza",
    "Comida rápida",
    25000,
    true
)

hamburguesa.verPlato()
pizza.verPlato()

// Crear cliente
let cliente = new Cliente(
    "Laura",
    "123456",
    "3105555555"
)

cliente.verInfo()

// Crear pedido
let pedido = new Pedido(
    "02/10/2026",
    1001,
    cliente
)

// Agregar platos al pedido
pedido.registrarPlato(hamburguesa)
pedido.registrarPlato(pizza)

// Registrar pedido al cliente
cliente.registrarPedido(pedido)

// Mostrar pedido
pedido.verPedido()

// Mostrar pedidos del cliente
cliente.verPedidos()