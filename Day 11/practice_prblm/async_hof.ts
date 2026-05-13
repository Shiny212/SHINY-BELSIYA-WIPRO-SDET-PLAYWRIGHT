// 8. Async Higher-Order Function

// Generic fetch function
async function fetchData<T>(url: string): Promise<T> {

  // Fetch data
  const response = await fetch(url);

  // Check response
  if (!response.ok) {
    throw new Error("Request Failed: " + response.statusText);
  }

  // Convert JSON
  const data: T = await response.json();

  // Return data
  return data;
}

// Album interface
interface Album {
  userId: number;
  id: number;
  title: string;
}

// Higher-order function
function safeExecute<T>(
  fn: () => Promise<T>
): () => Promise<T | null> {

  // Return async function
  return async () => {

    try {

      // Execute function
      return await fn();

    } catch (error) {

      // Print error
      console.log(error);

      // Return null
      return null;
    }
  };
}

// Safe function
const getAlbum = safeExecute(async () => {

  // API URL
  const url = "https://jsonplaceholder.typicode.com/albums/1";

  // Fetch album
  return await fetchData<Album>(url);
});

// Main function
async function demo() {

  // Get album
  const album = await getAlbum();

  // Check null
  if (album !== null) {

    // Print values
    console.log(`Album ID: ${album.id}`);
    console.log(`Album Title: ${album.title}`);
  }
}

demo();