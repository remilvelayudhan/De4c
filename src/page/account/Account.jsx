import React from 'react'

import business from '../../assets/business.svg'
import identification from '../../assets/identification.svg'
import cCare from '../../assets/idea.svg'
import { useNavigate } from "react-router-dom";
export const Account = () => {

    const navigate = useNavigate();
  return (
    <section>

            <div className='fw-bold fs-4 my-3 ms-5 ps-3'>
                Start, Stop Electric/Gas Services
            </div>
            <div className='d-flex justify-content-center' >
                {/* info  start */}
                <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
                    <img className='rounded-circle border border-primary-subtle'
                        style={{ width: '90px', height: '90px' }}
                        src={cCare}></img>
                    <div className=' p-2 me-3'>Will the account be under the
                        <br /> name of an individual or <br />business?
                    </div>
                </div>
                {/* info end */}
            </div>
            <div className='fw-bold fs-5 mt-3 text-center'>Please select an account name type.</div>
            <div className='d-flex justify-content-center flex-wrap '  >
                <div className='card  rounded-5 m-4 d-flex  flex-column  align-items-center'
                    style={{
                        backgroundColor: 'var(--primary-light-color)',
                        width: '250px', height: '220px'
                    }}>

                    <div className='text-white fw-bold fs-4 text-center pt-4'>
                        INDIVIDUAL
                    </div>
                    <img src={identification} alt='individual' height='140px' width='200px' color='white' />

                </div>

                <div className='card rounded-5 m-4 d-flex  flex-column 
                 align-items-center bg-white border border-secondary-subtle shadow'
                    style={{
                        width: '250px', height: '220px'
                    }}>

                    <div className=' fw-bold fs-4 text-center pt-4' style={{ color: 'var(--primary-color)' }}>
                        BUSINESS
                    </div>
                    <img src={business} alt='individual' height='140px' width='200px' />
                </div>




            </div>
            
            
            <div className="form-check d-flex justify-content-center align-items-center my-4">
                <input className="form-check-input me-2 fs-4 " type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label align-self-end" htmlFor="flexCheckChecked">
                       I need service for more than one address
                    </label>
            </div>

            
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <button className='text-uppercase fw-bold rounded-3 text-center px-5 py-1 text-white  border-0'
                    style={{ backgroundColor: 'var(--primary-color)', }} onClick={()=> navigate("/info")}>continue</button>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-2 mb-4'>
                <a href='' className=' text-uppercase text-decoration-none fw-bold' style={{ color: '#FF0000' }} >cancel</a>
           
        </div>

        </section>
  )
}
