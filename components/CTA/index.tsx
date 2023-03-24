import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.cta}>
        <div className={style.Left}>
          <div className={style.Title}>
            <p>Ready to work with us?</p>
          </div>
        </div>
        <div className={style.Right}>
          <div className={style.Button}>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default index