import { Play, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { popularMovies, trendingMovies, tvShows } from "../data/movies";
import { useState } from 'react';


const Hero = () => {
    
    const allTitles = [...trendingMovies.map((movie) =>({
            ...movie,
            mediaType: "movie",
        })), ...popularMovies.map((movie) => ({
            ...movie,
            mediaType: "movie",
        })), ...tvShows.map((show) => ({
            ...show,
            mediaType: "tv",
        })),
    ]

    const [featured, setFeatured] = useState(() => { const savedTitle = sessionStorage.getItem("cineverseFeatured")
        if(savedTitle) {
            const savedMovie = allTitles.find((item) => item.title === savedTitle)
        if(savedMovie) return savedMovie
        }

        const randomTitle = allTitles[Math.floor(Math.random() * allTitles.length)]

        sessionStorage.setItem("cineverseFeatured", randomTitle.title)

        return randomTitle
     })

    const allMovies = [...trendingMovies, ...popularMovies].find((movie) => {movie.title.toLowerCase().trim === "interstellar"})
  return (
    <section className="hero" style={{backgroundImage:`linear-gradient(to right, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.55) 55%, rgba(10, 10, 10, 0.2) 100%), url(${featured.backdrop})`}}>
        <div className="hero-content">
            <p className="hero-label">FEATURED MOVIE</p>
            <h1>{featured.title}</h1>
            <div className="hero-meta">
                <span>{featured.year}</span>
                <span>PG-13</span>
                <span>{featured.genre}</span>
                <span className="rating"> <Star size={16}/> {featured.rating}</span>
            </div>
            <p className="hero-description">
                {featured.description}
            </p>
            <div className="hero-buttons">
                <button className="primary-btn" onClick={() => {
                    window.open( "https://www.youtube.com/watch?v=zSWdZVtXT7E", "_blank", "noopener,noreferred" )
                }}>
                    <Play size={18} fill="currentColor"/>
                    Watch Trailer
                </button>


                <Link to={featured.mediaType === "tv" ? `/tv-shows/${encodeURIComponent(featured.title)}` : `/movies/${encodeURIComponent(featured.title)}`} className="secondary-btn"> 
                    <Plus size={18} /> 
                    More Info
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero
