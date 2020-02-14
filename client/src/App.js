import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

import Nav from "./components/Nav"

class App extends React.Component {

    state = {

        poke: [],
        error: ''

    };

    componentDidMount() {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => {
                //     console.log(res),
                //     console.log(res.data),
                //     console.log(res.data.results),
                    this.setState({
                        poke: res.data.results
                    });
            })
            .catch(err => console.log("I didn't choose you", err));
    }

    render() {
        return (
            <Router>
                <div className="App">
                
                    <Nav />

                    {this.state.poke.map(attack => (
                        <div className="pokeball" key={attack.name}>
                            <h2>{attack.name}</h2>
                            <Link to={attack.url} />
                        </div>
                    ))}

                </div>
            </Router>
        );
    }
}

export default App;
