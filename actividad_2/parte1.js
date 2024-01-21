/*let tercer_dato = [], primer_dato = [], segundo_dato = [], cuarto_dato = [];
let lista_pokemons = [];

//arreglos
let municipios  = [];
let lista_municipios = [];

/*
// POKEMONS
const fetchPokemon = fetch("data/pokemon.json")
    .then((response) => response.json())
    .then((data) => {
        dades = data.pokemon;

        for (let f = 0; f < dades.length; f++) {
            primer_dato.push(dades[f].id);
            segundo_dato.push(dades[f].img);
            tercer_dato.push(dades[f].name);
            cuarto_dato.push(dades[f].weight)

            lista_pokemons[f] = [dades[f].id, dades[f].img, dades[f].name, dades[f].weight];

        }
    });


*/
let list1 = [];
const urls = [
    "data/pokemon.json",
    "data/municipis.json",
    "data/earthMeteorites.json",
    "data/movies.json"
];

const promesas = urls.map(url =>
    fetch(url)
        .then(response => response.json())
);

Promise.all(promesas)
    .then(data => {
        const pokemonData = data[0];
        let nombres_poke = [];


        for (let g = 0; g < data[0].pokemon.length; g++) {
            nombres_poke.push(pokemonData.pokemon[g].name);
        }

        //     console.log(nombres_poke);


        const municipisData = data[1];
        let primer_dato = [], segundo_dato = [], tercer_dato = [], cuarto_dato = [];

        // municipi_nom, ine ,municipi_escut, altitud

        for (let f = 0; f < data[1].elements.length; f++) {
            list1[f] = [municipisData.elements[f].ine, municipisData.elements[f].municipi_escut, municipisData.elements[f].municipi_nom, municipisData.elements[f].altitud];
        }

        console.table(list1);

        const meteoritoData = data[2];
        let nombres_mete = [];


        for (let s = 0; s < data[2].length; s++) {
            nombres_mete.push(data[2][s].name)
        }
        // console.table(nombres_mete);


        const movieData = data[3];
        let nombres_movies = [];

        for (let o = 0; o < data[3].movies.length; o++) {
            nombres_movies.push(data[3].movies[o].title)
        }
        //console.table(nombres_movies);

     /*   for (let t = 0; t < nombres_mete.length; t++) {
            lista[t] = [nombres_poke[t], nombres_muni[t], nombres_movies[t], nombres_mete [t]];
        }
*/

        //console.table(lista);

        printList();
    })
    .catch(error => console.error("Error al cargar los datos:", error));


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
    let peso_mediana = 0;

    for (let a = 0; a < lista_pokemons.length; a++) {
        let prueba = lista_pokemons[a][3].split(" ");
        peso_mediana = peso_mediana + parseFloat(prueba[0]);
    }


    let varable = document.getElementById("mediana_peso");
    varable.innerHTML = "La mediana de los pesos del pokemon es: " + (peso_mediana / lista_pokemons.length).toFixed(2) + " kg";
    // printList1(lista_pokemons);

}

//funcion que vuelve a imprimir
function printList1(lista_pokemons) {
    let lista = document.getElementById("resultados");

    let columna = '<style>\n' +
        'table, th, td {\n' +
        '  border:1px solid black;\n' +
        '};\n' +
        '</style>';
    columna = columna + `<table>`;

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


//imprime en pantalla una pantalla que se muestra la tabla
function printList() {
    let lista = document.getElementById("resultados");

    let columna = '<style>\n' +
        'table, th, td {\n' +
        '  border:1px solid black;\n' +
        '};\n' +
        '</style>';
    columna = columna + `<table>`;
    columna += `<tr>
        <th> # </th>
        <th> Imagen </th>
        <th> Nombre </th>
        <th> Peso </th>
    </tr>`;

    for (let i = 0; i < list1.length; i++) {
        columna += `<tr>
            <td> '${list1[i][0]}' </td>
            <td> <img src='${list1[i][1]}' > </td>
            <td> '${list1[i][2]}' </td>
            <td> '${list1[i][3]}' </td>
        </tr>`;
    }

    columna += `</table>`;

    lista.innerHTML = columna;
}



/*
Promise.all([])
    .then(() => {

    });

*/
