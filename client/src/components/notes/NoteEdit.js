import React from 'react'
import _ from lodash 
import { connect } from 'react-redux'
import { editNote } from '../../actions'
import NoteForm from './NoteForm'

class NoteEdit extends React.Component {

    onSubmit = (formValues) => {
        this.props.editNote(this.props.match.params.id, formValues)
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
               <NoteForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.note, 'content')} /> 
            </div>
        )
    }                          
}                 




const mapStateToProps = (state) => {
    return { note: state.notes.selectedNote } // see note below 
}
export default connect(mapStateToProps, { editNote })(NoteEdit)
