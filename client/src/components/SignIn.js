import React from 'react'
import GoogleAuth from './GoogleAuth'
import './SignIn.css'


const SignIn = () => {
    return (
        <div className="ui container">
            <div className="ui placeholder segment">
                <div>
                    <h2 align="center">
                        Copious
                    </h2>
                    <GoogleAuth />
                </div>      
            </div>
        </div>
    )
}


export default SignIn