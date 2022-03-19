import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';
import "./Styles/GameList.css"
import Header from './Header';

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
<Header name="Salut les Geeks IN Black" />
            <div className='btn__filter'> 
            <button className='btn__filter__text' onClick={click}>{filtre ? "Tous les jeux" : "Les jeux les mieux notés"}</button></div>

            <div className='cards'>
                {listgame
                    .filter((game) => {
                        return !filtre || game.rating >= 4.5
                    })
                    .map((game, id) => {
                        return <Game key={id} name={game.name} id={game.id} images={game.background_image} rating={game.rating} onDelete={deleteId} />
                    })
                }

            </div>

        </div>
    );
};

export default GameList;