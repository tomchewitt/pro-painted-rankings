import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends Component {
    goToAbout = () => {
        this.props.history.push(`/about`);
    }

    render() {
        return (
            <div className="Footer">
                <footer>
                    <button className="Footer__button" onClick={this.goToAbout}>About</button> | Site by: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/BattleRoll">BattleRoll</a>
                </footer>
            </div>
        );
    }
};

export default withRouter(Footer);
