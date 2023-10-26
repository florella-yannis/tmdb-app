import React, { useEffect, useState } from 'react';
import Navigation from '../components/Header';
import Card from '../components/Card';
import axios from 'axios';
import Form from '../components/Form';

const Home = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiKey);

    const[searchFilm, setSearchFilm] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=code&language=fr-FR")
        .then((res) => setSearchFilm(res.data.results));
    }, []);

    return (
        <div>
            <Navigation />
            <Form />
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