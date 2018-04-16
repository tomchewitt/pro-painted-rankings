import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="About">
                    <h1>Welcome to the Pro Painted Rankings!</h1>

                    <p>I decided it would be a great time to reanimate the idea of 'Painting Rankings' and host these for Age of Sigmar. You will likely be aware of the 'Gaming' Rankings hosted by Ben Curry of the Bad Dice Podcast and these rankings are done in a very similar way.</p>

                    <p>These rankings will never be as 'serious' as their gaming twin, however I feel this will be a fantastic resources to record peoples achievements, create some camaraderie, smack talk, and at the end of it – have a Painting Masters event in January each year for the top 16 hobbyists.</p>

                    <h2>Scoring:</h2>

                    <p>The max score from an event is 100 points, events need to have 60 or more players to earn the full amount, anything below this will decrease on a percentage basis. You then earn a percentage of the points available:</p>

                    <p><strong>1st Place or Judges Choice: 100%<br />
                    2nd Place: 80%<br />
                    3rd Place: 60%<br />
                    Nomination: 40%</strong></p>

                    <p>Also, because we are focusing on the hobby side of gaming, it does not matter if the event is Matched Play, Narrative, Open Play, 1 day, Doubles, or a Team Event, we will accept all results.</p>

                    <p>Please do get in touch with any questions or suggestions:</p>

                    <p>Contact me via email at <a href="mailto:propaintedpodcast@gmail.com">propaintedpodcast@gmail.com</a> or over on Twitter at <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/propainted">@propainted</a></p>
                </div>
                <Footer />
            </div>
        );
    }
};

export default About;
