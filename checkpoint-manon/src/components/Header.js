import React from 'react';
import "./Styles/Header.css"




const Header = (props) => {

    const title = props.name

    return (
        <div className='header'>
            <div className='header__title'>
                <h1>{title}</h1>
                <h2>Bienvenue parmis nous !</h2>

            </div>

        </div>
    );
};

export default Header;