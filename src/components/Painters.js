import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import PainterListItem from './PainterListItem';

class Painters extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="Painters">
                    <div className="Painters__headers">
                        <div className="Painters__headers-inner">
                            <span className="column column--position">POSITION</span>
                            <span className="column column--name">NAME</span>
                            <span className="column column--score">SCORE</span>
                        </div>
                    </div>

                    {window.rankingsData.painters.map(painterArr =>
                        <PainterListItem key={painterArr['name']} painterName={painterArr['name']} details={painterArr} />
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Painters;
