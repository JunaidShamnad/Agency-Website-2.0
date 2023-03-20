import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.Services}>
        <div className={style.HeadSection}>
          <div className={style.Left}>
            <div className={style.Head}>
              <p>OUR SERVICES</p>
            </div>
            <div className={style.Description}>
              <p>Every one of us loves something different So, explore the world through the lens of out visual capabilities and find what you love</p>
            </div>
          </div>
          <div className={style.Right}>
              <div className={style.AllServices}>
                <div className={style.Service}>
                  <div className={style.Icon}>
                    <p></p>
                  </div>
                  <div className={style.Text}>
                    <p>Design</p>
                  </div>
                </div>
                <div className={style.Service}>
                  <div className={style.Icon}>
                    <p></p>
                  </div>
                  <div className={style.Text}>
                    <p>Development</p>
                  </div>
                </div>
                <div className={style.Service}>
                  <div className={style.Icon}>
                    <p></p>
                  </div>
                  <div className={style.Text}>
                    <p>Digital Marketing</p>
                  </div>
                </div>
                <div className={style.Service}>
                  <div className={style.Icon}>
                    <p></p>
                  </div>
                  <div className={style.Text}>
                    <p>SEO</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className={style.Tabs}>
          <div className={style.Tab}>
            <div className={style.Title}>
              <p>UI/UX Design</p>
            </div>
            <div className={style.Arrow}>
              <p></p>
            </div>
          </div>
          <div className={style.Tab}>
            <div className={style.Title}>
              <p>Web Design </p>
            </div>
            <div className={style.Arrow}>
              <p></p>
            </div>
          </div>
          <div className={style.Tab}>
            <div className={style.Title}>
              <p>Brand Design</p>
            </div>
            <div className={style.Arrow}>
              <p></p>
            </div>
          </div>
          <div className={style.Tab}>
            <div className={style.Title}>
              <p>Graphic Design</p>
            </div>
            <div className={style.Arrow}>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index