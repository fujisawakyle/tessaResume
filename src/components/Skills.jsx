import React, { Component } from 'react';

const style = {
  infoText: {
    fontSize: '14px',
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  icon: {
    fontSize: '0.5em',
    lineHeight: '2.2',
    padding: '4px'
  }
};

class Skills extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (

      // <div className="columns is-centered is-text-centered small-centered">
      //     {/* <div className="column is-1"></div> */}
      //     <div className="column is-offset-1 is-4 is-centered is-text-centered">
      //       <Education />
      //     </div>
      //     <div className="column has-text-centered">
      //       <Work />
      //     </div>
          
      //   </div>

      <div className="has-text-centered is-12">
        <div className="columns has-text-left">
          <div className="column is-4">
          <h1 className="title is-2 has-text-centered">Skills</h1>
            <ul>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Advanced in SPSS and Microsoft Office Suite</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Proficient in Photoshop, iMovie, InDesign, MySQL, HTML, and WordPress</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Proficient in reading and writing Spanish</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Experienced professional copyeditor</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Experienced global traveler</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Experienced focus group facilitator</li>
            </ul>
          </div>
          <div className="column is-4">
          <h1 className="title is-2 has-text-centered">Personal Attributes</h1>
            <ul>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Organized, punctual, and dependable</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Passionate about using skills to conduct meaningful work in social services, environmental protection, and animal welfare</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Natural leader and lover delegating tasks by team member strengths</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Always down to socialize and connect</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Creative critical thinker who is always looking for ways to improve current systems</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Meditator, yogi, and avid doodler</li>
              <li style={style.infoText}><i style={style.icon} className="fa fa-circle" /> Hilarious, optimistic, and pretty fun</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Skills;
