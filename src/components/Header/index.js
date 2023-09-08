import React from 'react';
import { AiFillGift, AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotifications, IoIosArrowDown } from 'react-icons/io';

import './styles.css';

export default ({black})=>{
    return (
      <header className={black ? 'black' : ''}>
        <div className='logo'>
          <img src="https://api.time.com/wp-content/uploads/2014/11/netflix.jpg" />
        </div>
        <nav class='response-header'>
          <ul>
            <li>Home &nbsp;</li>
            <li>Series &nbsp; </li>
            <li>Movie &nbsp; </li>
            <li>Recent Added &nbsp;</li>
            <li>My List &nbsp; </li>
          </ul>
        </nav>
        <div className='userIcon'>
          <AiOutlineSearch className='search' />
          <h4 className='child'>Kiky</h4>
          <AiFillGift className='gift' />
          <IoIosNotifications className='notification' />
          <img src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' />
          <IoIosArrowDown />

        </div>
      </header>
    );
}
