'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

// export async function generateStaticParams(){
//     const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//     const res= await data.json();
//     console.log('fetching static')
//     return res.results.map((movie)=>({
//         movie: toString(movie.id)
//     }))
// }

export default function MovieDetails({params}){

    const [movieDetaiil, setMovileDetail] = useState()

    const fetchMovieDetail = async () => {
        const {movie} = params
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
        const detail= await data.json();
        setMovileDetail(detail)
    }
    
    useEffect(() => {
        fetchMovieDetail()
    }, [])
    return(
        <div>
           <div>
            <h2 className="text-2xl">{movieDetaiil.title}</h2>
            <h2 className="text-lg">{movieDetaiil.release_date}</h2>
            <h2>{movieDetaiil.runtime} minutes</h2>
            <h2 className="bg-green-600 inline-block py-2 my-2 mx-2 px-4 rounded text-sm">{movieDetaiil.status}</h2>
            <h2 className="bg-blue-600 inline-block py-2 my-2 px-4 rounded text-sm">{movieDetaiil.budget}$</h2>
            <h1 className="bold">Generes :</h1>
            {movieDetaiil?.genres?.map(genre=>(
                <h2 className="bg-zinc-400 inline-block py-2 my-2 mx-1 px-4 rounded text-sm">{genre.name}</h2>
            ))
            }
            <Image src={'https://image.tmdb.org/t/p/original'+movieDetaiil.backdrop_path}  className='my-12 w-full'
            width={1000} height={1000} alt={movieDetaiil.title} priority/>
            <p>{movieDetaiil.overview}</p>
           </div>
        </div>
    )
}