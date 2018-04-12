import React, { Component } from 'react';
import Router from './Router';
import Footer from './Footer';
import "../assets/App.css";

class App extends Component {
    componentWillMount() {
        // Setup sorted rankings
        const sortedPainters = window.rankingsData.painters.sort((a, b) => {
            return a['position'] - b['position'];
        });

        window.rankingsData.painters = sortedPainters;
    }

    render() {
        return (
            <div className="App">
                <Router />

                <Footer />
            </div>
        );
    }
};

export default App;
