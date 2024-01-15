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
        console.table(data);
    })
    .catch(error => console.error("Error al cargar los datos:", error));



