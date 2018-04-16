import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { humanReadableName } from './Utils';

class PainterTournamentListItem extends Component {
    componentWillMount() {
        this.tournamentPosition = this.props.details.tournaments.filter((tournament) => {
            return tournament['name'] === this.props.tournament;
        })[0]['position'];

        this.name = humanReadableName(this.props.details.name);
    }

    goToPainter = () => {
        this.setState({'activeTab': 'Tabs'});
        this.props.history.push(`/painters/${this.props.details['name']}`);
    }

    render() {
        return (
            <div className="PainterTournamentListItem" onClick={this.goToPainter}>
                <span className="PainterTournamentListItem__name">{this.name}</span>
                <span className="PainterTournamentListItem__position">{this.tournamentPosition}</span>
            </div>
        );
    }
}

export default withRouter(PainterTournamentListItem);
