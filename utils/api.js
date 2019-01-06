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
}

export default new Api();
