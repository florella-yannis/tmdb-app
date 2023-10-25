import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {

    const APIKEY ='556167519438243d15a95d5e51471224';

    const[searchFilm, setSearchFilm] = useState("");

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&query=code&language=fr-FR")
        .then((res) => console.log(res.data.results));
    }, []);

    return (
        <div>
            <Navigation />
            <div className="search-input">
                <input type="text" placeholder="Rechercher un film" />
                <button>Rechercher</button>
            </div>
            <Card />
            <h1></h1>
        </div>
    );
};

export default Home;