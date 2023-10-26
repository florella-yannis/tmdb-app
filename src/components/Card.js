import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({movie}) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const genre = movie.genre_ids;
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=" + apiKey + "&query=code&language=fr-FR")
        .then((res) => setCategory(res.data.genres));
    }, []);


    return (
        <li className="card-container">
            <div className="poster">
                {/* <img src="./img/poster.jpg" alt="affiche-film" /> */}
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </div>
            <h2>{movie.title}</h2>
            <h3>Sortie le : {movie.release_date} </h3>
            <p>{movie.vote_average.toFixed(1)}/10</p>
            <div className="genre">
                {genre.slice(0,3).map((genre,index) => (<p key={index}>{genre}</p>))}
            </div>
            <h4>Synopsis</h4>
            <p className="overflow">{movie.overview}</p>
            <button>Ajouter au coups de coeur</button>
        </li>

    );
};

export default Card;