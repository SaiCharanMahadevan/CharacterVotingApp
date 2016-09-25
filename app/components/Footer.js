import React, { Component } from 'react';
import { Link } from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterAction';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }

  componentWillMount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardCharacters = this.state.characters.map((character) => {
      return (
        <li key={character.characterId}>
          <Link to={`/characters/${character.characterId}`}>
            <img className='thumb-md' src={`http://image.eveonline.com/Character/${character.characterId}_128.jpg`}/>
          </Link>
        </li>
      )
    });

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <h3 className="lead">
                <strong>Information</strong> and <strong>Copyright</strong>
                <p>
                  Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> and Flux architecture with server-side rendering
                </p>
              </h3>
            </div>
            <div className="col-sm-7 hidden-xs">
              <h3 className="lead"><strong>LeaderBoard</strong> Top 5 Characters</h3>
              <ul className="list-inline">
                {leaderboardCharacters}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}