import { createContext, use } from "react";
import { useState, useContext, useEffect  } from "react";

const MovieContext = createContext();

export const useMoviesContext = () => useContext(MovieContext);

export function MovieProvider({ children }) {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favMovies = localStorage.getItem("favorites")
        if (favMovies) setFavoriteMovies(JSON.parse(favMovies));
    }, []);


    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);


    const addToFavorites = (movie) => {
        setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavoriteMovies((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    };  

    const isFavorite = (movieId) => {   
        return favoriteMovies.some((movie) => movie.id === movieId);
    };


    const value = { favoriteMovies, addToFavorites, removeFromFavorites, isFavorite, setFavoriteMovies };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}


export default MovieProvider;
