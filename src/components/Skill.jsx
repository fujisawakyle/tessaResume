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

let SKILLinfo;

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  renderExpandedSKILL = () => {
    return (
      <div>
            <li style={style.infoText}>
            Outstanding academic and marketing research skills, covering all components of the data collection process: preparatory background information gathering, survey development and instrument design, data analysis and interpretation, and summarizing findings with useful and digestible language.
            </li>
            
            <li style={style.infoText}>
            Advanced ability to reliably conduct both qualitative and quantitative research, through interviews, focus groups, surveys, experiments, content analysis, and more.
            </li>
            
            <li style={style.infoText}>
            Advanced in SPSS and Microsoft Office Suite
            </li>
            <li style={style.infoText}>
            Proficient in Photoshop, iMovie, InDesign, MySQL, HTML, and WordPress
            </li>
            
            <li style={style.infoText}>
            Proficient in reading and writing Spanish
            </li>
            
            <li style={style.infoText}>
            Experience in professional copyediting
            </li>
            
            <li style={style.infoText}>
            Experienced global traveler
            </li>
            
            <li style={style.infoText}>
            Experience facilitating focus groups
            </li>
      </div>
    )
  }

  render() {
    SKILLinfo = this.renderExpandedSKILL();

    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title is-2">Skills</h1>
          {SKILLinfo} 
        </div>
      </div>
    );
  }

}

export default Skill;
