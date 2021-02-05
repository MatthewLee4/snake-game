import React from 'react';
import Navigation from './components/Navigation';
import SnakeGame from './pages/SnakeGame';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
            <Router>
                <Navigation></Navigation>
                <div className="App">
                    <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/game" component={SnakeGame}/>
                    <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
    )
}

export default App;