import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { humanReadableName } from './Utils';

class PainterListItem extends Component {
    componentWillMount() {
        this.name = humanReadableName(this.props.painterName);
    }

    goToPainter = () => {
        this.setState({'activeTab': 'Tabs'});
        this.props.history.push(`/painters/${this.props.painterName}`);
    }

    render() {
        return (
            <div className="PainterListItem">
                <div className="PainterListItem__inner" onClick={this.goToPainter}>
                    <span className="column column--position">{this.props.details['position']}</span>
                    <span className="column column--name">{this.name}</span>
                    <span className="column column--score">{this.props.details.score}</span>
                </div>
            </div>
        );
    }
}

export default withRouter(PainterListItem);
