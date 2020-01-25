import React from 'react'
import NoteCreate from './NoteCreate'
import NoteEdit from './NoteEdit'


class NoteDetail extends React.Component {


    render() {
        // const note = { userId: this.props.userId, videoId: this.props.videoId, noteContent: this.state.content }

        const createForm = <NoteCreate userId={this.props.userId} videoId={this.props.videoId} videoTitle={this.props.videoTitle} />
        
        const editForm = <NoteEdit note={this.props.note} userId={this.props.userId} videoId={this.props.videoId} />

        const renderForm = (this.props.note && this.props.note.data) ? editForm : createForm 

        return (
            <div className="ui grey segment">
                <div className="ui form">
                    <div className="field">
                        <label></label>
                        {renderForm}
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