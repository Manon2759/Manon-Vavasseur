import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';

const GameList = () => {
    const [listgame, setListgame] = useState([])
    const [filtre, setFiltre] = useState(false)


    useEffect(() => {
        axios.get("https://apis.wilders.dev/wild-games/games")
            .then(response => setListgame(response.data))
            .catch(error => console.log(error))
    }, [filtre])

    const deleteId = (id) => {
        const suppId = listgame.filter(game => {
            return game.id !== id
        })
        setListgame(suppId)
    }

    const click = () => {
        setFiltre(!filtre)
    }

    return (

        <div>

            <div> <button onClick={click}>{filtre ? "Tous les jeux" : "Les meilleurs jeux"}</button></div>
            {listgame
                .filter((game) => {
                    return !filtre || game.rating >= 4.5
                })
                .map((game, id) => {
                    return <Game key={id} name={game.name} id={game.id} images={game.background_image} rating={game.rating} onDelete={deleteId} />
                })
            }

        </div>
    );
};

export default GameList;