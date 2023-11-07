import React, { useState } from 'react'
import calender from '../../assets/calender_clock.svg'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import { Stepper } from '../../components/stepper/Stepper';


export const CalenderDate = () => {
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(minDate.getDate() + 45);
  

    
    const navigate = useNavigate();

   


    return (

     

        <section>

            <Stepper step={2} />
            <div className='d-flex justify-content-center mt-3' >
                {/* info  start */}
                <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
                    <img className='rounded-circle border border-primary-subtle'
                        style={{ width: '90px', height: '90px' }}
                        src={calender}></img>
                    <div className=' p-2 me-3'>
                        select your start date
                    </div>
                </div>
                {/* info end */}
            </div>

            <div className='row mt-5 mx-5'>
                <div className='col-12 col-md-4'> You are not required to be present at the time of connection.
                    However, please make sure yout meter area is accessible</div>
                <div className='col-12 col-md-4  p-0 rounded-3  d-flex  flex-column 
         border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >

                    <Calendar className='w-100'  minDate={minDate} maxDate={maxDate} />

                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <button className='text-uppercase fw-bold rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }} onClick={() => navigate("/account-info")}>continue</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-2 mb-4'>
                        <a href='' className=' text-uppercase text-decoration-none fw-bold' style={{ color: '#FF0000' }} >cancel</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
