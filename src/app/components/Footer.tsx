import React from 'react'
import Style from './component.module.css'

const Footer = () => {
    return (
        <div>
            <ul className={Style.footul}>
                <li className={Style.footli}><a href="#">Home</a></li>
                <li className={Style.footli}><a href="#">About Us</a></li>
                <li className={Style.footli}><a href="#">Contact Us</a></li>
            </ul>
            <p className={Style.footp}>All Copyrights© Resever Inc @2024.</p>
        </div>
    )
}

export default Footer
