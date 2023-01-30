import style from './Titles.module.css';
import React from 'react';
import leftBlue from './left blue.png';
import rightBlue from './right blue.png';

class Titles extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.row}>
          <img src={leftBlue} />
          <div className={style.text}>Сеансы RitmStyle</div>
          <img src={rightBlue} />
        </div>
      </div>
    );
  }  
}

export default Titles;
