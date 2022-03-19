import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import "./Styles/GameDetails.css"



const GameDetails = () => {

    const { id } = useParams()
    const [simpleGame, setSimpleGame] = useState({})

    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(response => setSimpleGame(response.data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
            <div className='details__game'>
                <h3 className='title__details__game'>{simpleGame.name}</h3>
                <img className='img__details__game' src={simpleGame.background_image} alt="img" />
                <p>☆ {simpleGame.rating} / {simpleGame.released}</p>
                <div className='link__details__game'>
                <NavLink to="/"> Retour </NavLink>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;