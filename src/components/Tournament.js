import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import PainterTournamentListItem from './PainterTournamentListItem';
import { humanReadableName } from './Utils';
import Moment from 'react-moment';

class Tournament extends Component {
    componentWillMount() {
        this.tournamentObj = window.rankingsData.tournaments.filter((tournament) => {
            return tournament['name'] === this.props.match.params.name;
        })[0];

        this.paintersArr = [];

        window.rankingsData.painters.forEach((painter) => {
            if (painter.tournaments !== undefined) {
                painter.tournaments.forEach((tournament) => {
                    if (tournament.name === this.props.match.params.name) {
                        this.paintersArr.push(painter);
                    }
                });
            }
        });

        this.name = humanReadableName(this.tournamentObj.name);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="Tournament">
                    <div className="Tournament__header">
                        <span className="Tournament__header-title">TOURNAMENT</span>
                        <h2 className="Tournament__header-name">{this.name}</h2>
                    </div>
                    <div className="Tournament__info">
                        <div className="Tournament__info-item">
                            <span className="Tournament__info-title">DATE</span>
                            <span className="Tournament__info-detail"><Moment unix format="DD/MM/YY">{this.tournamentObj.date}</Moment></span>
                        </div>
                        <div className="Tournament__info-item">
                            <span className="Tournament__info-title">PAINTERS</span>
                            <span className="Tournament__info-detail">{this.tournamentObj.painters}</span>
                        </div>
                    </div>

                    <div className="Tournament__tournaments">
                        <div className="Tournament__tournaments-header">
                            <span className="column">PAINTER NAME</span>
                            <span className="column">POSITION</span>
                        </div>
                    </div>

                    <div className="Tournament__painters">
                        {this.paintersArr.map((painter) =>
                            <PainterTournamentListItem key={painter['name']} tournament={this.tournamentObj.name} details={painter} />
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Tournament;
