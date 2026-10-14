
import { useParams } from 'react-router-dom';
import { tvShows } from '../data/movies';
import { Check, Play, Plus, Star } from 'lucide-react';

const TVShowDetails = ({ myList, setMyList }) => {

    const { title } = useParams()
    const show = tvShows.find((show) => show.title.toLowerCase() === title.toLowerCase())

    if (!show) {
        return ( 
        <main>
            <h1>Movie not found</h1>
            <p>We couldn't find the movie you're looking for.</p>
        </main>)
    }

    const isInList = myList.some((item)=> item.title === show.title)

  return (
    <main className="tv-show-details" style={{backgroundImage:`linear-gradient(to right, rgba(8, 9, 13, 0.95), rgba(8, 9, 13, 0.65)), url(${show.backdrop})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <img className="tv-show-details-poster" src={show.poster} alt={show.title} />

        <div className="tv-show-details-content">
            <p className="section-label">TV SERIES</p>
            <h1>{show.title}</h1>

            <div className="tv-show-details-meta">
                <span>{show.year}</span>
                <span>{show.genre}</span>
                <span className="rating"> <Star size={16}/> {show.rating}</span>
            </div>
            <div className="movie-details-actions">
                <button className="primary-btn" onClick={() => { if(show.trailer){ window.open(show.trailer, "_blank", "noopener, noreferrer")} else { alert("Trailer not available yet.") }} }> <Play size={16} /> Watch Trailer </button>
                <button className="secondary-btn" onClick={() => isInList ? setMyList(myList.filter((item) => item.title !== show.title)) : setMyList([...myList, {...show, type: "tv"}])} > { isInList ? <Check size={18}/> : <Plus size={18} /> } { isInList ? "Added to My List" : "Add to My List"}</button>

            </div>
            <p className="tv-show-details-description">{show.description}</p>
        </div>
    </main>
  )
}

export default TVShowDetails