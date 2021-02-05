import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, player_name } from '../actions'
import { useState } from 'react';

function Home() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const [playerName, setPlayerName] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value)
        setPlayerName(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(player_name(playerName))
    }
    return (
    <div className="container">
        <h1>Welcome to SnakeGame!</h1>
            <div>

            <form>
                <label for="name">What's your name?</label>
                <br></br>
                <input type="text" id="name" name="name" value={playerName} placeholder="Type your name here!" onChange={handleChange}></input>
                <br></br>
                <button onClick={handleClick}>Submit</button>
            </form>

           
            <h2>You can begin playing by pressing "Play" on the top-right!</h2>
 

            <br></br>
            <br></br>
            <br></br>

            <h2 className="counter">Counter {counter}</h2>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>



            {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}
            </div>
    </div>
    )
};

export default Home;