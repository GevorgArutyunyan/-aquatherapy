import style from './Header.module.css';
import React, { useState } from 'react';
import Logo from './Group 1.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Button from '../button/Button';

function Header()  {
    const [nav, setNav] = useState(false);
    return (
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.box}>
            <div className={style.logo_image}>
              <img src={Logo} alt='/' />
            </div>
            <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
              <li><a href='#'>Главная</a></li>
              <li><a href='#'>Сеансы</a></li>
              <li><a href='#'>Отзывы</a></li>
              <li><a href='#'>Контакты</a></li>
              <li><a href='#'>Новости</a></li>
              <li><a href='#'>Обо мне</a></li>
              <li><a href='#'>Блог</a></li>
            </ul>
            <div className='button-header'><Button /></div>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35}/>}                           
            </div>
            
          </div>
        </div>
      </header>
    );
  }  

export default Header;
