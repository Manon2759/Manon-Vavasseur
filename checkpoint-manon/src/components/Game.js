import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Styles/Game.css"


const Game = (props) => {
    return (
        
            <div className='cards__game'>
              
                    <h3 className='cards__game__title' >{props.name}</h3>
                    <img className='img__game' src={props.images} alt={props.name} />
                    <p className='paragraphe__game'>★{props.rating}</p>
                    <div className='btn'>
                        <button className='btn__delete' onClick={() => props.onDelete(props.id)}> Supprimer un jeu !</button>
                    </div>
                    <div className='link__game'>
                    <NavLink to={`/games/${props.id}`}> Clique ici si tu veux plus de renseignements ! </NavLink>
                    </div>
            
            </div>

    );
};

export default Game;