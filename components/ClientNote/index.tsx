import React from 'react'
import style from './style.module.css'
import arrowIcon from '../../assests/Line 23.svg'
const index = () => {
  return (
    <>
      <div className={style.ClientNote}>
        <div className={style.Title}>
          <p>CLIENTS‘ SUCCESS</p>
        </div>
        <div className={style.Description}>
          <p>We’re proud to have delivered exceptional work for some of worldwide two organisations.Here are some of the people we’ve Worked for</p>
        </div>
        <div className={style.Action}>
          <div className={style.Text}>
            <p>Know About Us</p>
          </div>
          <div className={style.Icon}>
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default index