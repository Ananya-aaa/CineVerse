import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MyList from "./pages/MyList";
import { useEffect, useState } from "react";
import Search from "./pages/Search";
import TVShows from "./pages/TVShows";
import TVShowDetails from "./pages/TVShowDetails";


const App = () => {
  const [myList, setMyList] = useState( () => 
    { const savedList = localStorage.getItem("myList")
  return savedList ? JSON.parse(savedList) : []})

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList))
  }, [myList])
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:title" element={<MovieDetails myList={myList} setMyList={setMyList} />} />
      <Route path="/my-list" element={<MyList myList={myList} />} />
      <Route path="/search" element={<Search/>  } />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/tv-shows/:title" element={<TVShowDetails myList={myList} setMyList={setMyList} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App