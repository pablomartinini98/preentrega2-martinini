

let lenceria = {
    tallas: ["XS", "S", "M", "L", "XL"],
    descripcion: "Lencería de encaje",
    color: "Negro",
    seleccionadas: [],
    cantidadCompradas: {},
};

function simuladorLenceria() {
    let tallaUsuario = prompt("Por favor, ingrese su talla de lencería (XS, S, M, L, XL):");

    let tallaValida = lenceria.tallas.includes(tallaUsuario);

    if (tallaValida) {
        console.log(`Excelente elección, tenemos ${lenceria.descripcion} en talla ${tallaUsuario} de color ${lenceria.color}.`);
        
        // Agregar la talla seleccionada al array seleccionadas
        lenceria.seleccionadas.push(tallaUsuario);

        // Llevar un registro de la cantidad de prendas compradas
        if (lenceria.cantidadCompradas[tallaUsuario]) {
            lenceria.cantidadCompradas[tallaUsuario]++;
        } else {
            lenceria.cantidadCompradas[tallaUsuario] = 1;
        }
    } else {
        console.log("Lo sentimos, la talla ingresada no está disponible en este momento.");
    }

    let tallaBuscada = prompt("¿Qué talla de lencería estás buscando?");
    let tallaEncontrada = lenceria.tallas.find(talla => talla === tallaBuscada);
    if (tallaEncontrada) {
        console.log(`¡Buena noticia! Tenemos la talla ${tallaEncontrada} en stock.`);
    } else {
        console.log(`Lo sentimos, no tenemos la talla ${tallaBuscada} en stock.`);
    }

    let tallasDisponibles = lenceria.tallas.map(talla => talla.toUpperCase());
    console.log("Tallas disponibles en mayúsculas: " + tallasDisponibles.join(", "));

    // Mostrar el registro de la cantidad de prendas compradas
    console.log("Registro de la cantidad de prendas compradas:");
    for (let talla in lenceria.cantidadCompradas) {
        console.log(`Talla ${talla}: ${lenceria.cantidadCompradas[talla]}`);
    }
}

simuladorLenceria();













