import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Movie({movie}) {
    return (
        <div>
            <img src={movie.medium_cover_image} alt={movie.title}/>                
            <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul> 
        </div>
    );

}

export default Movie;