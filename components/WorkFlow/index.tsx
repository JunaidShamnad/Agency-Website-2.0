import React from 'react';
import style from './style.module.css';
import arrowIcon from '../../assests/Line 23.svg'
const index = () => {
  const workFlow = [
    {
      id: '1',
      Title: 'UNDERSTANDING BRIEF',
      Description:
        'The first process is to understand the brief that has been sent by the client via online meet or chat and then the next process is the deal budget',
    },
    {
      id: '2',
      Title: 'BRANDSTORMING & RESEARCH',
      Description:
        'We begin to plan and structure the project process based pn the discovery phase before starting to jump into the design phase.',
    },
    {
      id: '3',
      Title: 'DESIGN PROCESS',
      Description:
        'After completing the brand storming & research process then we make low fidelity and after low fidelity is approved the last step is high fidelity',
    },
    {
      id: '4',
      Title: 'DELIVER & PAYMENT',
      Description:
        'The first process is to understand the brief that has been sent by the client via online meet or chat and then the next process is the deal budget',
    },
  ];
  return (
    <>
      <div className={style.WorkFlow}>
        {workFlow.map((flow,index) => {
          return (
            <div className={style.Flow}>
              <div className={style.Title}>
                <div className={style.Num}>
                  <p>0{index+1}</p>
                </div>
                <div className={style.Text}>
                  <p>{flow.Title}</p>
                </div>
              </div>
              <div className={style.Description}>
                <p>{flow.Description}</p>
              </div>
              <div className={style.Arrow}>
                <img src={arrowIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
