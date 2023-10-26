import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [searchInput, setSearchInput] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=code&language=fr-FR")
        .then((res) => setSearchInput(res.data.results));
    }, []);

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id="search-input"
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
                    <div className="result">
                        {searchInput
                        .slice(0,12)
                        .map((movie) => (
                            <h3>{movie.title}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
