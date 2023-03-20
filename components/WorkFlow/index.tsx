import React from 'react'
import style from './style.module.css'

const index = () => {
  return (
    <>
      <div className={style.WorkFlow}>
        <div className={style.Flow}>
          <div className={style.Title}>
            <div className={style.Text}>
              <p>UNDERSTANDING BRIEF</p>
            </div>
            <div className={style.Num}>
              <p>01</p>
            </div>
            <div className={style.Description}>
              <p>The first process is to understand the brief that has been sent by the client via online meet or chat and then the next process is the deal budget</p>
            </div>
            <div className={style.Arrow}>
              
            </div>
          </div>
        </div>
        <div className={style.Flow}>
          <div className={style.Title}>
            <div className={style.Text}>
              <p>BRANDSTORMING 
& RESEARCH</p>
            </div>
            <div className={style.Num}>
              <p>02</p>
            </div>
            <div className={style.Description}>
              <p>We begin to plan and structure the project process based pn the discovery phase before starting to jump into the design phase.</p>
            </div>
            <div className={style.Arrow}>

            </div>
          </div>
        </div>
        <div className={style.Flow}>
          <div className={style.Title}>
            <div className={style.Text}>
              <p>DESIGN PROCESS</p>
            </div>
            <div className={style.Num}>
              <p>03</p>
            </div>
            <div className={style.Description}>
              <p>After completing the brand storming &  research process then we make low fidelity
and after low fidelity is approved the last step 
is high fidelity</p>
            </div>
            <div className={style.Arrow}>

            </div>
          </div>
        </div>
        <div className={style.Flow}>
          <div className={style.Title}>
            <div className={style.Text}>
              <p>DELIVER & PAYMENT</p>
            </div>
            <div className={style.Num}>
              <p>04</p>
            </div>
            <div className={style.Description}>
              <p>After the lofi and hifi processes have gone through the feedback process and are final the file can be sent to the clieng while the client pays the payment</p>
            </div>
            <div className={style.Arrow}>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index