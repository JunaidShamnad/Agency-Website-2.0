import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.Cases}>
        <div className={style.Head}>
          <p>Cases</p>
        </div>
        <div className={style.Case}>
          <div className={style.Title}>
            <p>Pluck</p>
          </div>
          <div className={style.Section}>
            <p>Digital Assets</p>
          </div>
          <div className={style.Arrow}>
            <p></p>
          </div>
        </div>
        <div className={style.Case}>
          <div className={style.Title}>
            <p>Farmacia</p>
          </div>
          <div className={style.Section}>
            <p>Recruitment App</p>
          </div>
          <div className={style.Arrow}>
            <p></p>
          </div>
        </div>
        <div className={style.Case}>
          <div className={style.Title}>
            <p>Fluidity</p>
          </div>
          <div className={style.Section}>
            <p>DeFi Protocol Branding </p>
          </div>
          <div className={style.Arrow}>
            <p></p>
          </div>
        </div>
        <div className={style.Case}>
          <div className={style.Title}>
            <p>Jobbase.io</p>
          </div>
          <div className={style.Section}>
            <p></p>
          </div>
          <div className={style.Arrow}>
            <p>Recruitment App</p>
          </div>
        </div>
        <div className={style.Case}>
          <div className={style.Title}>
            <p>Wellbank</p>
          </div>
          <div className={style.Section}>
            <p></p>
          </div>
          <div className={style.Arrow}>
            <p>Digital Banking App</p>
          </div>
        </div>
        <div className={style.More}>
          <div className={style.ViewText}>
            <p>See more</p>
          </div>
          <div className={style.ViewIcon}>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default index