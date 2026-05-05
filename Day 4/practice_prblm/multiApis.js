// 1. TODOS API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(r => r.json())
  .then(a => a.filter(t => t.id <= 10))
  .then(a => a.map(t => t.title))
  .then(console.log)
  .catch(console.error);


// 2. POSTS API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(r => r.json())
  .then(a => a.filter(p => p.userId === 1))
  .then(a => a.map(p => p.title))
  .then(console.log)
  .catch(console.error);


// 3. COMMENTS API
fetch("https://jsonplaceholder.typicode.com/comments")
  .then(r => r.json())
  .then(a => a.filter(c => c.id <= 10))
  .then(a => a.map(c => c.email))
  .then(console.log)
  .catch(console.error);


// 4. USERS API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(r => r.json())
  .then(a => a.filter(u => u.id <= 5))
  .then(a => a.map(u => u.name))
  .then(console.log)
  .catch(console.error);


// 5. ALBUMS API
fetch("https://jsonplaceholder.typicode.com/albums")
  .then(r => r.json())
  .then(a => a.filter(al => al.id <= 10))
  .then(a => a.map(al => al.title))
  .then(console.log)
  .catch(console.error);


// 6. PHOTOS API
fetch("https://jsonplaceholder.typicode.com/photos")
  .then(r => r.json())
  .then(a => a.filter(p => p.id <= 5))
  .then(a => a.map(p => p.url))
  .then(console.log)
  .catch(console.error);


// 7. CAT FACTS API
fetch("https://catfact.ninja/facts")
  .then(r => r.json())
  .then(obj => obj.data)
  .then(a => a.filter(f => f.length < 100))
  .then(a => a.map(f => f.fact))
  .then(console.log)
  .catch(console.error);


// 8. DOG FACTS API
fetch("https://dogapi.dog/api/v2/facts")
  .then(r => r.json())
  .then(obj => obj.data)
  .then(a => a.map(d => d.attributes.body))
  .then(console.log)
  .catch(console.error);


// 9. RANDOM USER API
fetch("https://randomuser.me/api/?results=10")
  .then(r => r.json())
  .then(obj => obj.results)
  .then(a => a.filter(u => u.gender === "female"))
  .then(a => a.map(u => u.name.first))
  .then(console.log)
  .catch(console.error);


// 10. POKEMON API
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(r => r.json())
  .then(obj => obj.results)
  .then(a => a.filter(p => p.name.startsWith("b")))
  .then(a => a.map(p => p.name))
  .then(console.log)
  .catch(console.error);