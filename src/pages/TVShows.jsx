import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { tvShows } from "../data/movies";



const TVShows = () => {

    const [selectedGenre, setselectedGenre] = useState("All")
    const filteredShows = selectedGenre === "All" ? tvShows : tvShows.filter((show) => show.genre === selectedGenre)

  return (
    <main className="tv-shows-page">
        <div className="tv-shows-header">
            <p className="section-label">EXPLORE</p>
            <h1>TV Shows</h1>
            <p>Discover your next favourite series</p>
        </div>

        <div className="genre-filters">
            <button className= {selectedGenre === "All" ? "active" : ""} onClick={() => setselectedGenre("All")}> All </button>
            <button className= {selectedGenre === "Sci-Fi" ? "active" : ""} onClick={() => setselectedGenre("Sci-Fi")}> Sci-Fi </button>
            <button className= {selectedGenre === "Drama" ? "active" : ""} onClick={() => setselectedGenre("Drama")}> Drama </button>
            <button className= {selectedGenre === "Fantasy" ? "active" : ""} onClick={() => setselectedGenre("Fantasy")}> Fantasy </button>
            <button className= {selectedGenre === "Action" ? "active" : ""} onClick={() => setselectedGenre("Action")}> Action </button>
            <button className= {selectedGenre === "Crime" ? "active" : ""} onClick={() => setselectedGenre("Crime")}> Crime </button>
            <button className= {selectedGenre === "Thriller" ? "active" : ""} onClick={() => setselectedGenre("Thriller")}> Thriller </button>
        </div>

        <div className="movie-grid">
            {filteredShows.map((show, index) => (
                <MovieCard key={`${show.title}-${index}`} movie={show} type="tv" />
            ))}
        </div>
    </main>
  )
}

export default TVShows

