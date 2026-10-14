import { Clapperboard, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav className="navbar">
        <div className="logo">
            <Clapperboard size={24} strokeWidth={2} />
            <span>CineVerse</span>
        </div>
    <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">TV Shows</Link>
        <Link to="/my-list">My List</Link>
    </div>
    <div className="nav-actions">
        <Link to="/search" aria-label="Search">
            <Search size={19}/>
        </Link>
        <button aria-label="My-List">
            <Heart size={19}/>
        </button>
    </div>
   </nav>
  )
}

export default Navbar

