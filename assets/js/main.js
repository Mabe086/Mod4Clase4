const producto = {
    nombre: 'Harina de Trigo',
    precio: 1800,
    peso: 1000,
    marca: 'Alimentos 1',
    tipo: 'Harinas'
}

var tipo = "Pagina Web"

// Opción 1 para obtener valores de OBJETOS
// let precio = producto['precio']
// let nombre = producto['nombre']
// let peso = producto.peso
// let precio2 = producto.precio

// Opción 2 para obtener valores de OBJETOS
let { nombre, precio, peso, tipo: tipo_alimento } = producto



console.log("Nombre", nombre);
console.log("Precio", precio);
console.log("Peso", peso);
console.log("Tipo", tipo_alimento);

