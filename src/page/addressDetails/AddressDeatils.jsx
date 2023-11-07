import React from 'react'
import location from '../../assets/loc_hom.svg'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './AddressDeatils.css'
import { Stepper } from '../../components/stepper/Stepper';
import houseLoc from '../../assets/house_loc.svg'
import { useNavigate } from 'react-router-dom';

export const AddressDeatils = () => {
    const navigate = useNavigate();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBReKVLp2W5_uSS71nrP11OtB_mbPopURY',
    });
    const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);


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



            <div className=' row mt-5 mx-5 '>

                <div className='col-12 col-md-4 offset-md-4  rounded-3  d-flex  flex-column
                 border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >

                    <div className='fw-bold fs-4 mt-4 text-center'>We found your address</div>

                    <div className='d-flex justify-content-around
             align-items-center mt-2 '
                        style={{ backgroundColor: 'var(--primary-light-color)' }}>
                        <img src={location} alt='location' height='50px' width='50px' className='p-2'></img>
                        <div>  57c5bc61-e883-482a-a645-071b4f6fdd23</div>
                    </div>

                    <div className='bg-white' style={{aspectRatio:1/1}}>
                        {!isLoaded ? (
                            <h1>Loading...</h1>
                        ) : (
                            <GoogleMap 
                            mapContainerClassName="map-container"
                                center={center}
                                zoom={10}
                            >
                                <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                            </GoogleMap>
                        )}
                    </div>
                    <div className='text-wrap mb-3'>
                        <a href='#' style={{ color: 'var(--primary-light-color)', }}>Not the correct address? Please try again.</a>
                    </div>



                    <div>What your mailing address ?</div>

                    <small className='text-wrap mb-3' style={{ color: 'var(--primary-light-color)', }}>
                        Is your mailing address the same as your address
                    </small>

                    <div className="form-check d-flex align-items-center ms-2  mb-3">
                        <input className="form-check-input  fs-4 " type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label align-self-end" htmlFor="flexCheckChecked">
                            Yes, the mailing address is the same
                        </label>
                    </div>
                    <div>Will another Person also responsily for this account?</div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            No
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Yes
                        </label>
                    </div>
                    <div className='d-flex justify-content-center align-items-center '>
                        <button className='text-uppercase fw-bold rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }}
                            onClick={() => navigate('/date')}>continue</button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-2 mb-4'>
                        <a href='' className=' text-uppercase text-decoration-none fw-bold'
                            style={{ color: '#FF0000' }} >cancel</a>
                    </div>

                </div>

            </div>

      
        </section >
    )
}
