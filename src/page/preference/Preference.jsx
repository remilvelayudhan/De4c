import React from 'react'

import communication from '../../assets/communication.svg'
import { useNavigate } from "react-router-dom";

export const Preference = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className='d-flex justify-content-center mt-3' >
                {/* info  start */}
                <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
                    <img className='rounded-circle border border-primary-subtle'
                        style={{ width: '90px', height: '90px' }}
                        src={communication}></img>
                    <div className=' p-2 me-3 text-start'>
                        Choose your communication<br/> Preferences
                    </div>
                </div>
                {/* info end */}
            </div>
            <div className='row mt-5 mx-5'  >
                <div className='col-12 col-md-6 offset-md-3 rounded-3 p-0  
     border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >

                    <div className='h5 fw-bold text-start m-4'>Preferences</div>

                    <div className='fs-5 bg-white p-1 my-1 text-start'> <i className="bi bi-person-fill h4 ms-3  me-1"
                        style={{ color: 'var(--primary-color)' }}></i>Account</div>
                    <div>
                        <div className=" p-3">

                            <input type="email" className="form-control  my-2" id="exampleFormControlInput1"
                                placeholder="Email" />
                            <input type="text" className="form-control  my-2" id="exampleFormControlInput2"
                                placeholder="Mobile" />
                        </div>
                    </div>
                    <div className='fs-5 bg-white p-1 my-1 text-start'>
                        <i className="bi bi-wechat h4 ms-3 me-1 "
                            style={{ color: 'var(--primary-color)' }}>
                              </i>
                                Notifications</div>

                    <div class="row px-3 my-3">
                        <div class="col">

                        </div>
                        <div class="col fw-bold">

                            Email


                        </div>
                        <div class="col fw-bold">
                            Text
                        </div>
                    </div>

                    <div class="row px-3">
                        <div class="col fw-bold">
                        Account Updates
                        </div>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault1" />

                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" />

                            </div>
                        </div>
                    </div>

                    <div class="row px-3">
                        <div class="col fw-bold">
                        Outage/Emergency Updates
                        </div>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3" />

                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3" />

                            </div>
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="col fw-bold">
                        Marketing/Newsletters
                        </div>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3" />

                            </div>
                        </div>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault3" />

                            </div>
                        </div>
                    </div>



                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <button className='my-2 text-uppercase  rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }} 
                            onClick={()=> navigate("/confirmorder")}
                            >continue</button>

                        <button className='text-uppercase  text-center text-danger
             px-5 py-1   border-0 bg-transparent'
                        >cancel</button>

                     

                    </div>

                </div>
            </div>
        </section>
    )
}



