import React, { useEffect, useState } from 'react';
import Navigation from '../components/Header';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {

    const APIKEY ='556167519438243d15a95d5e51471224';

    const[searchFilm, setSearchFilm] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&query=code&language=fr-FR")
        .then((res) => setSearchFilm(res.data.results));
    }, []);

    return (
        <div>
            <Navigation />
                <form>
                    <input type="text" placeholder="Entrez le titre d'un film" />
                <input type="submit" value="recherche" />
                </form>
            <div className="cards-container">
                {searchFilm
                .slice(0,12)
                .map((movie) => {
                    return <Card key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    );
};

export default Home;