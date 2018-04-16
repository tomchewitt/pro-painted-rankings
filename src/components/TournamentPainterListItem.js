import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { humanReadableName } from './Utils';

class TournamentPainterListItem extends Component {
    componentWillMount() {
        this.name = humanReadableName(this.props.details.name);
    }

    goToTournament = () => {
        this.setState({'activeTab': 'Tabs'});
        this.props.history.push(`/tournaments/${this.props.details.name}`);
    }

    render() {
        return (
            <div className="TournamentPainterListItem" onClick={this.goToTournament}>
                <span className="TournamentPainterListItem__name">{this.name}</span>
                <span className="TournamentPainterListItem__position">{this.props.details.position}</span>
            </div>
        );
    }
}

export default withRouter(TournamentPainterListItem);
