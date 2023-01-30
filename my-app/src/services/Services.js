import style from './Services.module.css';
import React from 'react';
import Big from './services.png';
import Little from './servicesLittle.png';
import Line from './Rectangle 13.png';
import Titles from '../titles/Titles';

class Flexbox extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Titles />
        <div className={style.wrapper}>
          <div className={style.row}>
           
          </div>            
        </div>
      </div>
    );
  }  
}

export default Flexbox;
