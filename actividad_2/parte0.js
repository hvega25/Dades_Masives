let lista = [];
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
        let nombres_muni = [];


        for (let f = 0; f < data[1].elements.length; f++) {
            nombres_muni.push(municipisData.elements[f].municipi_nom)
        }
        //console.table(nombres_muni);

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

        for (let t = 0; t < nombres_mete.length; t++) {
            lista[t] = [nombres_poke[t], nombres_muni[t], nombres_movies[t], nombres_mete [t]];
        }

        console.table(lista );
    })
    .catch(error => console.error("Error al cargar los datos:", error));
