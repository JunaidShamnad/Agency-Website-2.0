import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.Header}>
        <div className={style.Logo}>
          {/* <img src="" alt="" /> */}
          <p>Intelpik</p>
        </div>
        <div className={style.Menu}>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={style.Actions}>
          <button>Hire US</button>
        </div>
      </div>
    </>
  )
}

export default index