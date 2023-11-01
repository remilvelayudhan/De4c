import React from 'react'
import customerCare from '../../assets/customer_care.svg'
import business from '../../assets/business.svg'
import identification from '../../assets/identification.svg'
import help from '../../assets/help.svg'
import bill from '../../assets/bill.svg'
import outages from '../../assets/outages.svg'
import stop from '../../assets/stop.svg'
import { useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate();






  return (
    <>
    <div className='d-flex w-100 d-flex justify-content-center d-none d-md-block' style={{ backgroundColor: 'var(--primary-light-color)' }}>
                <ul className='fw-bold p-3 my-0 d-flex justify-content-center'>
                    <li className="nav-item dropdown list-unstyled  mx-3">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Account
                        </a>
                        <ul className="dropdown-menu " >
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown list-unstyled   mx-3">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Billing & Payment
                        </a>
                        <ul className="dropdown-menu " >
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown list-unstyled   mx-3">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products & Services
                        </a>
                        <ul className="dropdown-menu " >
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown list-unstyled   mx-3">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Start, Stop & Move
                        </a>
                        <ul className="dropdown-menu " >
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown list-unstyled   mx-3">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Outage
                        </a>
                        <ul className="dropdown-menu " >
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown list-unstyled   mx-3">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Customer Services
                        </a>
                        <ul className="dropdown-menu " >
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                            <li><a className="dropdown-item" href="#" style={{ color: 'var(--primary-color)' }}>sample1</a></li>
                        </ul>
                    </li>
                </ul>


                <div>

                </div >
            </div>

    <div className='bg-dark'>



      <div className='fw-bold fs-3 text-white pt-3 text-center'>How can we help you?</div>

      <div className='d-flex justify-content-center align-items-center flex-wrap' >
        <div className='card rounded m-4 d-flex  flex-column 
                 align-items-center bg-white border border-secondary-subtle shadow'
          style={{
            width: '250px', height: '180px'
          }}  onClick={()=> navigate("/start")}>
          <img src={bill} alt='individual' height='100px' width='100px' />
          <div className=' fw-bold fs-5 text-center pt-4' style={{ color: 'var(--primary-color)' }}>
            Pay My Bill
          </div>

        </div>

        <div className='card rounded m-4 d-flex  flex-column 
                 align-items-center bg-white border border-secondary-subtle shadow'
          style={{
            width: '250px', height: '180px'
          }}>
          <img src={stop} alt='individual' height='100px' width='100px' />
          <div className=' fw-bold fs-5 text-center pt-4' style={{ color: 'var(--primary-color)' }}>
            Start/Stop Services
          </div>

        </div>

        <div className='card rounded m-4 d-flex  flex-column 
                 align-items-center bg-white border border-secondary-subtle shadow'
          style={{
            width: '250px', height: '180px'
          }}>
          <img src={outages} alt='individual' height='100px' width='100px' />
          <div className=' fw-bold fs-5 text-center pt-4' style={{ color: 'var(--primary-color)' }}>
            Outages
          </div>

        </div>

        <div className='card rounded m-4 d-flex  flex-column 
                 align-items-center bg-white border border-secondary-subtle shadow'
          style={{
            width: '250px', height: '180px'
          }}>
          <img src={help} alt='individual' height='100px' width='100px' />
          <div className=' fw-bold fs-5 text-center pt-4' style={{ color: 'var(--primary-color)' }}>
            Financial Help
          </div>

        </div>

      </div>








    </div>
    </>
  )
}
