import React, { useEffect, useState } from 'react';
import Navigation from '../components/Header';
import axios from 'axios';
import Card from '../components/Card';

const About = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let MoviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        // console.log(MoviesId);
        for (let i = 0; i < MoviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${MoviesId[i]}?api_key=${apiKey}`)
            .then((res) => setListData((listData) => [...listData, res.data]));
        }

    }, [])

    return (
        <div className="list-page">
            <Navigation />
            <h1>Mes coups de coeur <span>❤️</span></h1>
            <div className="result">
                {listData.length > 0 ? (
                    listData.map((movie) => <Card movie={movie} key={movie.id} />)
                ) : (
                    <h2>Aucun coup de coeur pour le moment</h2>
                )}
            </div>
        </div>
    );
};

export default About;