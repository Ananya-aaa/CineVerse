import { useParams } from "react-router-dom";
import { popularMovies, trendingMovies } from "../data/movies";
import { Check, Play, Plus, Star } from "lucide-react";



const MovieDetails = ({ myList, setMyList }) => {
    const { title} = useParams()
    const allMovies = [...trendingMovies, ...popularMovies]
    const movie = allMovies.find((movie) => movie.title.toLowerCase() === title.toLowerCase())

    if(!movie) {
        return (
            <main>
                <h1>Movie not found</h1>
                <p>We couldn't find the movie you're looking for.</p>
            </main>
        )
    }

    const isInList = myList.some((item) => item.title === movie.title)

  return (
    <main className="movie-details" style={{backgroundImage:`linear-gradient(to right, rgba(8, 9, 13, 0.95), rgba(8, 9, 13, 0.65)), url(${movie.backdrop})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <img className="movie-details-poster" src={movie.poster} alt={movie.title} />

        <div className="movie-details-content">
            <p className="section-label">Movies</p>
            <h1>{movie.title}</h1>
        
            <div className="movie-details-meta">
                <span>{movie.year}</span>
                <span>{movie.genre}</span>
                <span className="rating"> <Star size={16}/> {movie.rating}</span>
            </div>
             <div className="movie-details-actions">
                    <button className="primary-btn" onClick={() => { if(movie.trailer){ window.open(movie.trailer, "_blank", "noopener, noreferrer")} else { alert("Trailer not available yet.") }} }> <Play size={16}/> Watch Trailer </button>
                    <button onClick={() => isInList ? setMyList(myList.filter((item) => item.title !== movie.title)) : setMyList([...myList, movie])} className="secondary-btn"> {isInList ? <Check size={18} /> : <Plus size={18}/>} {isInList ? "Added to My List" : "Add to My List"} </button>
            </div>
             <p className="movie-details-description">{movie.description}</p>
        </div>
    </main>
  )
}

export default MovieDetails

