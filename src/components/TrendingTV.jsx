import { ArrowRight } from "lucide-react";
import { tvShows } from "../data/movies";
import MovieCard from "./MovieCard";


const TrendingTV = () => {
  return (
    <section className="trending">
        <div className="section-heading">
            <div>
                <p className="section-label">EXPLORE</p>
                <h2>Trending TV Shows</h2>
            </div>

            <button className="view-all">VIEW ALL <span><ArrowRight/></span></button>
        </div>
        <div className="movie-grid">{tvShows.map((show) => (<MovieCard key={show.title} movie={show} type="tv" />))}</div>
    </section>
  )
}

export default TrendingTV

