import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';

const GameList = () => {
    const [listgame, setListgame] = useState([])
    const [filtre, setFiltre] = useState(false)
    const [relire, setRelire] = useState(false)

    const click = () => {
        setFiltre(!filtre)

        if (filtre) {
            filterRating()
        } else {
            setRelire(!relire)
        }
    }

    useEffect(() => {
        axios.get("https://apis.wilders.dev/wild-games/games")
            .then(response => setListgame(response.data))
            .catch(error => console.log(error))
    }, [relire])

    const deleteId = (id) => {
        const suppId = listgame.filter(game => {
            return game.id !== id
        })
        setListgame(suppId)
    }
    const filterRating = () => {
        const filterRat = listgame.filter((game) => {
            return game.rating >= 4.5
        })
        setListgame(filterRat)
        console.log(filterRat)
    }

    return (

        <div>
            <div> <button onClick={() => click()}>Best Games</button></div>
            {listgame.map((game, index) => {
                return <Game key={index} name={game.name} id={game.id} images={game.background_image} rating={game.rating} onDelete={deleteId} onFilter={filterRating} />
            })}

        </div>
    );
};

export default GameList;