import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home.jsx'
import Favorite from './pages/Favorite.jsx'
import NavBar from './components/NavBar.jsx'
import MovieProvider from './context/MovieContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  const movie = {
    title: "Inception",
    description: "thriller - action - sci-fi",
    releaseYear: 2010,
    rating: 8.8,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODAxNTc4ODMxNV5BMl5BanBnXkFtZTcwNTA5NjYxNA@@._V1_.jpg"
  };

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
