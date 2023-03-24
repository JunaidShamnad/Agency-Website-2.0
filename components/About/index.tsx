import React from 'react'
import style from './style.module.css'

const index = () => {
  const experience = [
    {
      id:1,
      Num:10,
      Name:"Years Experience",
      Suffix:""
    },
    {
      id:2,
      Num:55,
      Name:"COMPLETED PROJECT",
      Suffix:""
    },
    {
      id:1,
      Num:200,
      Name:"HAPPY CLIENT",
      Suffix:"+"
    },
  ]
  return (
    <>
      <div className={style.About}>
        <div className={style.Heading}>
          <p>Bringing brands<br/>
To life with strategy<br/> and design</p>
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
            {experience.map((item)=>{
              return(
              <div className={style.Content} key={item.id}>
              <div className={style.Num}>
                <p>{item.Num}{item.Suffix}</p>
              </div>
              <div className={style.Name}>
                <p>{item.Name}</p>
              </div>
              </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default index