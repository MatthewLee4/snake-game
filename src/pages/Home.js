import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, player_name, snake_color } from '../actions';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';



function Home() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const [playerName, setPlayerName] = useState('')
    const [snakeColor, setSnakeColor] = useState('')
    const dispatch = useDispatch();


    const handleChangeName = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setPlayerName(e.target.value)
    }
    
    const handleClickName = (e) => {
        e.preventDefault();
        dispatch(player_name(playerName))
    }

    const handleChangeSnakeColor = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setSnakeColor(e.target.value)
    }
    
    const handleClickSnakeColorRed = (e) => {
        e.preventDefault();
        dispatch({type: 'color', payload: {color: 'red'}})
    }

    const handleClickSnakeColorBlue = (e) => {
        e.preventDefault();
        dispatch({type: 'color', payload: {color: 'blue'}})
    }

    const handleClickSnakeColorGreen = (e) => {
        e.preventDefault();
        dispatch({type: 'color', payload: {color: 'green'}})
    }

    return (
    <Container>
        <h1 id="greeting">Welcome <div id="player_name" style={{color: "red"}}>{playerName}</div> to SnakeGame!</h1>
            <div>
            
            <br></br>
            <br></br>

            <p>Before you begin: </p>
            <ul>
                <li>Enter your name (So you can view where you stand in the leaderboards.)</li>
                <li>Select the difficulty level you'd like to start at. </li>
                <li>(The higher the difficulty, the more points you earn!)</li>
                <li>You can change the color of the snake (Red, Blue, or Green)</li>
            </ul>

            <br></br>
            <br></br>

            <form>
                <h4 for="name">What's your name?</h4>
                <br></br>
                <input type="text" id="name" name="name" value={playerName} placeholder="Type your name here!" onChange={handleChangeName}></input>
                <br></br>
                <Button onClick={handleClickName}>Submit</Button>
            </form>

            <br></br>
            <br></br>

            <div id="rectangleContainer" style={{snakeColor}} onChange={handleChangeSnakeColor}>{snake_color}</div>
            
            <p>Change the color of the Snake</p>
            <button id="red" onClick={handleClickSnakeColorRed}>Red</button>
            <button id="blue" onClick={handleClickSnakeColorBlue}>Blue</button>
            <button id="green" onClick={handleClickSnakeColorGreen}>Green</button>

            <br></br>
            <br></br>
 
            <p>Choose your Difficulty Level</p>
            <h4 className="counter">Difficulty Level {counter}</h4>
            <button onClick={() => dispatch(increment(1))}>+</button>
            <button onClick={() => dispatch(decrement(1))}>-</button>

            <br></br>
            <br></br>

            <h4>You can begin playing by pressing "Play" on the top-left!</h4>

            {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}
            </div>
    </Container>
    )
};


export default Home;

