import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <span>TMDB APP</span>
                <ul>
                    <li><NavLink to="/" >Acceuil</NavLink></li>
                    <li><NavLink to="/about" >Coup de coeur</NavLink></li>
                    
                </ul>
            </nav>
            <h1>Vos séries à portée de clic</h1>
        </header>
    );
};

export default Header;