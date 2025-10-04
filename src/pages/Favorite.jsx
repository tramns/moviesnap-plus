import "../css/Favorite.css";
import { useMoviesContext } from "../context/MovieContext.jsx";
import MovieCard from "../components/MovieCard.jsx";


function Favorite() { 
    const { favoriteMovies } = useMoviesContext();
    if (favoriteMovies.length > 0) {
        return (
            <div className="favorites">
                <h2>Favorite Movies</h2>
                <div className="favorites-grid">
                    {favoriteMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Favorite Movies</h2>
            <div className="favorites-empty">
                <h2>No favorites yet.</h2>
                <p>Browse movies and add them to your favorites!</p>
            </div>
            
        </div>
    );
}

export default Favorite;    