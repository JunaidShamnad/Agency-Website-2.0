"use client"
import React, { useState } from 'react'
import style from './style.module.css'

const index = () => {
  // const data = ["I","N","T","E","L","P","I","K"]
  const[id,setId] = useState("")
  const data = [
    {
      id:"1",
      letter:"I",
      image:"https://images.unsplash.com/photo-1560178783-75a464fbdf6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"2",
      letter:"N",
      image:"https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"3",
      letter:"T",
      image:"https://images.unsplash.com/photo-1482189349482-3defd547e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"4",
      letter:"E",
      image:"https://images.unsplash.com/photo-1546656592-5edfb3593a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"5",
      letter:"L",
      image:"https://images.unsplash.com/photo-1546370080-e42239f15249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"6",
      letter:"P",
      image:"https://images.unsplash.com/photo-1568214697537-ace27ffd6cf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"7",
      letter:"I",
      image:"https://images.unsplash.com/photo-1546423237-abf72876d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id:"8",
      letter:"K",
      image:"https://images.unsplash.com/photo-1547468731-cc0bd2f11351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ]
  return (
    <>
      <div className={style.Intelpik}>
        <div className={style.Title}>
          {data.map((letter)=>{
            return(
              <div className={style.Letter} onMouseOver={()=>{
                setId(letter.id)
              }}onMouseLeave={()=>{
                setId("")
              }}>
                <p>{letter.letter}</p>
                {id===letter.id?
                  <div className={style.Image}>
                  <img src={letter.image} alt="" />
                </div>
                :""}
                
              </div>
            )
          })}
        </div>
        <div className={style.Description}>
          <p>Crafting the future for visionary clients</p>
        </div>
      </div>
    </>
  )
}

export default index