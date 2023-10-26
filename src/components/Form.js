import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../components/Card';

const Form = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [searchInput, setSearchInput] = useState("code");
    const[searchFilm, setSearchFilm] = useState([]);
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}&language=fr-FR`)
        .then((res) => setSearchFilm(res.data.results));
    }, [searchInput]);

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id="search-input"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <input type="submit" value="Recherche" />
                </form>
                <div className="btn-container">
                    <div className="btn-more">
                    <span>Top &#8593;</span>
                    </div>
                    <div className="btn-less">
                    <span>Flop &#8595;</span>
                    </div>
                    {/* <div className="result">
                        {searchInput
                        .slice(0,12)
                        .map((movie) => (
                            <h3 key={movie.id}>{movie.title}</h3>
                        ))}
                    </div> */}
                </div>
            </div>
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

export default Form;
