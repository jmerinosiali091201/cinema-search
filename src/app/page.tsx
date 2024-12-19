import Search from "@/components/Search";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const data = await fetch(`${process.env.MOVIES_API_URL}?apikey=${process.env.MOVIES_API_KEY}&s=${query}`)
    .then(res => res.json())
    .then(data => { console.log(data.Search); return data.Search; });



  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>Busca tus pelis favoritas</h1>
      <Search />

      {data && <div>
        <p></p>
      </div>}
    </div>
  );
}
