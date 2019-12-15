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

let GTAinfo, CRAinfo, CSAIinfo, CRFinfo,
  SPCinfo, DAinfo, OIinfo, CIinfo, VCinfo, RAinfo;

let data = {
  CSAI: {
    abb: "CSAI",
    title: "Communication Studies Adjunct Instructor",
    subtitle: "Crafton Hills College, California",
    date: "Jun. 2019 – Aug. 2019",
    description1: "Utilizing adult learning theory, prepared and facilitated discussion-based class lectures, activities, and assignments to encourage active learning and student engagement for a summer Interpersonal Communication course.", 
    description2: "COMMST 111 - Interpersonal Communication"
  },
  GTA: {
    abb: "GTA",
    title: "Graduate Teaching Associate",
    subtitle: "Chapman University, California",
    date: "Aug. 2017 - May 2019",
    description1: "Independently managed two Business Communication sections per semester. Utilizing adult learning theory, prepared and facilitated discussion-based class lectures, activities, and assignments to encourage active learning and student engagement.",
    description2: "COM 219 - Business and Professional Communication for Business Majors, COM 310 - Business and Professional Communication"
  },
  CRA: {
    abb: "CRA",
    title: "Consumer Research Assistant",
    subtitle: "The Good Food Institute, Remote",
    date: "Jan. 2019 – Aug. 2019",
    description1: "Designed and conducted original research alongside Senior Research Scientist. Utilizing SPSS for data analysis, interpreted and communicated results into accessible and digestible language for resources and communication materials distributed to stakeholders and the general public. Reviewed previously published research to develop overview resources for researchers in the field."
  },
  CRF: {
    abb: "CRF",
    title: "Consumer Research Fellow",
    subtitle: "The Good Food Institute, Remote",
    date: "Apr. 2018 – Dec. 2018",   	
    description1: "Collaborated with GFI’s Senior Research Scientist to develop a research guide for promotion of meat reduction, plant-based diets, and plant-based meat, including useful theories and measures. Conducted and contributed to state-of-the-literature white paper to review research relevant to plant-based meat and to suggest evidence-based communication best practice for researchers and marketers. Designed and develop communication study to test messages and communication interventions that may increase consumer acceptance of plant-based meat."
  },
  SPC: {
    abb: "SPC",
    title: "Special Projects Coordinator",
    subtitle: "Mercy For Animals, Remote",
    date: "Mar. 2017- Apr. 2017",	
    description1: "Oversaw the organization's vegetarian advocacy Facebook advertising campaigns, including results-driven management of spending, performance, and content creation for accounts in four different countries. Assisted in overseeing and expanding the organization's volunteer base through Facebook networking and email blasts."
  },
  DA: {
    abb: "DA",
    title: "Development Assistant",
    subtitle: "Mercy For Animals, California",
    date: "May 2016 – Mar. 2017",
    description1: "Managed gift processing workflow and processed incoming gift-related communication and donations, including their documentation, correct tracking, allocation, and timely acknowledgment. Regularly updated acknowledgment letters. Developed multiple SOPs to streamline department workflow, including tracking processes, systems manual, and design improvements of donor database reporting and email preferences."
  },
  OI: {
    abb: "OI",
    title: "Outreach Intern",
    subtitle: "People for the Ethical Treatment of Animals, Traveling",
    date: "Jun. 2015 – Aug. 2015",              	
    description1: "Promoted animal welfare through empathy-building, narrative-based VR technology. Traveled to 14 U.S states and distributed over 2,000 recipe books. Represented world's largest animal rights organization by discussing its mission with over 1,200 US residents, maintaining a positive and professional composure in the face of the sensitive issue of animal cruelty."
  },
  CI: {
    abb: "CI",
    title: "Communications Intern",
    subtitle: "Bolsa Chica Conservancy, California",
    date: "Jan. 2015 – Jun. 2015",
    description1: "Created content for and maintained the Conservancy's online presence, including Facebook, Twitter, Instagram, WordPress, and numerous promotional videos.  Co-wrote award-winning recognition application. Developed content for newsletters, press releases, and website pages."
  },
  VC: {
    abb: "VC",
    title: "Vocal Coach",
    subtitle: "With Song, California",
    date: "Apr. 2011- Jun. 2018",
    description1: "Scheduled and coached individual and group vocal and music lessons to students of all ages, from toddlers to adults. Taught sight-reading, ear-training, harmonies, theory, and performance techniques. Cultivated a warm environment that encouraged confidence, positivity, and enthusiasm for the freedom of voice."
  },
  RA: {
    abb: "RA",
    title: "Research Assistant",
    subtitle: "Chapman University, California",
    date: "Aug. 2012 – Dec. 2012",
    description1: "Conducted content analysis under Drs. Veronica Hefner and Riva Tukachinsky for Entertainment Industries Council examining the depiction of mental health in popular fiction television. Ensured intercoder reliability by adhering to and expanding codebook as necessary."
  }
}

