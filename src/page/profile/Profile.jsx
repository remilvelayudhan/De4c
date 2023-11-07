import React from 'react'

export const Profile = () => {
    return (
        <section>
            {/* <div className='d-flex justify-content-center mt-3' >
       
        <div className='rounded-pill  d-flex justify-content-center align-items-center' style={{ backgroundColor: 'var(--gray-color)' }}>
            <img className='rounded-circle border border-primary-subtle'
                style={{ width: '90px', height: '90px' }}
                src={communication}></img>
            <div className=' p-2 me-3 text-start'>
                Choose your communication<br/> Preferences
            </div>
        </div>
        
    </div> */}
            <div className='row mt-5 mx-5'  >
                <div className='col-12 col-md-6 offset-md-3 rounded-3 p-0  
border border-secondary-subtle shadow' style={{ backgroundColor: 'var(--gray-color)' }} >

                    <div className='h5 fw-bold text-start mt-4 px-3 fs-3'>Online Profile</div>
                    <div className='mb-2 px-3'>Please set up your online account</div>

                    <div className='fs-5 px-3 bg-white p-1 my-1 text-start fw-bold fs-4'> Username & Password</div>
                    <div>
                        <div className='mb-2 px-3 '>Choose a username and password</div>
                        <div className=" p-3">

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Username" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail2">New Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail2"
                                    aria-describedby="password help" placeholder="New Password" />

                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail3">Old Password</label>
                                <input type="email" className="form-control" id="exampleInputEmail3"
                                    aria-describedby="password Help" placeholder="Old Password" />

                            </div>


                        </div>
                    </div>



                    <div className='fs-5 px-3 bg-white p-1 my-1 text-start fw-bold fs-4'> Security Questions</div>
                    <div>
                        <div className='mb-2 px-3 '>These Questions may be used to vefify your identity</div>
                        <div className=" p-3">

                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Security question #1</label>
                                <select  className="form-control" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                          
                            <div className="form-group">
                                <label htmlhtmlFor="exampleFormControlSelect2">Answare #1</label>
                                <select  className="form-control" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>



                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Security question #2</label>
                                <select  className="form-control" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                          
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Answare #2</label>
                                <select  className="form-control" id="exampleFormControlSelect2">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                        </div>
                    </div>





                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <button className='my-2 text-uppercase  rounded-3 text-center px-5 py-1 text-white  border-0'
                            style={{ backgroundColor: 'var(--primary-color)', }}>continue</button>

                        <button className='text-uppercase  text-center text-danger
     px-5 py-1   border-0 bg-transparent'
                        >cancel</button>



                    </div>

                </div>
            </div>
        </section>
    )
}
