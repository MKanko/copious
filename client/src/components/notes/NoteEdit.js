import React from 'react' 
import { connect } from 'react-redux'
import { editNote, fetchNote } from '../../actions'
import NoteForm from './NoteForm'


class NoteEdit extends React.Component {

    onSubmit = (formValues) => {
        this.props.editNote(this.props.note.data.id, { ...formValues, videoId: this.props.videoId, 
            userId: this.props.userId })
    }
    
    render() {
        if (!this.props.note) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    console.log('note edit render')
    console.log(this.props)
        return (
            <div>
               <NoteForm buttonText={'Edit Note'} onSubmit={this.onSubmit} initialValues={{ content: this.props.note.data.attributes.content }} /> 
            </div>
        )
    }                          
}                 

export default connect(null, { editNote, fetchNote })(NoteEdit)
