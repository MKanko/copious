import React from 'react'
import GoogleAuth from './GoogleAuth'


const SignIn = () => {
    return (
        <div className="ui placeholder segment">
            <div>
                <h2 align="center">
                    Copious
                </h2>
                <h4 align="center">
                    Sign In
                </h4>
                <GoogleAuth />
            </div>
            
        </div>
    )
}


export default SignIn