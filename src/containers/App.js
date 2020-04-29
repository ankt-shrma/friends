import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            robots: [],
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const { searchField, robots } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?

            (<h1>Loading...</h1>) :
            (
                <div className='tc'>
                    <h1 className='f1'>F.R.I.E.N.D.S</h1>
                    <Searchbox onSearchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
}

export default App;