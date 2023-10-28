import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '../components/Card';

const Form = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [searchInput, setSearchInput] = useState("code");
    const [searchFilm, setSearchFilm] = useState([]);
    const [sortMoreLess, setSortMoreLess] = useState(null);

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
                    <div className="btn-more" id="more" onClick={ () => setSortMoreLess("more")}>
                        <span>Top &#8593;</span>
                    </div>
                    <div className="btn-less" id="less" onClick={ () => setSortMoreLess("less")}>
                        <span>&#8595;Flop </span>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                {searchFilm
                    .slice(0, 12)
                    .sort((a,b) => {
                        if(sortMoreLess === "more"){
                            return b.vote_average - a.vote_average;
                        } else if (sortMoreLess === "less"){
                            return a.vote_average - b.vote_average;
                        }
                    })
                    .map((movie) => {
                        return <Card key={movie.id} movie={movie} />
                    })}
            </div>
        </div>
    );
};

export default Form;
