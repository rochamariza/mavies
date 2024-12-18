const api = 'c574b32fc096437ef9d9c10e7e708722'
export async function fetchURL(query){
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-BR&api_key=${api}`);
    const data = await response.json();
    return data
}

