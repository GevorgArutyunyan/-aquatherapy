import style from './Main.module.css';
import React from 'react';
import photo from '../main/Main.png';
import leftSheet from './Sheet left.png';
import rightSheet from './Sheet right.png';

class Main extends React.Component {
  render() {
    return (      
      <div className={style.container}>
        <div className={style.wrapper}>
          <img className={style.responsive} src={photo}/>
          <div className={style.column}>
              <div className={style.title}>
                <img className={style.left} src={leftSheet}/>
                <div className={style.text}>Укрепление здоровья</div>
                <img className={style.right} src={rightSheet}/>
              </div>
              <div className={style.subTitle}>Акватерапия RitmStyle</div>            
          </div>
        </div>    
        
      </div>

    );
  }  
}

export default Main;
