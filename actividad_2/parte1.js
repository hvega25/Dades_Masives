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


    console.log("Ordenado ascendente por nombre");
    lista_pokemons.sort((a, b) => a[2].localeCompare(b[2]));
    printList1(lista_pokemons);


}


function ordenar_descendente() {
    /*
        console.log("Ordenado descendente por id");
        lista_pokemons.reverse((a, b) => a[0].localeCompare(b[0]));
        printList1(lista_pokemons);

    */

    console.log("Ordenado descendente por nombre");
    lista_pokemons.sort((a, b) => a[2].localeCompare(b[2]));
    lista_pokemons.reverse((a, b) => a[2].localeCompare(b[2]));

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
    var buscar = prompt("Ingrese lo que desea buscar");

    let lista_encontrados = [];
    let poke;

    let contador = 0;

    //importante al crear la expresión
    const ex = new RegExp(buscar, 'gi');

    for (let i = 0; i < lista_pokemons.length; i++) {
        let nombre = lista_pokemons[i][2];
        if (nombre.match(ex)) {
            lista_encontrados[contador] = lista_pokemons[i]
            contador++;
        }
    }

    printList1(lista_encontrados)
}


function calcular_mediana() {

    for(let a =0; a < lista_pokemons.length; a++){
        let prueba = lista_pokemons[a][3].split(" ");
        lista_pokemons[a][3] = prueba[0];
    }

    console.log("Ordenado descendente por peso");
    lista_pokemons.sort((a, b) => a[3].localeCompare(b[3]));


    printList1(lista_pokemons);

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


