import React from 'react'
import './Stepper.css'

export const Stepper = ({ step }) => {
 
    return (

        <div className="md-stepper-horizontal mt-2">
            <div className={"md-step " + (step >= 1 ? 'active' : '')}>
                <div className="md-step-circle"><span>1</span></div>
                <div className="md-step-title">Address</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>
            <div className={"md-step " + (step >= 2 ? 'active' : '')}>
                <div className="md-step-circle"><span>2</span></div>
                <div className="md-step-title">Date of Services</div>
                {/* <div className="md-step-optional">Optional</div> */}
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>
            <div className={"md-step " + (step >= 3 ? 'active' : '')}>
                <div className="md-step-circle"><span>3</span></div>
                <div className="md-step-title">Identification</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>

        </div>

    )
}