class PastPositions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CSAItoggle: false,
      GTAtoggle: false,
      CRAtoggle: false,
      CRFtoggle: false,
      SPCtoggle: false,
      DAtoggle: false,
      IOtoggle: false,
      CItoggle: false,
      VCtoggle: false,
      RAtoggle: false
    };
  }
  CSAIClick = () => {
    this.setState({
      CSAItoggle: !this.state.CSAItoggle
    });
  };

  GTAClick = () => {
    this.setState({
      GTAtoggle: !this.state.GTAtoggle
    });
  };
  CRAClick = () => {
    this.setState({
      CRAtoggle: !this.state.CRAtoggle
    });
  };
  CRFClick = () => {
    this.setState({
      CRFtoggle: !this.state.CRFtoggle
    });
  };
  SPCClick = () => {
    this.setState({
      SPCtoggle: !this.state.SPCtoggle
    });
  };
  DAClick = () => {
    this.setState({
      DAtoggle: !this.state.DAtoggle
    });
  };
  OIClick = () => {
    this.setState({
      OItoggle: !this.state.OItoggle
    });
  };
  CIClick = () => {
    this.setState({
      CItoggle: !this.state.CItoggle
    });
  };
  VCClick = () => {
    this.setState({
      VCtoggle: !this.state.VCtoggle
    });
  };
  RAClick = () => {
    this.setState({
      RAtoggle: !this.state.RAtoggle
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
    CSAIinfo = this.renderAccordion(data.CSAI.abb);
    GTAinfo = this.renderAccordion(data.GTA.abb);
    CRAinfo = this.renderAccordion(data.CRA.abb);
    CRFinfo = this.renderAccordion(data.CRF.abb);
    SPCinfo = this.renderAccordion(data.SPC.abb);
    DAinfo = this.renderAccordion(data.DA.abb);
    OIinfo = this.renderAccordion(data.OI.abb);
    CIinfo = this.renderAccordion(data.CI.abb);
    VCinfo = this.renderAccordion(data.VC.abb);
    RAinfo = this.renderAccordion(data.RA.abb);
    // if (this.state.GTAtoggle) {
    //   GTAinfo = (
    //     <div>
    //       <h2 className="title is-4">Animal Equality</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations Associate
    //         <span>
    //           <br />
    //           <i onClick={this.GTAClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for government officials.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Assisted with
    //               production and implementation of{' '}
    //               <span>
    //                 <a
    //                   href="http://ianimal360.com/chickens/tour/index.html"
    //                   target="blank"
    //                 >
    //                   iAnimal 360 Virtual Tour
    //                 </a>
    //               </span>.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Assisted with
    //               testing for Android and Gear VR iAnimal mobile application.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   GTAinfo = (
    //     <div>
    //       <h2 className="title is-4">Animal Equality</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations Associate
    //         <span>
    //           <br />
    //           <i onClick={this.GTAClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.CRAtoggle) {
    //   CRAinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.CRAClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   CRAinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.CRAClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.CRFtoggle) {
    //   CRFinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.CRFClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   CRFinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.CRFClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.SPCtoggle) {
    //   SPCinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.SPCClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   SPCinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.SPCClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.DAtoggle) {
    //   DAinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.DAClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   DAinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.DAClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.OItoggle) {
    //   OIinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.OIClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   OIinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.OIClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.CItoggle) {
    //   CIinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.CIClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   CIinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.CIClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.VCtoggle) {
    //   VCinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.VCClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   VCinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.VCClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    // if (this.state.RAtoggle) {
    //   RAinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.RAClick} className="fa fa-angle-up" />
    //           <br />
    //           <ul>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Edited
    //               Investigation videos for law enforcement, animal welfare
    //               experts, and media outlets
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Conducted
    //               background research connecting farms to distribution centers
    //               and corporations.
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Organized the
    //               investigations file database for more efficient referencing
    //             </li>
    //             <li style={style.infoText}>
    //               <i style={style.icon} className="fa fa-circle" />Planned press
    //               conference events.
    //             </li>
    //           </ul>
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // } else {
    //   RAinfo = (
    //     <div>
    //       <h2 className="title is-4">Mercy For Animals</h2>
    //       <h3 className="subtitle is-5">
    //         Investigations and Research Associate
    //         <span>
    //           <br />
    //           <i onClick={this.RAClick} className="fa fa-angle-down" />
    //         </span>
    //       </h3>
    //     </div>
    //   );
    // }
    return (
      <div>
        <div className="has-text-centered">
          <h1 className="title is-2">Past Positions</h1>
          {CSAIinfo}
          <br />
          {GTAinfo}
          <br />
          {CRAinfo}
          <br />
          {CRFinfo}
          <br />
          {SPCinfo}
          <br />
          {DAinfo}
          <br />
          {OIinfo}
          <br />
          {CIinfo}
          <br />
          {VCinfo}
          <br />
          {RAinfo}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default PastPositions;
