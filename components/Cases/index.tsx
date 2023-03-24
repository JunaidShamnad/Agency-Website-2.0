'use client'
import ArrowUp from 'assests/icons/ArrowUp';
import Image from 'next/image';
import React, { use, useState } from 'react';
import style from './style.module.css';

const Index = () => {
  const[isOver,setIsOver] = useState(false)
  const[id,setId] = useState("")
  const cases = [
    {
      id: "1",
      Title: 'Pluck',
      Section: 'Digital Assests',
      Image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      id: "2",
      Title: 'Farmacia',
      Section: 'Recruitment App',
      Image:
        'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: "3",
      Title: 'Fluidity',
      Section: 'DeFi Protocol Branding',
      Image:
        'https://images.unsplash.com/photo-1505954137021-b6bf5a131a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: "4",
      Title: 'Jobbase.io',
      Section: 'Recruitment App',
      Image:
        'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: "5",
      Title: 'Wellbank',
      Section: 'Digital Banking App',
      Image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];
  return (
    <>
      <div className={style.Cases}>
        <div className={style.Head}>
          <p>Cases</p>
        </div>
        {cases.map((caseItem) => {
          return (
            <div className={style.Case} onMouseOver={()=>{
            // <div className={id===caseItem.id?style.BlackCase:style.Case} onMouseOver={()=>{
              setIsOver(true)
              setId(caseItem.id)
            }}
            onMouseLeave={()=>{
              setIsOver(false)
              setId("")

            }}>
              <div className={style.Title}>
                <p>{caseItem.Title}</p>
              </div>
              <div className={style.Section}>
                <p>{caseItem.Section}</p>
              </div>
              <div className={style.Arrow}>
                <ArrowUp />
              </div>
              
                <div className={style.Image}>
                {isOver && id===caseItem.id? (
                  <img src={caseItem.Image} alt={caseItem.Title} />
                  ) : (
                    ''
                  )}
                </div>
              
            </div>
          );
        })}

        <div className={style.More}>
          <div className={style.ViewText}>
            <p>See more</p>
          </div>
          <div className={style.ViewIcon}>{/* <ArrowUp/> */}</div>
        </div>
      </div>
    </>
  );
};

export default Index;
