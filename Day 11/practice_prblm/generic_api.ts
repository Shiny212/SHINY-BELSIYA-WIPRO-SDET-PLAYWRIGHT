// 1. Generic API Wrapper

async function fetchData<T>(url: string): Promise<T> {

  // Fetch API data
  const response = await fetch(url);

  // Check request status
  if (!response.ok) {
    throw new Error("Request Failed: " + response.statusText);
  }

  // Convert JSON data
  const data: T = await response.json();

  // Return typed data
  return data;
}

// Album interface
interface Album {
  userId: number;
  id: number;
  title: string;
}

// Main function
async function demo() {

  // API URL
  const url = "https://jsonplaceholder.typicode.com/albums/1";

  // Fetch album data
  const album = await fetchData<Album>(url);

  // Print output
  console.log(`Album ID: ${album.id}`);
  console.log(`Album Title: ${album.title}`);
}

demo();