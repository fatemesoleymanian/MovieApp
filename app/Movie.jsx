import Link from "next/link";
import Image from "next/image";
export default function Movie({title,id,poster_path,release_date}){
    return(
        <div>
            
            <Link href={'/'+id}>
            <Image src={'https://image.tmdb.org/t/p/original'+poster_path}  width={500} height={500}
            priority alt={title}/>
            <h1>{title}</h1>
            </Link>
            <h2>Release date : {release_date}</h2>

        </div>
    )
}