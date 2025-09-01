function calcularDescontoDaCompra(valorDeCompra, desconto) {
    const resultado = valorDeCompra - (valorDeCompra * desconto / 100);
    return resultado;
}

module.exports = {
    calcularDescontoDaCompra
}