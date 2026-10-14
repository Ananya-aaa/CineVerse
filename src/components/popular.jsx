import { ArrowRightIcon } from "lucide-react";
import MovieCard from "../components/MovieCard";
import { popularMovies } from "../data/movies";

function Popular() {
  return (
    <section className="popular">
      <div className="section-heading">
        <div>
          <p className="section-label">DISCOVER</p>
          <h2>Popular This Week</h2>
        </div>
          <button className="view-all">View All <span><ArrowRightIcon/></span>
        </button>
      </div>
      <div className="movie-grid">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.title} 
          movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default Popular;