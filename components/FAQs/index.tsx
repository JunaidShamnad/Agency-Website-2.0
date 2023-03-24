"use client"
import React, { useState } from 'react';
import style from './style.module.css';

const index = () => {
  const [id,setId] = useState("")
  const faqs = [
    {
      id: '1',
      question: 'Can i Find the right information faster ?',
      answer:
        'Registration will give you access to additional features not available to guest users:Registration will give you access to additional feat',
    },
    {
      id: '2',
      question: 'How to share feature demos and ideas?',
      answer:
        'Registration will give you access to additional features not available to guest users:Registration will give you access to additional feat',
    },
    {
      id: '3',
      question: 'How to share feature demos and ideas?',
      answer:
        'Registration will give you access to additional features not available to guest users:Registration will give you access to additional feat',
    },
    {
      id: '4',
      question: 'How to share feature demos and ideas?',
      answer:
        'Registration will give you access to additional features not available to guest users:Registration will give you access to additional feat',
    },
  ];
  return (
    <>
      <div className={style.Faqs}>
        <div className={style.Title}>
          <p>FAQs</p>
        </div>
        {faqs.map((faq,index) => {
          return (
            <div className={style.Faq}>
              <div className={style.Question}>
                <p>{index+1}. {faq.question}</p>
                {id===faq.id?
                <div className={style.Answer}>
                  <p>{faq.answer}</p>
                </div>
                :""}
              </div>
              <div className={style.Action}>
                {id===""?<button onClick={()=>{
                  setId(faq.id)
                }}>+</button>
                :
                <button onClick={()=>{
                  setId("")
                }}>-</button>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
