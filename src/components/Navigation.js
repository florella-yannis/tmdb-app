import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <li><NavLink to="/" >Acceuil</NavLink></li>
                    <li><NavLink to="/about" >Coup de coeur</NavLink></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navigation;