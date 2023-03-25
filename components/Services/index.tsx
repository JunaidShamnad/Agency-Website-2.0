"use client"
import React, { useState } from 'react';
import style from './style.module.css';
import World from '../../assests/icons/World';
import Image from 'next/image';
import ArrowGray from 'assests/icons/ArrowGray';
const index = () => {
  const [id,setId] = useState("")
  const [tab,setTab] = useState("")
  const [category,setCategory] = useState("Design")
  const services = [
    {
      id: "1",
      title: 'UI/UX Design',
      category:"Design",
      image:"https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "2",
      title: 'Web Design',
      category:"Development",
      image:"https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"


    },
    {
      id: "3",
      title: 'Brand Design',
      category:"Digital Marketing",
      image:"https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"


    },
    {
      id: "4",
      title: 'Graphic Design',
      category:"SEO",
      image:"https://images.unsplash.com/photo-1560759226-14da22a643ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"


    },
  ];
  const categoryList = ["Design","Development","Digital Marketing","SEO"]
  return (
    <>
      <div className={style.Services}>
        <div className={style.HeadSection}>
          <div className={style.Left}>
            <div className={style.Head}>
              <p>OUR SERVICES</p>
            </div>
            <div className={style.Description}>
              <p>
                Every one of us loves something different So, explore the world
                through the lens of out visual capabilities and find what you
                love
              </p>
            </div>
          </div>
          <div className={style.Right}>
            <div className={style.AllServices}>
              {categoryList.map((list,index)=>{
                return(
                  <div className={style.Service} onClick={()=>{
                setCategory(list)
              }}>
                <div className={style.Icon}>
                  <World />
                </div>
                <div className={style.Text}>
                  <p>{list}</p>
                </div>
              </div>
                )
              })}
              
              {/* <div className={style.Service}>
                <div className={style.Icon}>
                  <World />
                </div>
                <div className={style.Text}>
                  <p>Development</p>
                </div>
              </div>
              <div className={style.Service}>
                <div className={style.Icon}>
                  <World />
                </div>
                <div className={style.Text}>
                  <p>Digital Marketing</p>
                </div>
              </div>
              <div className={style.Service}>
                <div className={style.Icon}>
                  <World />
                </div>
                <div className={style.Text}>
                  <p>SEO</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className={style.Tabs}>
          {services.map((service,index) => {
            if(category===service.category){
               return (
              <div className={style.Tab} key={index} onMouseOver={()=>{
                setId(service.id)

              }}onMouseLeave={()=>{
                setId("")
              }}>
                <div className={style.Title}>
                  <p>{service.title}</p>
                </div>
                {id===service.id?

                
                <div className={style.ServiceImage}>
                  <div className={style.ServiceDiv}>
                    <img src={service.image} alt="" />
                  </div>
                </div>:""}
                <div className={style.Arrow}>
                  <ArrowGray />
                </div>
              </div>
            );
            }
           
          })}
        </div>
      </div>
    </>
  );
};

export default index;
