const API_KEY = '51fd99d5677ddd16b1fe835873e08731';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFecth = async (endpoint) => {
  return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {
  getHomeList: async () => {
    return [{
        slug: 'originals',
        title: "Popular On Nelix",
        items: await basicFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: "Trending",
        items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: "Top Rating",
        items: await basicFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: "Action",
        items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: "Comedy",
        items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: "Horor",
        items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: "Romance",
        items: await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: "Documentary",
        items: await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'movei':
          info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
        case 'tv':
          info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  }
}