import React, { Component } from 'react';
import Photo from './Photo';
import Info from './Info';
import Work from './Work';
import Education from './Education';
import Skill from './Skill';
import PersonalAttributes from './PersonalAttributes';
import References from './References';

const style = {
  flex: {
    /* display: 'flex',
    flexWrap: 'wrap', 
    textAlign: 'center',*/
  },
  box: {
    border: '1px solid black',
    padding: '30px',
    margin: '30px'
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  columns: {
    margin: '0px'
  }
};

//pull data from server and put in store

class App extends Component {
  render() {
    return (
      <div>
        {/* <div>
        <div style={style.flex}>
            <Photo />
            <div style={style.box}>
            <Info />
            </div>
        </div>
        <div style={style.flex}>
          <div style={style.box}>
          <Education />
          </div>
          <div style={style.box}>
          <Work />
          </div>
        </div>
        <div style={style.flex}>
          <div style={style.box}>
          </div>
          <div style={style.box}>
          <References />
          </div>
        </div>
      </div>   */}

        <div className="container" style={style.flex}>
          <div className="columns is-vcentered">
            <div style={{maxWidth: "400px",margin: "0 auto"}} className="column is-half has-text-centered">
              <Photo />
            </div>
            <div className="column is-5">
              <Info />
            </div>
            <div className="column is-1" />
          </div>
        </div>
        <hr />
        <div style={{maxWidth: "74em", margin: "0 auto"}} className="columns is-centered is-text-centered small-centered">
          <div style={{paddingLeft: "1.5rem"}} className="column is-6 is-centered is-text-centered">
            <Education />
          </div>
          <div className="column is-6 has-text-centered">
            <Work />
          </div>
          
        </div>
        <hr />
        <div style={{maxWidth: "74em", margin: "0 auto"}} className="columns is-centered is-text-centered small-centered">
          <div style={{paddingLeft: "1.5rem"}} className="column is-6 is-centered is-text-centered">
            <Skill />
          </div>
          <div className="column is-6 has-text-centered">
            <PersonalAttributes />
          </div>
        </div>
        <br/>
        <br/>

      </div>
    );
  }
}

export default App;
