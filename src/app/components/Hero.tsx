import React from 'react'
import Style from './component.module.css'
import Image from 'next/image'
import img from './img4.png'

const Hero = () => {
  return (
    <div>
      <h1 className={Style.heroh1}>This is a <span className={Style.span}>Hero</span> Section</h1>
      <p className={Style.herop}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit adipisci ullam fuga cumque iste aut nihil nobis ipsa eveniet molestiae et explicabo aspernatur, necessitatibus sint soluta placeat! Totam, minus nam.</p>
      <Image className={Style.img} src={img} alt="" width={500} />
      <button className={Style.btn}>More Info Is Coming Soon</button>

    </div>
  )
}

export default Hero
