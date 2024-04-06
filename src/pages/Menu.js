import React from 'react'
import '../styles/Menu.css';
import {MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {
          MenuList.map((item, index)=>(
            <MenuItem item={item} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Menu