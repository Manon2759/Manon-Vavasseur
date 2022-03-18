import React from 'react';
import { Link } from 'react-router-dom';

const Game = (props) => {
    return (
        <div>

            <h3>{props.name}</h3>
            <p>{props.rating}</p>
            <img src={props.images} alt="img" />
            <div>
                <button onClick={() => props.onDelete(props.id)}> Supprimer un jeu !</button></div>

            <Link to={`/games/${props.id}`}> Clique ici si tu veux plus de renseignements ! </Link>
            
        </div>
    );
};

export default Game;