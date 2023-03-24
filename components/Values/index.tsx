import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.Values}>
        <div className={style.Left}>
          <div className={style.Title}>
            <p>Our company values culture</p>
          </div>
          <div className={style.Description}>
            <p>We specialize in creating visual identities for products and banner  in your company.</p>
          </div>
        </div>
        <div className={style.Right}>
          <p>Be sincere</p>
          <p>Stronger Together</p>
          <p>Keep it simple</p>
          <p>Take intelligent risks</p>
        </div>
      </div>
    </>
  )
}

export default index