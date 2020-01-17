import React from 'react'
import _ from 'lodash' 
import { connect } from 'react-redux'
import { editNote } from '../../actions'
import NoteForm from './NoteForm'

class NoteEdit extends React.Component {

    onSubmit = (formValues) => {
        this.props.editNote(this.props.note.data.id, { ...formValues, videoId: this.props.videoId, userId: this.props.userId })
    }
    
    render() {
        if (!this.props.note) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return (
            <div>
                {/* <h3>Edit a Stream</h3> */}
               <NoteForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.note.data.attributes, 'content')} /> 
            </div>
        )
    }                          
}                 

const mapStateToProps = (state) => {
    return { note: state.notes.selectedNote }  
}

export default connect(mapStateToProps, { editNote })(NoteEdit)
