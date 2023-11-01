import React, { useState } from 'react'
import houseLoc from '../../assets/house_loc.svg'
import { AddressIntro } from '../../components/addressIntro/AddressIntro'
import { AddressDeatils } from '../../components/addressDetails/AddressDeatils'
import { useNavigate } from "react-router-dom";


export const Address = () => {
    const [status, setStatus] = useState(0);
    const navigate = useNavigate();

    const clickHandler=()=>{
        if(status==0){
            setStatus(1);
        }else{
            navigate("/date")
        }
        
    }
    return (

        <section>


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
                    {!status ? <AddressIntro/> : <AddressDeatils />}
                  
                    <div className='d-flex justify-content-center align-items-center '>
                        <button className='text-uppercase fw-bold rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }}  onClick={()=> clickHandler()}>continue</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-2 mb-4'>
                        <a href='' className=' text-uppercase text-decoration-none fw-bold' style={{ color: '#FF0000' }} >cancel</a>
                    </div>
                </div>
            </div>

        </section>
    )
}


