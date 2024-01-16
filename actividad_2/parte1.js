let pokemons = [], pokeNombre = [], pokeId = [], pokePeso = [];
let lista_pokemons = [];

// POKEMONS
const fetchPokemon = fetch("data/pokemon.json")
    .then((response) => response.json())
    .then((data) => {
        dades = data.pokemon;

        for (let f = 0; f < dades.length; f++) {
            pokeId.push(dades[f].id);
            pokemons.push(dades[f].img);
            pokeNombre.push(dades[f].name);
            pokePeso.push(dades[f].weight)


            lista_pokemons[f] = [dades[f].id, dades[f].img, dades[f].name, dades[f].weight];

        }
    });


function reload() {
    location.reload();
}


function orderList(opcion) {
    if (opcion == "asc") {
        ordenar_ascendente();
    } else {
        if (opcion == "des") {
            ordenar_descendente();
        }
    }
}

function ordenar_ascendente() {


    /*

    console.log("Ordenado ascendente");
    for (let a = 0; a < todos.length; a++) {
        todos[a].sort();
    }

    for (let d = 0; d < todos.length; d++) {
        console.log(todos[d]);
    }

    */

}


function ordenar_descendente() {
/*
    let lista = [];
    for (let y = lista_pokemons.length; y >= 0; y--) {
        lista.push(lista_pokemons[y]);
    }
    //ordena por id
    console.table(lista);

 */

    console.log("Ordenado ascendente por nombre");
    lista_pokemons.sort((a, b) => a[2].localeCompare(b[2]));
    lista_pokemons.reverse((a, b) => a[2].localeCompare(b[2]));
    console.table(lista_pokemons);
    printList1(lista_pokemons);
    /*


    console.log("Ordenado descendente");
    for (let a = 0; a < todos.length; a++) {
        todos[a].sort();
        todos[a].reverse();
    }

    for (let d = 0; d < todos.length; d++) {
        console.log(todos[d]);
    }

     */
}


function searchList() {
    let buscar = prompt("Ingrese lo que desea buscar");

}


//funcion que vuelve a imprimir
function printList1(lista_pokemons) {
    let lista = document.getElementById("resultados");
    let columna = `<table>`;

    columna += `<tr>
        <th> # </th>
        <th> Imagen </th>
        <th> Nombre </th>
        <th> Peso </th>
    </tr>`;

    for (let i = 0; i < lista_pokemons.length; i++) {
        columna += `<tr>
            <td> '${lista_pokemons[i][0]}' </td>
            <td> <img src='${lista_pokemons[i][1]}' > </td>
            <td> '${lista_pokemons[i][2]}' </td>
            <td> '${lista_pokemons[i][3]}' </td>
        </tr>`;
    }

    columna += `</table>`;

    lista.innerHTML = columna;  // Actualizar el contenido del elemento "resultados"
}

function printList() {
    let lista = document.getElementById("resultados");
    let columna = `<table>`;

    columna += `<tr>
        <th> # </th>
        <th> Imagen </th>
        <th> Nombre </th>
        <th> Peso </th>
    </tr>`;

    for (let i = 0; i < lista_pokemons.length; i++) {
        columna += `<tr>
            <td> '${lista_pokemons[i][0]}' </td>
            <td> <img src='${lista_pokemons[i][1]}' > </td>
            <td> '${lista_pokemons[i][2]}' </td>
            <td> '${lista_pokemons[i][3]}' </td>
        </tr>`;
    }

    columna += `</table>`;

    lista.innerHTML = columna;  // Actualizar el contenido del elemento "resultados"
}


Promise.all([fetchPokemon])
    .then(() => {
        printList();
    });


