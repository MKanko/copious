import React from 'react'
import NoteCreate from './NoteCreate'
import NoteEdit from './NoteEdit'


class NoteDetail extends React.Component {

    state = {
        message: '' 
    }

    componentDidUpdate(prevProps) {
        if (prevProps.message !== this.props.message) {
            this.setState({
                message: this.props.message
            })
        }  
    }

    resetMessage = () => {
        this.setState({
            message: ''
        })
    }
    

    render() {
console.log(this.props, this.state)
        const createForm = <NoteCreate 
                                userId={this.props.userId} 
                                videoId={this.props.videoId} 
                                videoTitle={this.props.videoTitle}
                                resetMessage={this.resetMessage} 
                            />      
        const editForm = <NoteEdit 
                            note={this.props.note} 
                            userId={this.props.userId} 
                            videoId={this.props.videoId}
                            resetMessage={this.resetMessage}  
                        />
        const renderForm = (this.props.note && this.props.note.data) ? editForm : createForm 

        return (
            <div className="ui black segment">
                <div className="ui form">
                    <div className="field">
                        {renderForm}
                    </div>
                </div>
                {this.state.message}                          
            </div>
        )
    }
}


export default NoteDetail

