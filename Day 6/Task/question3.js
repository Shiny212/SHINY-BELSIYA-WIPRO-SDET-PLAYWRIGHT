const rawMovies = [
    "Inception|Sci-Fi|12000",
    "The Lion King|Animation|8000",
    "Mad Max|Action|invalid",
    "The Matrix|Sci-Fi|15000",
    "Gladiator|Action|4500"
];

function processMovies(movies) {
    let movieObjects = [];

    for (let i = 0; i < movies.length; i++) {
        let parts = movies[i].split("|");

        let name = parts[0];
        let genre = parts[1];
        let views = Number(parts[2]);

        if (isNaN(views)) {
            views = 0;
        }

        movieObjects.push({
            name: name,
            genre: genre,
            views: views
        });
    }

    let finalMovies = movieObjects
        .filter(movie =>
            (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
            movie.views > 5000
        )
        .sort((a, b) => b.views - a.views);

    return JSON.stringify(finalMovies);
}

console.log(processMovies(rawMovies));