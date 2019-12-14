import React, { Component } from 'react';

const style = {
  infoText: {
    fontSize: '0.7em',
    textAlign: 'left',
    paddingLeft: '22%',
    paddingRight: '22%'
  },
  icon: {
    fontSize: '0.5em',
    lineHeight: '8px',
    padding: '4px'
  }
};

let AEinfo, MFAinfo, THLinfo;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      THLtoggle: false,
      AEtoggle: false,
      MFAtoggle: false
    };
  }
  THLClick = () => {
    this.setState({
      THLtoggle: !this.state.THLtoggle
    });
  };

  AEClick = () => {
    this.setState({
      AEtoggle: !this.state.AEtoggle
    });
  };
  MFAClick = () => {
    this.setState({
      MFAtoggle: !this.state.MFAtoggle
    });
  };
  render() {
    if (this.state.THLtoggle) {
      THLinfo = (
        <div>
          <h2 className="title is-4">The Humane League</h2>
          <h3 className="subtitle is-5">
            Web Developer Intern
            <span>
              <br />
              <i onClick={this.THLClick} className="fa fa-angle-up" />
              <br />
              <ul>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Developed
                  websites based on team designer’s mock-ups.
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Built an
                  internal tool for tracking clicks on mailto links with Google
                  Analytics.
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Added a new
                  social media feature to the custom modular site builder.
                </li>
              </ul>
            </span>
          </h3>
        </div>
      );
    } else {
      THLinfo = (
        <div>
          <h2 className="title is-4">The Humane League</h2>
          <h3 className="subtitle is-5">
            Web Developer Intern
            <span>
              <br />
              <i onClick={this.THLClick} className="fa fa-angle-down" />
            </span>
          </h3>
        </div>
      );
    }
    if (this.state.AEtoggle) {
      AEinfo = (
        <div>
          <h2 className="title is-4">Animal Equality</h2>
          <h3 className="subtitle is-5">
            Investigations Associate
            <span>
              <br />
              <i onClick={this.AEClick} className="fa fa-angle-up" />
              <br />
              <ul>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Edited
                  Investigation videos for government officials.
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Assisted with
                  production and implementation of{' '}
                  <span>
                    <a
                      href="http://ianimal360.com/chickens/tour/index.html"
                      target="blank"
                    >
                      iAnimal 360 Virtual Tour
                    </a>
                  </span>.
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Assisted with
                  testing for Android and Gear VR iAnimal mobile application.
                </li>
              </ul>
            </span>
          </h3>
        </div>
      );
    } else {
      AEinfo = (
        <div>
          <h2 className="title is-4">Animal Equality</h2>
          <h3 className="subtitle is-5">
            Investigations Associate
            <span>
              <br />
              <i onClick={this.AEClick} className="fa fa-angle-down" />
            </span>
          </h3>
        </div>
      );
    }
    if (this.state.MFAtoggle) {
      MFAinfo = (
        <div>
          <h2 className="title is-4">Mercy For Animals</h2>
          <h3 className="subtitle is-5">
            Investigations and Research Associate
            <span>
              <br />
              <i onClick={this.MFAClick} className="fa fa-angle-up" />
              <br />
              <ul>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Edited
                  Investigation videos for law enforcement, animal welfare
                  experts, and media outlets
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Conducted
                  background research connecting farms to distribution centers
                  and corporations.
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Organized the
                  investigations file database for more efficient referencing
                </li>
                <li style={style.infoText}>
                  <i style={style.icon} className="fa fa-circle" />Planned press
                  conference events.
                </li>
              </ul>
            </span>
          </h3>
        </div>
      );
    } else {
      MFAinfo = (
        <div>
          <h2 className="title is-4">Mercy For Animals</h2>
          <h3 className="subtitle is-5">
            Investigations and Research Associate
            <span>
              <br />
              <i onClick={this.MFAClick} className="fa fa-angle-down" />
            </span>
          </h3>
        </div>
      );
    }
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title is-2">Work History</h1>
          {THLinfo}
          <br />
          {AEinfo}
          <br />
          {MFAinfo}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Work;
