import React, { useState } from 'react'
import houseLoc from '../../assets/house_loc.svg'
import { useNavigate } from "react-router-dom";
import { Stepper } from '../../components/stepper/Stepper';
import location from '../../assets/location.svg'


export const Address = () => {
    const [status, setStatus] = useState(1);
    const navigate = useNavigate();

  
    return (

        <section>

            <Stepper step={2} />
            <div className='d-flex justify-content-center mt-3' >
                {/* info  start */}
                <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
                    <img className='rounded-circle border border-primary-subtle'
                        style={{ width: '90px', height: '90px' }}
                        src={houseLoc}></img>
                    <div className=' p-2 me-3'>
                        What is your new service
                        <br /> address ? <br />
                    </div>
                </div>
                {/* info end */}
            </div>

            <div className='row mt-5 mx-5'>
                <div className='col-12 col-md-4 offset-md-4  rounded-3  d-flex  flex-column
                 border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >
                  
                    

                  <img src={location} alt='loaction' width='200px' height='200px' className='mx-auto'></img>
            <div className='p-3 bg-white rounded-3 my-3 mx-5 border border-secondary-subtle shadow'>
                <div className='text-secondary'>57c5bc61</div >

                57c5bc61-e883-482a-a645-071b4f6fdd23
            </div>


            <div className='d-flex justify-content-center align-items-center '>
                        <button className='text-uppercase fw-bold rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }} 
                            onClick={() => navigate('/address-details')}>continue</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-2 mb-4'>
                        <a href='' className=' text-uppercase text-decoration-none fw-bold'
                         style={{ color: '#FF0000' }} >cancel</a>
                    </div>

                    
                   
                </div>
            </div>

        </section>
    )
}


