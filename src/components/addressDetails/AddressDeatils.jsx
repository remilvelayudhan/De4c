import React from 'react'
import location from '../../assets/loc_hom.svg'

export const AddressDeatils = () => {
    return (
        <div className='mx-3'>

            <div className='fw-bold fs-4 mt-4 text-center'>We found your address</div>

            <div className='d-flex justify-content-around
             align-items-center mt-2 '
                style={{ backgroundColor: 'var(--primary-light-color)' }}>
                <img src={location} alt='location' height='50px' width='50px' className='p-2'></img> <div>  57c5bc61-e883-482a-a645-071b4f6fdd23</div>
            </div>
            <div className='bg-white '   >
                ------------------      Google Map --------------------
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
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        No
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Yes
                    </label>
            </div>

        </div>
    )
}
