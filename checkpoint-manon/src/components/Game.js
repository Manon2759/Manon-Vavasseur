import React from 'react';

const Game = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.rating}</p>
            <img src={props.images} alt="img" />
            <div>
                <button onClick={() => props.onDelete(props.id)} >Supprimer un jeu !</button></div>
        </div>
    );
};

export default Game;