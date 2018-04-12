import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    goToPainters = () => {
        this.props.history.push(`/painters/`);
    }

    goToTournaments = () => {
        this.props.history.push(`/tournaments/`);
    }

    render() {
        return (
            <div className="Header">
                <header className="Header__inner">
                    <h1 className="Header__logo">The Pro Painted Rankings</h1>

                    <div className="Tabs">
                        <span onClick={this.goToPainters} className="Tabs__tab">PAINTERS</span>
                        <span onClick={this.goToTournaments} className="Tabs__tab">TOURNAMENTS</span>
                    </div>
                </header>
            </div>
        );
    }
};

export default withRouter(Header);
