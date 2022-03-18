import React from 'react';


const Header = (props) => {

const title = props.name

    return (
        <div>

            <h1>{title}</h1> 
            <h2>Bonjour et Bienvenue parmis nous !</h2>
             
            
        </div>
    );
};

export default Header;