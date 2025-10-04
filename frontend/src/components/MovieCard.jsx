import "../css/MovieCard.css"
import { useState } from "react"
import { useMoviesContext } from "../context/MovieContext.jsx";

function MovieCard({ movie }) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useMoviesContext();
    const favorite = isFavorite(movie.id);


    const toggleFavorite = (e) => {
        e.preventDefault();
        if (!favorite) {
            addToFavorites(movie);
            //alert("Added to Favorites!");
        } else {
            removeFromFavorites(movie.id);
            //alert("Removed from Favorites!");
        }
    };
    
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}  `} alt={movie.title} />
            <div className="movie-overlay">
                <button 
                    className={`favorite-btn ${favorite ? 'active' : ''}`} 
                    onClick={toggleFavorite}
                >
                    {favorite ? '❤️' : '🤍'}
                </button>
            </div>
            <div className="movie-details">
                <h3>{movie.title}</h3>
                {/* <p>{movie.description}</p> */}
                <p>{movie.release_date?.split('-')[0]}</p>
                <p>{movie.rating}</p>
            </div>
        </div>
    );
}

export default MovieCard;