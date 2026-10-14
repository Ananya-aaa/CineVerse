
import { ArrowRightIcon } from "lucide-react";
import MovieCard from "./MovieCard";
import {trendingMovies} from "../data/movies";

function Trending() {
    return(
        <section className="trending">
            <div className="section-heading">
                <div>
                    <p className="section-label">EXPLORE</p>
                    <h2>Trending Now</h2>
                </div>
                <button className="view-all">VIEW ALL <span><ArrowRightIcon/></span> </button>
            </div>
            <div className="movie-grid">
                {trendingMovies.map((movie) => (
                    <MovieCard key={movie.title}
                    movie={movie}
                    />
                ))}
            </div>
        </section>
    )
}

export default Trending

