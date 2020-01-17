import React from 'react'
import NoteCreate from './NoteCreate'


class NoteDetail extends React.Component {
    constructor(props) {
        super(props)

        if (props.notes) {
            this.state = { content: this.props.notes.selectedNote.data.attributes.content }
        } else {
            this.state = {content: ""}
        }
        console.log(props)
        console.log(this.state)
    }

    onInputChange = (event) => {
        this.setState({ content: event.target.value })
    }

    render() {
        const note = { userId: this.props.userId, videoId: this.props.videoId, noteContent: this.state.content }

        const createButton = <button type="ui button" onClick={() => this.props.createNote(note)}>Create</button>
        const saveButton = <button>Save</button>

        const renderButton = (this.props.note && this.props.note.data) ? saveButton : <NoteCreate />

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