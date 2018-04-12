import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { humanReadableName } from './Utils';

class TournamentListItem extends Component {
    componentWillMount() {
        this.name = humanReadableName(this.props.details.name);
    }

    goToTournament = () => {
        this.setState({'activeTab': 'Tabs'});
        this.props.history.push(`/tournaments/${this.props.details.name}`);
    }

    render() {
        return (
            <div className="TournamentListItem" onClick={this.goToTournament}>
                <span className="TournamentListItem__name">{this.name}</span>
                <span className="TournamentListItem__painters">{this.props.details.painters}</span>
            </div>
        );
    }
}

export default withRouter(TournamentListItem);
