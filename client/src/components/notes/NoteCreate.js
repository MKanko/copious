import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../actions'
import NoteForm from './NoteForm'


class NoteCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createNote({ ...formValues, videoId: this.props.videoId, userId: this.props.userId, title: this.props.videoTitle })
    }
    render() {
        return (
            <div>
                <NoteForm buttonText={'Create Note'} onSubmit={this.onSubmit} initialValues={{ content: "" }} resetMessage={this.props.resetMessage} />
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