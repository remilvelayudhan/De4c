import React from 'react'
import order from '../../assets/con_order.svg'
import { useNavigate } from 'react-router-dom';

export const ConfirmOrder = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className='d-flex justify-content-center mt-3' >
                {/* info  start */}
                <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
                    <img className='rounded-circle border border-primary-subtle'
                        style={{ width: '90px', height: '90px' }}
                        src={order} alt='communication'></img>
                    <div className=' p-2 me-3 text-start'>
                        Review and Confirm your <br /> Order


                    </div>
                </div>
                {/* info end */}
            </div>
            <div className='row mt-5 mx-5'  >
                <div className='col-12 col-md-6 offset-md-3 rounded-3 p-0  border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >

                    <div className='h5 fw-bold text-start my-3 text-uppercase d-flex justify-content-between align-items-center'>
                        <div> <i className="bi bi-person-bounding-box h1 ms-3  me-1 p-1"
                            style={{ color: 'var(--primary-color)' }}></i>
                            account holder information</div>

                        <button type="button" className="btn btn-link text-decoration-none fs-5" > Edit <i className="bi bi-pencil-square h3 text-black"></i></button>
                    </div>
                    <div className='fs-5 bg-white  text-start fw-bold ps-5'> Account Holder</div>
                    <div className='fs-5 bg-white   text-start text-secondary  ps-5'> Jhon smith</div>
                    <div className='fs-5 bg-white pt-1 text-start fw-bold  ps-5'> Primary Phone</div>
                    <div className='fs-5 bg-white   text-start text-secondary  ps-5'> 9061119333</div>
                    <div className='fs-5 bg-white pt-1 text-start fw-bold  ps-5'> Email Address</div>
                    <div className='fs-5 bg-white  text-start text-secondary  ps-5'> sample@gmail.com</div>
                    <div className='fs-5 bg-white pt-1 text-start fw-bold  ps-5'> Mailing Address</div>
                    <div className='fs-5 bg-white  text-start text-secondary  ps-5'> </div>





                    <div className='h5 fw-bold text-start my-3 text-uppercase d-flex justify-content-between align-items-center'>
                        <div> <i className="bi bi-building-fill-check h1 ms-3  me-1 p-1"
                            style={{ color: 'var(--primary-color)' }}></i>
                            service address</div>

                        <button type="button" className="btn btn-link text-decoration-none fs-5" > Edit <i className="bi bi-pencil-square h3 text-black"></i></button>
                    </div>

                    <div className='fs-5 bg-white   text-start text-secondary  ps-5'> 124/ h2 housr tr city</div>


                    <div className='h5 fw-bold text-start my-3 text-uppercase d-flex justify-content-between align-items-center'>
                        <div> <i className="bi bi-calendar-day h1 ms-3  me-1 p-1"
                            style={{ color: 'var(--primary-color)' }}></i>
                            service start date</div>

                        <button type="button" className="btn btn-link text-decoration-none fs-5" > Edit <i className="bi bi-pencil-square h3 text-black"></i></button>
                    </div>



                    <div className='fs-5 bg-white   text-start text-secondary  ps-5 '> 12/12/2025</div>


                  
                    <div className='h5 fw-bold text-start my-3 ps-5 text-capitalize d-flex justify-content-between align-items-center'>
                        
                            charges to start Services

                       
                    </div>
                    <div class="row px-3 my-3">
                        <div class="col">
  
                        <div>Deposit based on new </div> 
                        <div> customer status</div>
                        <div className='text-italic'  style={{ color: 'var(--primary-color)'}}>Due on 10/10/2022</div>  
                          
                        </div>
                        <div class="col fw-bold text-end" style={{ color: 'var(--primary-color)'}}>

                        $250

                        </div>
                        
                    </div>
                    <div class="row px-3 my-3">
                        <div class="col">
  
                        <div>Services charges </div> 
                        <div> (due with first bill)</div>
                       
                          
                        </div>
                        <div class="col fw-bold text-end" style={{ color: 'var(--primary-color)'}}>

                        $25

                        </div>
                        
                    </div>

                    <div class="row px-3 my-3">
                        <div class="col fw-bold">
  
                        Total Bill
                      
                        </div>
                        <div class="col fw-bold text-end" style={{ color: 'var(--primary-color)'}}>

                        $25

                        </div>
                        
                    </div>

                    <div class="row px-3 my-3"  style={{ color: 'var(--primary-color)'}}>
                        <div class="col ">
  
                        <div>Our records indicate that the power is
                             on at this property.</div>
                        <div>please check your breackers when you arrive.</div>
                      
                        </div>
                        <div class="col text-end">

                        <i className="bi bi-printer-fill h1 ms-3  me-1 p-1 text-black text-end"
                            ></i>

                        </div>
                        
                    </div>




                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <button className='my-2 text-uppercase  rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }}
                            
                            onClick={()=> navigate("/profile")}>SUBMIT</button>

                        <button className='text-uppercase  text-center text-danger
     px-5 py-1   border-0 bg-transparent'
                        >cancel</button>



                    </div>

                </div>
            </div>
        </section>
    )
}
