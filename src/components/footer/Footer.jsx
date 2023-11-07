import React from 'react'

export const Footer = () => {
  return (
    <footer className='container-fluid p-0 mt-2  bottom-0 border-top border-3 '>
    <section className='text-center my-2 '>
        <div >
            <i className="bi bi-facebook h2 text-center m-3 " style={{ color: 'var(--primary-color)' }}></i>
            <i className="bi bi-instagram h2 m-3 " style={{ color: 'var(--primary-color)' }}></i>
            <i className="bi bi-twitter-x h2 m-3 " style={{ color: 'var(--primary-color)' }}></i>
            <i className="bi bi-linkedin h2 m-3 " style={{ color: 'var(--primary-color)' }}></i>
        </div>
        <div className='mt-2'>
            Automated Outage Reporting:<span className='fw-bold'> 1-888-554-4852</span>
        </div>
        <div>
            Call Before You Dig: <span className='fw-bold'>811</span>
        </div>

    </section>
</footer>
  )
}
