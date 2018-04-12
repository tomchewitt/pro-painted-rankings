import React, { Component } from "react";
import Header from './Header';
import TournamentPainterListItem from './TournamentPainterListItem';
import { withRouter } from 'react-router-dom';
import { humanReadableName } from './Utils';

class Painter extends Component {
    componentWillMount() {
        this.painterObj = window.rankingsData.painters.filter((painter) => {
            return painter['name'] === this.props.match.params.name;
        })[0];

        this.name = humanReadableName(this.painterObj.name);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="Painter">
                    <div className="Painter__header">
                        <span className="Painter__header-title">PAINTER</span>
                        <h2 className="Painter__header-name">{this.name}</h2>
                    </div>
                    <div className="Painter__score">
                        <span className="Painter__score-title">SCORE</span>
                        <span className="Painter__score-number">{this.painterObj.score}</span>
                    </div>

                    <div className="Painter__tournaments">
                        <div className="Painter__tournaments-header">
                            <span className="column">TOURNAMENT NAME</span>
                            <span className="column">POSITION</span>
                        </div>
                        { this.painterObj.tournaments.map((tournament) => {
                            return (
                                <TournamentPainterListItem key={tournament.name} details={tournament} />
                            )
                        }) }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Painter);
