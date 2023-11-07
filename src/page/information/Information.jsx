import React from 'react'
import research from '../../assets/research.svg'
import calender from '../../assets/calender.svg'
import location from '../../assets/location.svg'
import id from '../../assets/id.svg'
import './Information.css'
import { useNavigate } from "react-router-dom";

export const Information = () => {
    const navigate = useNavigate();
    return (
        <section>


            <div className='d-flex justify-content-center mt-3' >
                {/* info  start */}
                <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
                    <img className='rounded-circle border border-primary-subtle'
                        style={{ width: '90px', height: '90px' }}
                        src={research}></img>
                    <div className=' p-2 me-3'>Following Information is
                        <br /> Required to Get Started <br />
                    </div>
                </div>
                {/* info end */}
            </div>
            <div className='fw-bold fs-5 mt-3 text-center'>Please select an account name type.</div>
            <div className='d-flex justify-content-center flex-wrap '  >


                <div className='cardInfo rounded-3 m-4 d-flex  flex-column  text-center border border-secondary-subtle shadow' style={{ width: '250px', height: '300px' }} >
                    <div className=' fw-bold rounded-top-3 text-center h5 py-3 ' style={{ backgroundColor: 'var(--primary-extra-light-color)' }}> Address</div>
                    <div className='text-secondary text-center '>The address of the<br /> home where you <br />need service</div>
                    <div className="mt-3">
                        <img src={location} alt='address' height='140px' ></img>
                    </div>
                </div>

             

                <div className='cardInfo rounded-3 m-4 d-flex  flex-column  text-center border border-secondary-subtle shadow' style={{ width: '250px', height: '300px' }} >
                    <div className=' fw-bold rounded-top-3 text-center h5 py-3 ' style={{ backgroundColor: 'var(--primary-extra-light-color)' }}> Date of Service</div>
                    <div className='text-secondary text-center'>The date you want <br />your service to start</div>
                    <div className="mt-4">
                        <img src={calender} alt='Date of Service' height='140x' ></img>
                    </div>




                </div>



                <div className='cardInfo rounded-3 m-4 d-flex  flex-column  text-center border border-secondary-subtle shadow' style={{ width: '250px', height: '300px' }} >
                    <div className=' fw-bold rounded-top-3 text-center h5 py-3 ' style={{ backgroundColor: 'var(--primary-extra-light-color)' }}> Identification</div>
                    <div className='text-secondary text-center'>Identification such as <br />
                        a Social Security,<br /> Driver's License, or<br />
                        Social Insurance</div>
                    <div>
                        <img src={id} alt='individual' height='140px' ></img>
                    </div>




                </div>




            </div>


            <div className="text-wrap text-center my-4">
                Have more questions? See all our <a href='#'> FAQs </a>or watch our short <a href='#'>video guide.</a>
            </div>

            <div className='d-flex justify-content-center align-items-center '>
                <button className='text-uppercase fw-bold rounded-3 text-center px-5 py-1 text-white  border-0'
                    style={{ backgroundColor: 'var(--primary-color)', }} onClick={()=> navigate("/address")}>continue</button>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-2 mb-4'>
                <a href='' className=' text-uppercase text-decoration-none fw-bold' style={{ color: '#FF0000' }} >cancel</a>
            </div>



        </section>
    )
}
