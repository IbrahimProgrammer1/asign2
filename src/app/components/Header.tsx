import React from 'react'
import Style from './component.module.css'

const Header = () => {
  return (
    <div>
      <ul className={Style.ul}>
        <li className={Style.li}><a href="#">Home</a></li>
        <li className={Style.li}><a href="#">About Us</a></li>
        <li className={Style.li}><a href="#">Contact Us</a></li>
      </ul>
    </div>
  )
}

export default Header
