import React, { Component } from 'react';

const style = {
  box: {
    fontSize: '3rem'
  },
  icon: {
    paddingLeft: '0.1em'
  }
};

class Info extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div className="has-text-centered" style={style.box}>
        <ul>
          <li>
            <h1 style={style.box} className="title is-1">
              Tessa Raye Urbanovich <br />MS, YTT 200
            </h1>
          </li>
          <span className="icon">
            <i style={style.icon} className="fa fa-heart" />
            <i style={style.icon} className="fa fa-heart" />
            <i style={style.icon} className="fa fa-heart" />
          </span>
          {/* <li>
            <h2 className="subtitle is-4">
              <a href="https://tessaraye.me">tessaraye.me</a>
            </h2>
          </li> */}
          <li>
            <h2 className="subtitle is-4"><a href="mailto:tessa.urb@gmail.com">tessa.urb@gmail.com</a></h2>
          </li>
          <li>
            <h2 className="subtitle is-4">661.478.2106</h2>
          </li>
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Info;
