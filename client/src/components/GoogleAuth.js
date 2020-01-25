import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import history from '../history'



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

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
            history.push('/videos/show')           
        } else {
            this.props.signOut()
            history.push('/')
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null 
        } else if (this.props.isSignedIn) {
            return (
                <button className="mini ui blue google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out 
                </button>
            )
        } else {
            return (
                <button className="mini ui blue google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In with Google 
                </button>
            )
        }
    }

    render() {
        return (
           <div className="ui item">
               {this.renderAuthButton()}
           </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (userId) => dispatch(signIn(userId)),
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth)