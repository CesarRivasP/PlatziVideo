const BASE_API = 'https://yts.am/api/v2/';

class Api {
  //Metodo para la api. Cada uno es una fucion asincrona, se puede usar async await
  async getSuggestion(movie_id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${movie_id}`);
            //para parsear los datos. Se hace otro await porque el query trae otra promesa
    // const data = await query.json();
    //La peticion tiene un key 'data', para llegar direactamente a los datos de ese key se hace
    const { data } = await query.json();
    console.log(data);
    // return data;
    // como nos interesa mandar los datos del key movies dentro de data..
    return data.movies;
  }
  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json`);
            //para parsear los datos. Se hace otro await porque el query trae otra promesa
    // const data = await query.json();
    //La peticion tiene un key 'data', para llegar direactamente a los datos de ese key se hace
    const { data } = await query.json();  //Ha query se le esta extrayendo el key data
    console.log(data);
    // return data;
    // como nos interesa mandar los datos del key movies dentro de data..
    return data.movies;
  }

  async searchMovie(title) {
    const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
    const { data } = await query.json();  //Ha query se le esta extrayendo el key data
    console.log(data);
    return data.movies;
  }
}

export default new Api();

//SI se quiere agregar un parametro a la ruta, se le pone un '?' -> `${BASE_API}list_movies.json?`
//fetch retorna una promesa, por eso se implementa el await antes, 'para indicar que es una promesa?'
