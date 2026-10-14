
import MovieCard from "../components/MovieCard";

const MyList = ({ myList }) => {
  return (
    <main className="my-list-page">
        <div className="my-list-header">
            <p className="section-label">YOUR COLLECTION</p>
            <h1>My List</h1>
            <p>your saved movies will appear here</p>
        </div>

       {myList.length > 0 ? ( <div className="movie-grid">
          {myList.map((movie, index) => ( <MovieCard key={`${movie.title}-${index}`} movie={movie} type={movie.type === "tv" ? "tv" : "movie"} /> ))}
        </div>) : (<div className="empty-list"> <h2>Your list is empty</h2> <p>Start exploring movies and save the ones you want to watch later.</p> </div>) }
    </main>
  )
}

export default MyList

