import React, { Component } from 'react';

const style = {
  infoText: {
    fontSize: '14px',
    fontWeight: '300',
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

let MSinfo, BAinfo, YTTinfo, TEFLinfo, SAinfo, PUBinfo, PRESinfo, GRANTinfo, AWARDinfo;

let data = {
  MS: {
    abb: "MS",
    title: "Health and Strategic Communication",
    subtitle: "Masters of Science, Chapman University",
    date: "August 2017 - May 2019",
    description1: "Advisor: Jennifer L. Bevan, M.A., Ph.D",
    description2: `This program has a strong focus on theoretical application, quantitative study design and execution, and providing evidence-based recommendations for communication the health context. I conducted theory-based communication research and developed applied communication materials, all related to meat reduction promotion and dietary changes.`
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
    subtitle: "Bachelor of Arts, Chapman University",
    date: "January 2013 - May 2015",
    description1: "Accompanied with an English minor, my undergraduate degree prepared me as a writer, an oral communicator, and a blossoming researcher in the social sciences."
  },
  SA: {
    abb: "SA",
    title: "Study Abroad",
    subtitle: "Bachelor of Arts, University of Otago",
    date: "June 2014 - November 2014",
    description1: "Lived abroad for approximately six months in the coastal college town of Dunedin, wherein I studied english, philosophy, and global communication. I also gained trust in humanity through invaluable experiences such as hitch-hiking, couch-surfing, and backpacking. New Zealand is beautiful and you should go."
  },
  PUB: {
    abb: "PUB",
    title: "Publications",
  },
  PRES: {
    abb: "PRES",
    title: "Presentations"
  },
  GRANT: {
    abb: "GRANT",
    title: "Grants",
    grant1: "Graduate Creative/Scholarly Grant Recipient from the Office of Graduate Studies at Chapman University. (Spring 2019). Awarded for: Relational Turbulence and Family Caregiving.",
    grant2: "Graduate Student Travel Grant (Spring 2019). Awarded for: Applying the health belief model to diet change. Presentation of competitively accepted paper at 2019 Western State Communication Association Conference in Seattle, WA.",
    grant3: "Graduate Creative/Scholarly Grant Recipient from the Office of Graduate Studies at Chapman University. (Winter 2018). Awarded for: Leveraging masculinity messages in meat reduction campaigns targeting college-aged males.",
    grant4: "Graduate Student Travel Grant. (Fall 2018). Awarded for: College student disclosure about prescription stimulant misuse: The relationships of motives, stigma, and relevance to peer and self disclosure. Presentation of competitively accepted paper at 2018 National Communication Association Conference in Salt Lake City, UT.",
    grant5: "Graduate Creative/Scholarly Grant Recipient from the Office of Graduate Studies at Chapman University. (Spring 2018). Awarded for: Family caregiving communication patterns.",
    grant6: "Graduate Creative/Scholarly Grant Recipient from the Office of Graduate Studies at Chapman University. (Spring 2018). Awarded for: Applying the health belief model to diet change."
  },
  AWARD: {
    abb: "AWARD",
    title: "Awards",
    award1: "Jennifer L. Bevan Outstanding Graduate Student Award. Chapman University, Spring 2019.",
    award2: "Nominee - James L. Doti Outstanding Graduate Student Award. Chapman University, Spring 2019.",
    award3: "Full tuition fellowship. Chapman University, 2017-2019.",
    award4: "OC Presidential Volunteer Service Award for internship hours. Bolsa Chica Conservancy, Spring 2015.",
    award5: "Dean’s Honors List. Chapman University, 2013 - 2015.",
    award6: "Magna Cum Laude. Chapman University, 2013 - 2015.",
    award7: "Lambda Pi Eta Communication Honors Society. Chapman University, 2014-2015.",
  }

}

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MStoggle: false,
      BAtoggle: false,
      YTTtoggle: false,
      TEFLtoggle: false,
      SAtoggle: false,
      PUBtoggle: false,
      PREStoggle: false,
      GRANTtoggle: false,
      AWARDtoggle: false,
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
  PUBClick = () => {
    this.setState({
      PUBtoggle: !this.state.PUBtoggle
    });
  };
  PRESClick = () => {
    this.setState({
      PREStoggle: !this.state.PREStoggle
    });
  };

  GRANTClick = () => {
    this.setState({
      GRANTtoggle: !this.state.GRANTtoggle
    });
  };

  AWARDClick = () => {
    this.setState({
      AWARDtoggle: !this.state.AWARDtoggle
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
              <br />
              <li style={style.infoText}>
                {description2}
              </li>
            </ul>
          </span>
        </h3>
      </div>
    )
  }

  renderExpandedPUB = (abb) => {
    let click = abb + "Click";
    return (
      <div>
        <h2 style={{ marginBottom: "0" }} className="title is-4">{data[abb].title}</h2>

        <span>
          <i onClick={this[click]} className="fa fa-angle-up" style={{ fontSize: "2rem" }} />
          <br />
          <ul style={{ lineHeight: "1" }}>
            <li style={style.infoText}>
              <b>Urbanovich, T.</b>, & Bevan, J. L. (in press). Promoting environmental behaviors: Applying the health belief model to diet change. <i>Journal of Environmental Communication</i>. doi:10.1080/17524032.2019.1702569
            </li>
            <br />
            <li style={style.infoText}>
              Tukachinsky, R., Brogan-Freitas, E., & <b>Urbanovich, T.</b>  (2019). Overcoming ingroup favoritism in parasocial contact to promote support for public health policies: The role of narrator perspective and self-disclosure. <i>International Journal of Communication, 13, 4553–4571</i>. Retrieved from <a href="https://ijoc.org/index.php/ijoc/article/view/12379">https://ijoc.org/index.php/ijoc/article/view/12379</a>

            </li>
            <br />
            <li style={style.infoText}>
              Bevan, J. L., <b>Urbanovich, T.</b>, & Vahid, M. (2019). Family communication patterns, received social support, and quality of care in the family caregiving context. <i>Western Journal of Communication</i>. doi:10.1080/10570314.2019.1686534

            </li>
            <br />
            <li style={style.infoText}>
            Szejda, K., & <b>Urbanovich, T.</b> (2019). <i>Meat cultivation:</i> Embracing the science of nature. Project Report. Washington, DC: The Good Food Institute. Retrieved from <a href="https://www.gfi.org/files/GFI-Draft-Meat-Cultivation-Report-v8.pdf">https://www.gfi.org/files/GFI-Draft-Meat-Cultivation-Report-v8.pdf</a>
            </li>
          </ul>
        </span>

      </div>
    )
  }

  renderExpandedPRES = (abb) => {
    let click = abb + "Click";
    return (
      <div>
        <h2 style={{ marginBottom: "0" }} className="title is-4">{data[abb].title}</h2>

        <span>
          <i onClick={this[click]} className="fa fa-angle-up" style={{ fontSize: "2rem" }} />
          <br />
          <ul style={{ lineHeight: "1" }}>
            <li style={style.infoText}>
            Ball, H., Bevan, J., Craw, E., & <b>Urbanovich, T.</b> (February, 2020). Romantic Partner Interference and Psychological Reactance in the Context of Caregiving for an Aging Family Member. Paper competitively accepted for presentation at the annual meeting of the Western States Communication Association, Denver, CO.
            </li>
            <br />
            <li style={style.infoText}>
            Bevan, J. L., & <b>Urbanovich, T.</b> (November, 2019). Expanding the scope of the family caregiver communication typology: Relationships with caregiver quality of life. Paper competitively accepted for presentation at the annual meeting of the National Communication Association, Baltimore, MD.

            </li>
            <br />
            <li style={style.infoText}>
            <b>Urbanovich, T.</b>, & Bevan, J. L. (February, 2019). Applying the health belief model to diet change. Paper competitively accepted for presentation at the Health Communication Division of the 2019 Western States Communication Association conference, Seattle, WA.
            </li>
            <br />
            <li style={style.infoText}>
            <b>Urbanovich, T.</b>, Atchekzai, J., & LaBelle, S. (2017).  College student disclosure about prescription stimulant misuse: The relationships of motives, stigma, and relevance to peer and self disclosure. Paper competitively accepted for presentation at the Health Communication Division of the 2018 National Communication Association, Salt Lake City, UT.
            </li>
          </ul>
        </span>

      </div>
    )
  }

  renderExpandedGRANT = (abb) => {
    let click = abb + "Click";
    return (
      <div>
        <h2 style={{ marginBottom: "0" }} className="title is-4">{data.GRANT.title}</h2>

        <span>
          <i onClick={this[click]} className="fa fa-angle-up" style={{ fontSize: "2rem" }} />
          <br />
          <ul style={{ lineHeight: "1" }}>
            <li style={style.infoText}>
              {data.GRANT.grant1}
            </li>
            <br />
            <li style={style.infoText}>
              {data.GRANT.grant2}
            </li>
            <br />
            <li style={style.infoText}>
              {data.GRANT.grant3}
            </li>
            <br />
            <li style={style.infoText}>
              {data.GRANT.grant4}
            </li>
            <br />
            <li style={style.infoText}>
              {data.GRANT.grant5}
            </li>
            <br />
            <li style={style.infoText}>
              {data.GRANT.grant6}
            </li>
          </ul>
        </span>

      </div>
    )
  }

  renderExpandedAWARD = (abb) => {
    let click = abb + "Click";
    return (
      <div>
        <h2 style={{ marginBottom: "0" }} className="title is-4">{data[abb].title}</h2>

        <span>
          <i onClick={this[click]} className="fa fa-angle-up" style={{ fontSize: "2rem" }} />
          <br />
          <ul style={{ lineHeight: "1" }}>
            <li style={style.infoText}>
              {data.AWARD.award1}
            </li>
            <br />
            <li style={style.infoText}>
              {data.AWARD.award2}
            </li>
            <br />
            <li style={style.infoText}>
              {data.AWARD.award3}
            </li>
            <br />
            <li style={style.infoText}>
              {data.AWARD.award4}
            </li>
            <br />
            <li style={style.infoText}>
              {data.AWARD.award5}
            </li>
            <br />
            <li style={style.infoText}>
              {data.AWARD.award6}
            </li>
          </ul>
        </span>

      </div>
    )
  }

  renderCollapsed = (abb, title, subtitle, date) => {
    let click = abb + "Click";
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
  renderCollapsedTitleOnly = (abb, title) => {
    let click = abb + "Click";
    return (
      <div>
        <h2 style={{ marginBottom: "0" }} className="title is-4">{title}</h2>
        <i onClick={this[click]} className="fa fa-angle-down" style={{ fontSize: "2rem" }} />
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

  renderAccordionCustom = (abb) => {
    let toggle = abb + "toggle";

    if (this.state[toggle]) {
      if (abb === "PUB") {

        return (
          this.renderExpandedPUB(data[abb].abb)
        );
      }
      else if (abb === "PRES") {
        return (
          this.renderExpandedPRES(data[abb].abb)
        );
      }
      else if (abb === ("GRANT")) {
        return (
          this.renderExpandedGRANT(data[abb].abb)
        )
      }
      else if (abb === "AWARD") {
        return (
          this.renderExpandedAWARD(data[abb].abb)
        )
      }
    } else {
      return (
        this.renderCollapsedTitleOnly(data[abb].abb, data[abb].title)
      );
    }
  }

  // renderAccordionGrant = (abb) => {
  //   let toggle = abb + "toggle";

  //   if (this.state[toggle]) {
  //     return (
  //       this.renderExpandedGRANT(data[abb].abb)
  //     );
  //   } else {
  //     return (
  //       this.renderCollapsedTitleOnly(data[abb].abb, data[abb].title)
  //     );
  //   }
  // }



  render() {
    MSinfo = this.renderAccordion(data.MS.abb);
    YTTinfo = this.renderAccordion(data.YTT.abb);
    TEFLinfo = this.renderAccordion(data.TEFL.abb);
    BAinfo = this.renderAccordion(data.BA.abb);
    SAinfo = this.renderAccordion(data.SA.abb);
    PUBinfo = this.renderAccordionCustom(data.PUB.abb);
    PRESinfo = this.renderAccordionCustom(data.PRES.abb); 
    GRANTinfo = this.renderAccordionCustom(data.GRANT.abb);
    AWARDinfo = this.renderAccordionCustom(data.AWARD.abb);

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
          <h1 className="title is-2">Distinctions</h1>
          {PUBinfo}
          <br />
          {PRESinfo}
          <br />
          {GRANTinfo}
          <br />
          {AWARDinfo}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Education;
