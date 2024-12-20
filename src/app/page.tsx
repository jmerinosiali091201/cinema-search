import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Search from "@/components/Search";
import { fetchMoviesByName } from "@/lib/data";
import { Movie } from "@/lib/definitions";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const data = await fetchMoviesByName(query);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>Busca tus pelis favoritas</h1>
      <Search />
      <Grid>
        {data?.map((movie: Movie) => {
          return (<Card title={movie.title} year={movie.year} image={movie.poster} type={movie.type} key={movie.id} />)
        })}
      </Grid>

    </div>
  );
}
