import style from './Button.module.css';
import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className={style.button}><a href='#'>Записаться на сеанс</a></button>
    );
  }  
}

export default Button;
