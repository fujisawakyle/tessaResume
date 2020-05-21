import React, { Component } from 'react';

const style = {
  infoText: {
    fontSize: '14px',
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: '5%',
    paddingRight: '5%',
    textIndent: '-1.4em'
  },
  icon: {
    fontSize: '0.5em',
    lineHeight: '8px',
    padding: '4px'
  }
};

let PAinfo;

class PersonalAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  renderExpandedPA = () => {
    return (
      <div>
        <li style={style.infoText}>
          Organized, punctual, and dependable
            </li>

        <li style={style.infoText}>
          Passionate about using skills to conduct meaningful work in social services, environmental protection, and animal welfare
            </li>

        <li style={style.infoText}>
          Natural leader and identifier of team member strengths
            </li>

        <li style={style.infoText}>
          Always down to socialize and connect
            </li>

        <li style={style.infoText}>
          Creative critical thinker who is always looking for ways to improve current systems
            </li>

        <li style={style.infoText}>
          Meditator, yogi, and avid doodler
            </li>

        <li style={style.infoText}>
          Hilarious, optimistic, and pretty fun
            </li>
      </div>
    )
  }

  render() {
    PAinfo = this.renderExpandedPA();

    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title is-2">Personal Attributes</h1>
          {PAinfo}
        </div>
      </div>
    );
  }

}

export default PersonalAttributes;
