async function fetchApis() {
    try {
        // 1. TODOS API
        let todos = await fetch("https://jsonplaceholder.typicode.com/todos");
        todos = await todos.json();
        console.log("TODOS:");
        console.log(todos.filter(t => t.id <= 10).map(t => t.title));

        // 2. POSTS API
        let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await posts.json();
        console.log("POSTS:");
        console.log(posts.filter(p => p.userId === 1).map(p => p.title));

        // 3. COMMENTS API
        let comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        comments = await comments.json();
        console.log("COMMENTS:");
        console.log(comments.filter(c => c.id <= 10).map(c => c.email));

        // 4. USERS API
        let users = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await users.json();
        console.log("USERS:");
        console.log(users.filter(u => u.id <= 5).map(u => u.name));

        // 5. ALBUMS API
        let albums = await fetch("https://jsonplaceholder.typicode.com/albums");
        albums = await albums.json();
        console.log("ALBUMS:");
        console.log(albums.filter(a => a.id <= 10).map(a => a.title));

        // 6. PHOTOS API
        let photos = await fetch("https://jsonplaceholder.typicode.com/photos");
        photos = await photos.json();
        console.log("PHOTOS:");
        console.log(photos.filter(p => p.id <= 5).map(p => p.url));

        // 7. CAT FACTS API
        let catFacts = await fetch("https://catfact.ninja/facts");
        catFacts = await catFacts.json();
        console.log("CAT FACTS:");
        console.log(catFacts.data.filter(f => f.length < 100).map(f => f.fact));

        // 8. DOG FACTS API
        let dogFacts = await fetch("https://dogapi.dog/api/v2/facts");
        dogFacts = await dogFacts.json();
        console.log("DOG FACTS:");
        console.log(dogFacts.data.map(d => d.attributes.body));

        // 9. RANDOM USER API
        let randomUsers = await fetch("https://randomuser.me/api/?results=10");
        randomUsers = await randomUsers.json();
        console.log("RANDOM USERS:");
        console.log(randomUsers.results.filter(u => u.gender === "female").map(u => u.name.first));

        // 10. POKEMON API
        let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        pokemon = await pokemon.json();
        console.log("POKEMON:");
        console.log(pokemon.results.filter(p => p.name.startsWith("b")).map(p => p.name));

    } catch (error) {
        console.error("Error:", error);
    }
}

fetchApis();