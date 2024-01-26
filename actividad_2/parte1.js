let poke_objecto;
let poke1 = [];
let lista = [];
let movies = [], meteoritos = [], poke = [], muni = [], poke_tipos = [];

//variable momentanea para guardar el dato cargado
let carga = [], sel;
let carga1 = [];

//arreglo de json que serán usados para la carga de datos
const urls = [
    "data/pokemon.json",
    "data/municipis.json",
    "data/earthMeteorites.json",
    "data/movies.json"
];

//ejecución de la carga de datos
const promesas = urls.map(url =>
    fetch(url)
        .then(response => response.json())
);


//Se hace persistencia de datos y se carga 4 arreglos
Promise.all(promesas)
    .then(data => {

        //Pokemons
        const pokemonData = data[0];


        pokemonData.pokemon.forEach(pokemon => {
            poke.push([pokemon.id, pokemon.img, pokemon.name, pokemon.weight]);
            poke_tipos.push(pokemon.type);
        });


        console.log(poke_objecto);
        /* //nombres_poke.push(pokemonData.pokemon[g].name);
         for (let g = 0; g < pokemonData.pokemon.length; g++) {
             poke[g] = [pokemonData.pokemon[g].id, pokemonData.pokemon[g].img, pokemonData.pokemon[g].name, pokemonData.pokemon[g].weight]
             poke_tipos[g] = pokemonData.pokemon[g].type;
         }

         //  console.table(poke_tipos);
 */
        //Municipios
        const municipisData = data[1];

        municipisData.elements.forEach(elements => {
            muni.push([elements.ine, elements.municipi_escut, elements.municipi_nom, elements.altitud])
        });
        /*
        for (let f = 0; f < municipisData.elements.length; f++) {
            muni[f] = [municipisData.elements[f].ine, municipisData.elements[f].municipi_escut, municipisData.elements[f].municipi_nom, municipisData.elements[f].altitud];
        }
*/

        //Meteoritos
        const meteoritoData = data[2];


        meteoritoData.forEach(data => {
            meteoritos.push([data.id, data.mass, data.name, data.fall])
        })

        /*
        for (let s = 0; s < meteoritoData.length; s++) {
            meteoritos[s] = [meteoritoData[s].id, meteoritoData[s].mass, meteoritoData[s].name, meteoritoData[s].fall];
        }

*/
        //Movies
        const movieData = data[3];

        movieData.movies.forEach(movie => {
            movies.push([movie.year, movie.url, movie.title, movie.rating])
        })
        /*
        for (let o = 0; o < movieData.movies.length; o++) {
            movies[o] = [movieData.movies[o].year, movieData.movies[o].url, movieData.movies[o].title, movieData.movies[o].rating];
        }*/

        //  Esto es prueba
        //carga de arreglos en un arreglo
        for (let t = 0; t < meteoritoData.length; t++) {
            lista[t] = [poke[t], muni[t], movies[t], meteoritos [t]];
        }

        //console.table (lista[0][0]);
        //  console.table(lista);


        //PARTE FINAL CREACION DEL OBJECTO
        let lista_objectos = lista.map(elemento => ({element: elemento}));


      //  console.log(lista_objectos);

        //printList();


        /*
        //  console.log(poke[0][2])


             //crea un arreglo de arreglos
             for (let t = 0; t < meteoritoData.length; t++) {
                 for (let k = 0; k < meteoritoData[t].length; k++) {
                     lista[t][k] = [poke[t][k], muni[t][k], movies[t][k], meteoritos [t][k]];
                 }
             }

             console.table(lista);
             //let prueba = [];


                         //prueba para saber si funciona el retorno
                         for (let g = 0; g < lista.length; g++) {
                             if (!(lista[g][0] === undefined)) {
                                 prueba[g] = lista[g][0];
                             }
                         }

                         console.log(prueba);
                         // console.log(lista[1][0]); lista[aqui iterar][arreglo a buscar]
                 */


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
    carga.sort((a, b) => a[2].localeCompare(b[2]));
    printList1(carga, sel);


    carga1.sort((a, b) => a[2].localeCompare(b[2]));
    printList1(carga1, sel);

}


function ordenar_descendente() {
    /*
        console.log("Ordenado descendente por id");
        carga.reverse((a, b) => a[0].localeCompare(b[0]));
        printList1(carga, sel);

    */

    console.log("Ordenado descendente por nombre");
    carga.sort((a, b) => a[2].localeCompare(b[2]));
    carga.reverse((a, b) => a[2].localeCompare(b[2]));


    printList1(carga, sel);


    console.log("Ordenado descendente por nombre");
    carga1.sort((a, b) => a[2].localeCompare(b[2]));
    carga1.reverse((a, b) => a[2].localeCompare(b[2]));


    printList1(carga1, sel);


}


function searchList() {
    var buscar = prompt("Ingrese lo que desea buscar");

    let lista_encontrados = [];


    let contador = 0;

    //importante al crear la expresión
    const ex = new RegExp(buscar, 'gi');

    for (let i = 0; i < carga.length; i++) {
        let nombre = carga[i][2];
        if (nombre.match(ex)) {
            lista_encontrados[contador] = carga[i]
            contador++;
        }
    }


    printList1(lista_encontrados, sel)
}

function searchListModificada(buscar) {
    //var buscar = prompt("Ingrese lo que desea buscar");

    let lista = document.getElementById("resultados");
    lista.innerHTML = "";

    let lista_encontrados = [];
    let poke;

    let contador = 0;


    //importante al crear la expresión
    const ex = new RegExp(buscar, 'gi');

    for (let i = 0; i < carga.length; i++) {
        let nombre = carga[i][2];
        if (nombre.match(ex)) {
            lista_encontrados[contador] = carga[i]
            contador++;
        }
    }
    carga1 = lista_encontrados;

    printList1(lista_encontrados, sel);
}


function calcular_mediana() {
    let peso_mediana = 0;


    for (let a = 0; a < carga.length; a++) {
        //   console.log(carga[a][3]);


        if (sel === "municipis") {
            if (carga[a][3].trim() === "") {
                peso_mediana = peso_mediana + 0;
            } else {
                peso_mediana = peso_mediana + parseFloat(carga[a][3]);
            }

        }
        if (sel === "pokemon") {
            let prueba = carga[a][3].split(" ");
            peso_mediana = peso_mediana + parseFloat(prueba[0]);
        }

        if (sel === "meteorites") {
            if (carga[a][1] == undefined) {
                peso_mediana = peso_mediana + 0;
            } else {
                peso_mediana = peso_mediana + parseFloat(carga[a][1]);
            }
        }
        if (sel === "movies") {
            peso_mediana = peso_mediana + parseFloat(carga[a][3]);
        }


    }

    let varable = document.getElementById("mediana_peso");
    varable.innerHTML = "La mediana es: " + (peso_mediana / carga.length).toFixed(2);


}

//funcion que vuelve a imprimir
function printList1(array, sel) {
    let lista = document.getElementById("resultados");


    const cabeceras = [["Id", "Imagen", "Nombre", "Peso"], ["Código Postal", "Logo", "Nombre", "Altitud"],
        ["Título", "Logo", "Año", "Rating"], ["ID", "Masa", "Nombre", "Estado"]
    ];
    const opciones = ["pokemon", "municipis", "movies", "meteorites"];

    let columna = '<style>\n' +
        'table, th, td {\n' +
        '  border:1px solid black;\n' +
        '};\n' +
        '</style>';
    columna = columna + `<table>`;

    for (let u = 0; u < opciones.length; u++) {
        if (sel === opciones[u]) {
            columna += `<tr>
        <th> ${cabeceras[u][0]} </th>
        <th> ${cabeceras[u][1]} </th>
        <th> ${cabeceras[u][2]} </th>
        <th> ${cabeceras[u][3]} </th>
    </tr>`;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (sel === "meteorites") {
            columna += `<tr>
            <td> '${array[i][0]}' </td>
            <td> '${array[i][1]}' </td>
            <td> '${array[i][2]}' </td>
            <td> '${array[i][3]}' </td>
        </tr>`;
        } else {
            columna += `<tr>
            <td> '${array[i][0]}' </td>
            <td> <img src='${array[i][1]}' > </td>
            <td> '${array[i][2]}' </td>
            <td> '${array[i][3]}' </td>
        </tr>`;
        }

    }

    columna += `</table>`;

    lista.innerHTML = columna;  // Actualizar el contenido del elemento "resultados"
}


//imprime en pantalla una pantalla que se muestra la tabla
function printList(seleccion) {

    sel = seleccion;
    const cabeceras = [["Id", "Imagen", "Nombre", "Peso"], ["Código Postal", "Logo", "Nombre", "Altitud"],
        ["Año", "Logo", "Título", "Rating"], ["ID", "Masa", "Nombre", "Estado"]
    ];
    let lista = document.getElementById("resultados");
    const opciones = ["pokemon", "municipis", "movies", "meteorites"];

    opciones.forEach(opcion => {
        if (opcion !== seleccion) {
            document.getElementById(opcion).checked = false;
        }
    });
    let columna = '<style>\n' +
        'table, th, td {\n' +
        '  border:1px solid black;\n' +
        '};\n' +
        '</style>';
    columna = columna + `<table>`;


    switch (seleccion) {
        case opciones[0]:


            carga = poke;

            columna += `<tr>
        <th> ${cabeceras[0][0]} </th>
        <th> ${cabeceras[0][1]} </th>
        <th> ${cabeceras[0][2]} </th>
        <th> ${cabeceras[0][3]} </th>
    </tr>`;


            for (let i = 0; i < poke.length; i++) {
                columna += `<tr>
            <td> '${poke[i][0]}' </td>
            <td> <img src='${poke[i][1]}' > </td>
            <td> '${poke[i][2]}' </td>
            <td> '${poke[i][3]}' </td>
        </tr>`;
            }

            break;
        case opciones[1]:

            carga = muni;
            columna += `<tr>
        <th> ${cabeceras[1][0]} </th>
        <th> ${cabeceras[1][1]} </th>
        <th> ${cabeceras[1][2]} </th>
        <th> ${cabeceras[1][3]} </th>
    </tr>`;


            for (let i = 0; i < muni.length; i++) {
                columna += `<tr>
            <td> '${muni[i][0]}' </td>
            <td> <img src='${muni[i][1]}' > </td>
            <td> '${muni[i][2]}' </td>
            <td> '${muni[i][3]}' </td>
        </tr>`;
            }

            break;
        case opciones[2]:
            carga = movies;
            columna += `<tr>
        <th> ${cabeceras[2][0]} </th>
        <th> ${cabeceras[2][1]} </th>
        <th> ${cabeceras[2][2]} </th>
        <th> ${cabeceras[2][3]} </th>
    </tr>`;

            for (let i = 0; i < movies.length; i++) {
                columna += `<tr>
            <td> '${movies[i][0]}' </td>
            <td> <img src='${movies[i][1]}' > </td>
            <td> '${movies[i][2]}' </td>
            <td> '${movies[i][3]}' </td>
        </tr>`;
            }
            break;
        case opciones[3]:
            carga = meteoritos;
            columna += `<tr>
        <th> ${cabeceras[3][0]} </th>
        <th> ${cabeceras[3][1]} </th>
        <th> ${cabeceras[3][2]} </th>
        <th> ${cabeceras[3][3]} </th>
    </tr>`;
            for (let i = 0; i < meteoritos.length; i++) {
                columna += `<tr>
            <td> '${meteoritos[i][0]}' </td>
            <td> ${meteoritos[i][1]}'  </td>
            <td> '${meteoritos[i][2]}' </td>
            <td> '${meteoritos[i][3]}' </td>
        </tr>`;
            }
            break;
    }


    columna += `</table>`;

    lista.innerHTML = columna;
}


//Para quitar la selección anterior
function recarga() {
    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function (radio) {
        radio.checked = false;
    });

}


//Paso 3


let inputSearch = document.getElementById('txtSearch')
inputSearch.addEventListener('input', (e) => {
    searchListModificada(inputSearch.value)
});