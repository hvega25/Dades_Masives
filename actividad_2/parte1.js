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


            lista_pokemons[f] = [dades[f].id, dades[f].img,dades[f].name,dades[f].weight];

        }
    });

console.table(lista_pokemons);

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


    console.log("Ordenado ascendente");
    for (let a = 0; a < todos.length; a++) {
        todos[a].sort();
    }

    for (let d = 0; d < todos.length; d++) {
        console.log(todos[d]);
    }
}


function ordenar_descendente() {

    console.log("Ordenado descendente");
    for (let a = 0; a < todos.length; a++) {
        todos[a].sort();
        todos[a].reverse();
    }

    for (let d = 0; d < todos.length; d++) {
        console.log(todos[d]);
    }
}


function searchList() {
    let buscar = prompt("Ingrese lo que desea buscar");

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

    for (let i = 0, f = 0, w = 0, l = 0; i < pokeId.length, f < pokemons.length, w < pokeNombre.length, l < pokePeso.length; i++, w++, f++, l++) {
        columna += `<tr>
            <td> '${pokeId[i]}' </td>
            <td> <img src='${pokemons[f]}' > </td>
            <td> '${pokeNombre[w]}' </td>
            <td> '${pokePeso[l]}' </td>
        </tr>`;
    }

    columna += `</table>`;

   lista.innerHTML = (`${columna}`);
}


Promise.all([fetchPokemon])
    .then(() => {
        printList();
    });


