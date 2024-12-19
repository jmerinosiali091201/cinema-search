const movieApiUrl = "http://www.omdbapi.com";

const apiKey = process.env.MOVIES_API_KEY;

export const fetchMoviesByName = async (name: string) => {
  return await fetch(`${movieApiUrl}?apikey=${apiKey}&s=${name}`)
    .then((res) => res.json())
    .then((data) => {
      return data.Search?.map(
        (movie: {
          imdbID: string;
          Title: string;
          Year: string;
          Type: string;
          Poster: string;
        }) => {
          return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            type: movie.Type,
            poster: movie.Poster,
          };
        }
      );
    });
};
