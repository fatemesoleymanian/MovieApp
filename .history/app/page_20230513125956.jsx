import Movie from "./Movie";

// export const revalidate = 60;
export default async function Home() {
  console.log('api key'+ process.env.API_KEY)
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const res = await data.json();

  return (
    <main>
      <div className='grid gap-16 grid-cols-fluid'>
        {res?.results?.map((movie, index) => (
          <Movie title={movie?.title} id={movie?.id} key={index} poster_path={movie?.poster_path}
            release_date={movie?.release_date} />
        ))}
      </div>
    </main>
  )
}
