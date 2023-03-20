import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.About}>
        <div className={style.Heading}>
          <p>Bringing brands 
To life with strategy and design</p>
        </div>
        <div className={style.Description}>
          <p>we are one of the biggest agencies and we have been helping our clients for 10 years to solve  problems with design and we always provide the best service for your company by growing  your company to be better</p>
        </div>
        <div className={style.Section}>
          <div className={style.Left}>
            <div className={style.Circle}>
                
            </div>
          </div>
          <div className={style.Right}>
            <div className={style.Num}>
              <p>10</p>
            </div>
            <div className={style.Name}>
              <p>YEARS EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index