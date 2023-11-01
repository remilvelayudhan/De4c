import React from 'react'
import './StartServies.css'
import cCare from '../../assets/idea.svg'
import old from '../../assets/oldCustomer.svg'
import newc from '../../assets/newCustomer.svg'
import { useNavigate } from "react-router-dom";
export const StartServies = () => {
 const navigate = useNavigate();

  return (
    <section>

    <div className='fw-bold fs-4 my-3 ms-5 ps-3'>
        Start, Stop Electric/Gas Services
    </div>
    <div className='d-flex justify-content-center' >
    <div className='rounded-pill  d-flex justify-content-center align-items-center'
            style={{ backgroundColor: 'var(--gray-color)' }}>
            <img className='rounded-circle border border-primary-subtle'
                style={{ width: '90px', height: '90px' }}
                src={cCare}></img>
            <div className=' p-2 me-3'>
            To serve you better, tell us <br/>what type of customer you <br /> are.
            </div>
        </div>
    </div>
    <div className='d-flex justify-content-center flex-wrap '  >
        <div className='card  rounded-5 m-4 d-flex  flex-column justify-content-center align-items-center'
            style={{
                backgroundColor: 'var(--primary-light-color)',
                width: '250px', height: '220px'
            }} >
            {/* <i className="bi bi-person-fill-add rounded-circle  bg-white  h1"
                style={{ color: 'var(--primary-light-color)', width: '50px', height: '50px' }} ></i> */}
               <img src={newc} alt='new customer' 
style={{  width: '50px', height: '50px' }}></img> 
            <div className='text-white fw-bold fs-5 text-center p-2'>
                New to DE4C
            </div>
            <div className='text-white text-center  '>
                Start service at a <br /> new address
            </div>
        </div>

        <div className='card rounded-5 m-4 d-flex  flex-column justify-content-center align-items-center bg-white border border-secondary-subtle shadow'
            style={{
                width: '250px', height: '220px'
            }}>
            {/* <i className="bi bi-person-fill-add rounded-circle  text-white  h1"
                style={{ backgroundColor: 'var(--primary-light-color)', width: '50px', height: '50px' }} ></i> */}

<img src={old} alt='old customer' 
style={{  width: '50px', height: '50px' }}></img>
            <div className=' fw-bold fs-5 text-center p-1' style={{ color: 'var(--primary-color)' }}>
                Existing Customer
            </div>
            <div className=' text-center  ' style={{ color: 'var(--primary-light-color)' }}>
                Make services changes <br /> or add location
            </div>
        </div>




    </div>
    <div className='d-flex justify-content-center align-items-center '>
        <button className='text-capitalize rounded-3 text-center px-5 py-1 text-white fs-5 border-0'
            style={{ backgroundColor: 'var(--primary-color)', }} onClick={()=> navigate("/account")}>continue</button>
    </div>
    <div className='text-center my-4 fs-5 p-2'>
        <div className='text-wrap'><a href='#' style={{ color: 'var(--primary-color)', }}>Stop Service</a> for multiple accounts</div>
        <div className='text-wrap'>Need to manage services orders?<a href='#' style={{ color: 'var(--primary-color)', }}>Stop Service</a> </div>
        <div className='text-wrap'> For more Information,<a href='#' style={{ color: 'var(--primary-color)', }}>visit our FAQ page</a> </div>
    </div>


</section>

  )
}
