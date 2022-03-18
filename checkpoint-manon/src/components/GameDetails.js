import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';



const GameDetails = () => {
    
    const {id} = useParams()
    const [unicGame, setUnicgame]= useState({})

    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(response => setUnicgame(response.data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
            <h3>{unicGame.name}</h3>
            <p>{unicGame.rating}</p>
            <img src={unicGame.background_image} alt="img" />
            <Link to="/" > Retour </Link>
        </div>
    );
};

export default GameDetails;