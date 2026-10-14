import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { popularMovies, trendingMovies } from "../data/movies";


const Movies = () => {

    const [selectedGenre, setSelectedGenre] = useState("All")
    const allMovies = [...trendingMovies, ...popularMovies]
    const filteredMovies = selectedGenre === "All" ? allMovies : allMovies.filter((movie => movie.genre === selectedGenre))

  return (
    <main className="movies-page">
        <div className="movies-header">
            <div>
            <p className="section-label">EXPLORE</p>
            <h1>Movies</h1>
            <p className="movies-description">Discover movies worth watching</p>
            </div>
        </div>
        <div className="genre-filters">
            <button className={selectedGenre === "All" ? "active" : ""} onClick={()=>setSelectedGenre("All")}>All</button>
            <button className={selectedGenre === "Sci-Fi" ? "active" : ""} onClick={()=>setSelectedGenre("Sci-Fi")}>Sci-Fi</button>
            <button className={selectedGenre === "Action" ? "active" : ""} onClick={()=>setSelectedGenre("Action")}>Action</button>
            <button className={selectedGenre === "Drama" ? "active" : ""} onClick={()=>setSelectedGenre("Drama")}>Drama</button>
            <button className={selectedGenre === "Thriller" ? "active" : ""} onClick={()=>setSelectedGenre("Thriller")}>Thriller</button>
        </div>
        <div className="movie-grid">
            {filteredMovies .map((movie, index) => (<MovieCard key={`${movie.title}-${index}`} movie={movie}/>))}
        </div>
    </main>
  )
}

export default Movies

