import { useState } from "react";
import { popularMovies, trendingMovies, tvShows } from "../data/movies";
import MovieCard from "../components/MovieCard";
import {  SearchIcon, X } from "lucide-react";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const allMovies = [...trendingMovies, ...popularMovies, ...tvShows.map((show) => ({...show, type: "tv" }))]
    const filteredMovies = allMovies.filter((movies) => movies.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <main className="search-page">
        <div className="search-header">
            <p className="section-label">DISCOVER</p>
            <h1>Search</h1>
            <p>Find movies and shows you want to watch.</p>
        </div>

        <div className="search-box">
            <SearchIcon size={20} /> 
            <input type="text" placeholder="Search for a movie..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
            {searchQuery && ( <button className="clear-search" onClick={() => setSearchQuery("")} aria-label="Clear search"> <X size={18} /> </button> )}
        </div>
       
        {searchQuery === "" ? (
            <div className="search-message">
                <h2>What are you looking for?</h2>
                <p>Search for a movie to get started.</p>
            </div>
        ) : filteredMovies.length > 0 ? ( <div className="movie-grid">
            {filteredMovies.map((movie, index) => (
                <MovieCard key={`${movie.title}-${index}`} movie={movie} type={movie.type === "tv" ? "tv" : "movie"} />
            ))} </div> ) : ( <div className="search-message"> <h2>No Movies Found</h2> <p>Try Searching for something else</p> </div> ) }
    </main>
  )
}

export default Search

