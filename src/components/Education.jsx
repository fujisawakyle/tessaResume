import React, { Component } from 'react';

const style = {
  infoText: {
    fontSize: '0.7em',
    textAlign: 'left',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  icon: {
    fontSize: '0.5em',
    lineHeight: '8px',
    padding: '4px'
  }
};

let MSinfo, BAinfo, YTTinfo, TEFLinfo, SAinfo;

let data = {
  MS: {
    abb: "MS",
    title: "Health and Strategic Communication",
    subtitle: "Masters of Science, Chapman University",
    date: "August 2017 - May 2019",
    description1: "Advisor: Jennifer L. Bevan, M.A., Ph.D", 
    description2: "This program has a strong focus on theoretical application, quantitative study design and execution, and providing evidence-based recommendations for communication the health context. I conducted theory-based communication research and developed applied communication materials, all related to meat reduction promotion and dietary changes."
  },
  YTT: {
    abb: "YTT",
    title: "200-hour Yoga Teacher Training",
    subtitle: "Himalayan Yogini",
    date: "October 2019",
    description1: "Learned the basics of traditional Hatha yoga, including history, philosophy, and correct postures and adjustments. Practiced both yoga and meditation numerous hours daily, and practiced instructing with other teacher trainers. Nepal is also an incredibly destination and I recommend it to all interested in global travel.", 
  },
  TEFL: {
    abb: "TEFL",
    title: "Teaching English as a Foreign Language",
    subtitle: "International TEFL Academy",
    date: "December 2019 - Current",
    description1: "Currently taking a course in teaching English as a foreign/second language. Covers instruction for individuals and groups, based on youth and adult learning theory and best practice."
  },
  BA: {
    abb: "BA",
    title: "Communication Studies",
    subtitle:"Bachelor of Arts, Chapman University",
    date:"January 2013 - May 2015",
    description1: "Accompanied with an English minor, my undergraduate degree prepared me as a writer, an oral communicator, and a blossoming researcher in the social sciences."
  },
  SA: {
    abb: "SA",
    title:"Study Abroad",
    subtitle:"Bachelor of Arts, University of Otago",
    date:"June 2014 - November 2014",
    description1:"Lived abroad for approximately six months in the coastal college town of Dunedin, wherein I studied english, philosophy, and global communication. I also gained trust in humanity through invaluable experiences such as hitch-hiking, couch-surfing, and backpacking. New Zealand is beautiful and you should go."
  }

}

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MStoggle: false,
      BAtoggle: false,
      YTTtoggle: false,
      TEFLinfo: false,
      SAinfo: false
    };
  }
  MSClick = () => {
    this.setState({
      MStoggle: !this.state.MStoggle
    });
  };

  BAClick = () => {
    this.setState({
      BAtoggle: !this.state.BAtoggle
    });
  };

  YTTClick = () => {
    this.setState({
      YTTtoggle: !this.state.YTTtoggle
    });
  };

  TEFLClick = () => {
    this.setState({
      TEFLtoggle: !this.state.TEFLtoggle
    });
  };

  SAClick = () => {
    this.setState({
      SAtoggle: !this.state.SAtoggle
    });
  };

  renderExpanded = (abb, title, subtitle, date, description1, description2) => {
    let click = abb + "Click";
    return (
      <div>
        <h2 className="title is-4">{title}</h2>
        <h3 className="subtitle is-5" style={{ lineHeight: "0.9" }}>
          {subtitle}
          <br />
          <span style={{ fontSize: "15px" }}>
            {date}
          </span>
          <span>
            <br />
            <i onClick={this[click]} className="fa fa-angle-up" style={{ fontSize: "2rem" }} />
            <br />
            <ul style={{ lineHeight: "1" }}>
              <li style={style.infoText}>
                {description1}
              </li>
              <br/>
              <li style={style.infoText}>
                {description2}
              </li>
            </ul>
          </span>
        </h3>
      </div>
    )
  }

  renderCollapsed = (abb, title, subtitle, date) => {
    let click =  abb + "Click";
    return (
      <div>
        <h2 className="title is-4">{title}</h2>
        <h3 className="subtitle is-5" style={{ lineHeight: "0.9" }}>
          {subtitle} <br />
          <span style={{ fontSize: "15px" }}>
            {date}
          </span>
          <span>
            <br />
            <i onClick={this[click]} className="fa fa-angle-down" style={{ fontSize: "2rem" }} />
          </span>
        </h3>
      </div>
    )
  }

  renderAccordion = (abb) => {
    let toggle = abb + "toggle";

    if (this.state[toggle]) {
      return (
        this.renderExpanded(data[abb].abb, data[abb].title, data[abb].subtitle, data[abb].date, data[abb].description1, data[abb].description2)
      );
    } else {
      return (
        this.renderCollapsed(data[abb].abb, data[abb].title, data[abb].subtitle, data[abb].date)
      );
    }
  }

  render() {
    MSinfo = this.renderAccordion(data.MS.abb);
    YTTinfo = this.renderAccordion(data.YTT.abb);
    TEFLinfo = this.renderAccordion(data.TEFL.abb);
    BAinfo = this.renderAccordion(data.BA.abb);
    SAinfo = this.renderAccordion(data.SA.abb);
    
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title is-2">Education</h1>
          {MSinfo}
          <br />
          {YTTinfo}
          <br />
          {TEFLinfo}
          <br />
          {BAinfo}
          <br />
          {SAinfo}
          <br />
          <h1 className="title is-2">Next</h1>
          {SAinfo}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Education;
