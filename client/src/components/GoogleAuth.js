import React from 'react'


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '336044228262-0uk6f92mpfsu7e9olrd7ru4crna94jac.apps.googleusercontent.com',
                scope: 'email'  
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    render() {
        return (
           <div>
               Google Auth
           </div> 
        )
    }
}


export default GoogleAuth