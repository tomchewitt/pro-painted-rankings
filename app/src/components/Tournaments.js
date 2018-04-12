import React, { Component } from "react";
import Header from './Header';
import TournamentListItem from './TournamentListItem';

class Tournaments extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="Tournaments">
                    <div className="Tournaments__headers">
                        <span className="column">NAME</span>
                        <span className="column">PAINTERS</span>
                    </div>

                    {window.rankingsData.tournaments.map(tornamentArr =>
                        <TournamentListItem key={tornamentArr['name']} details={tornamentArr} />
                    )}
                </div>
            </div>
        );
    }
}

export default Tournaments;
