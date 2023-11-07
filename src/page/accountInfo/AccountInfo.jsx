import React from 'react'

import formFill from '../../assets/formFill.svg'
import { Stepper } from '../../components/stepper/Stepper'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';

export const AccountInfo = () => {
  const navigate = useNavigate();
  return (

    <section>
      <Stepper step={3} />
      <div className='d-flex justify-content-center mt-3' >
        {/* info  start */}
        <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
          <img className='rounded-circle border border-primary-subtle'
            style={{ width: '90px', height: '90px' }}
            src={formFill}></img>
          <div className=' p-2 me-3 text-start'>
            Please Fill out the Identification<br />Form below
          </div>
        </div>
        {/* info end */}
      </div>
      <div className='row mt-5 mx-5'  >
        <div className='col-12 col-md-6 offset-md-3 rounded-3 p-0  
     border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >

          <div className='h5 fw-bold text-start m-4'>Enter Your Information</div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><i className="bi bi-person-fill h4 ms-3  me-1"
                style={{ color: 'var(--primary-color)' }}></i>Account Name</Accordion.Header>
              <Accordion.Body>
                <input type="text" className="form-control  my-2" id="exampleFormControlInput1" placeholder="enter your first name" />
                <input type="text" className="form-control  my-2" id="exampleFormControlInput2" placeholder="enter your middle name (optional)" />
                <input type="text" className="form-control  my-2" id="exampleFormControlInput3" placeholder="enter your last name" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><i className="bi bi-telephone-plus-fill h4 ms-3 me-1 "
                style={{ color: 'var(--primary-color)' }}></i>Contact Information</Accordion.Header>
              <Accordion.Body>


                <input type="text" className="form-control  my-2" id="exampleFormControlInput1" placeholder="enter your email address" />
                <input type="text" className="form-control  my-2" id="exampleFormControlInput2" placeholder="confirm your email address" />
                <input type="text" className="form-control  my-2" id="exampleFormControlInput3" placeholder="enter your primary phone number" />

              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header><i className="bi bi-people-fill h4 ms-3 me-1 "
                style={{ color: 'var(--primary-color)' }}></i>Relationship</Accordion.Header>
              <Accordion.Body>

              <select className="form-select my-2" aria-label="Default select example">
                  <option >select an option</option>
                  <option value="1">Father</option>
                  <option value="2">Mother</option>
                  <option value="3">other</option>
                </select>

              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <i className="bi bi-house-fill h4 ms-3 me-1 "
                  style={{ color: 'var(--primary-color)' }}></i>Property Use
              </Accordion.Header>
              <Accordion.Body>




                <select className="form-select my-2" aria-label="Default select example">
                  <option >select an option</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>


              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <i className="bi bi-person-vcard-fill h4 ms-3 me-1 "
                  style={{ color: 'var(--primary-color)' }}></i>Identification
              </Accordion.Header>
              <Accordion.Body>


                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>

                      <div className="form-check text-start fw-bold my-1">
                        <label className="form-check-label" htmlFor="radio1">
                          <input type="radio" className="form-check-input" id="radio1" name="optradio"
                            value="option1" />SSN
                        </label>
                      </div>

                    </Accordion.Header>
                    <Accordion.Body>
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput11" placeholder="enter your 9 digit social security number" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput21" placeholder="enter your middle name (optional)" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput31" placeholder="enter your last name" />

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="form-check  text-start fw-bold my-1">
                        <label className="form-check-label" htmlFor="radio2">
                          <input type="radio" className="form-check-input" id="radio2" name="optradio"
                            value="option2" />Canadian SIN/Address
                        </label>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput111" placeholder="social security number" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput211" placeholder="street address" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput311" placeholder="city" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput311" placeholder="province" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput311" placeholder="postal/zip code" />

                    </Accordion.Body>
                  </Accordion.Item>



                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="form-check  text-start fw-bold my-1">
                        <label className="form-check-label" htmlFor="radio3">
                          <input type="radio" className="form-check-input" name="optradio" id="radio3" />
                          US Driver's License
                        </label>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>

                      <input type="text" className="form-control  my-2" id="exampleFormControlInput1111" placeholder="enter your state" />
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput2111" placeholder="enter your driving license number" />

                    </Accordion.Body>
                  </Accordion.Item>



                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className="form-check  text-start fw-bold my-1">
                        <label className="form-check-label" htmlFor="radio4">
                          <input type="radio" className="form-check-input" name="optradio" id="radio4" />
                          Passport or Other
                        </label>
                      </div></Accordion.Header>
                    <Accordion.Body>
                      <input type="text" className="form-control  my-2" id="exampleFormControlInput1111" placeholder="upload your passport or any other document" />

                    </Accordion.Body>
                  </Accordion.Item>





                </Accordion>



              </Accordion.Body>
            </Accordion.Item>


          </Accordion>


          <div className='d-flex flex-column justify-content-center align-items-center '>
            <button className='my-2 text-uppercase  rounded-3 text-center px-5 py-1 text-white  border-0'
              style={{ backgroundColor: 'var(--primary-color)', }} 
              onClick={()=> navigate("/preference")}>continue</button>



         

            <button className='text-uppercase  text-center text-danger
             px-5 py-1   border-0 bg-transparent'
            >cancel</button>

            <button className='my-2  text-center px-5 py-1 border-0 text-dark text-decoration-underline'
            >Clear All Fileds</button>

          </div>





        </div></div>
    </section>
  )
}



