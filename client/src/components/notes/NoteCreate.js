import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../actions'
import NoteForm from './NoteForm'


class NoteCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createNote(formValues)
    }
    render() {
        return (
            <div>
                {/* <h3>Create a Stream</h3> */}
                <NoteForm onSubmit={this.onSubmit} />
            </div>
        )
    }   
}
const mapDispatchToProps = (dispatch) => {
    return {
        createNote: (formValues) => dispatch(createNote(formValues))
    }
}
export default connect(null, mapDispatchToProps)(NoteCreate)