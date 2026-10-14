import { Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, type = "movie" }) => {
  return (
   <Link to={`/${type === "tv" ? "tv-shows" : "movies"}/${encodeURIComponent(movie.title)}`} className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <span className="media-type">{type === "tv"? "TV SERIES" : "MOVIE"}</span>
        <button className="play-btn" aria-label={`Play ${movie.title}`}>
          <Play size={20} fill="currentColor" />
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>{movie.year}</span>
          <span>
            <Star size={16} strokeWidth={2}/>
            {movie.rating}</span>
        </div>
      </div>
   </Link>
  )
}

export default MovieCard
