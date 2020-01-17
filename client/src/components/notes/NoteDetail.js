import React from 'react'
import NoteCreate from './NoteCreate'


class NoteDetail extends React.Component {
    state = { content: '' }

    onInputChange = (event) => {
        this.setState({ content: event.target.value })
    }

    render() {
        const note = { userId: this.props.userId, videoId: this.props.videoId, noteContent: this.state.content }

        const createForm = <NoteCreate userId={this.props.userId} videoId={this.props.videoId} />
        
        const saveButton = <button>Save</button>

        const renderButton = (this.props.note && this.props.note.data) ? saveButton : createForm 

        return (
            <div className="ui grey segment">
                <div className="ui form">
                    <div className="field">
                        <label>Tutorial Notes</label>
                        {/* <textarea 
                            type="text" 
                            value={this.state.content} 
                            onChange={this.onInputChange} 
                        ></textarea> */}
                        {renderButton}
                    </div>
                </div>                          
            </div>
        )
    }
}


export default NoteDetail

// console.log(props)
//a function that checks props to see if note exists to determine which button to display
// the logic involved in searching db for note will be in notesContainers and passed to noteDetail as props