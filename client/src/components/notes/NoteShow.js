import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getNote } from '../../actions'
import NoteHeader from './NoteHeader'
import NoteEdit from './NoteEdit'

class NoteShow extends React.Component {

    componentDidMount() {
        this.props.getNote(this.props.match.params.id)
    }

    render() {
        let editForm
        let title
        if (this.props.note && this.props.note.data) {    
            editForm = <NoteEdit 
                            note={this.props.note} 
                            userId={this.props.note.data.attributes.userId} 
                            videoId={this.props.note.data.attributes.videoId} 
                        />
            title = this.props.note.data.attributes.title
        }

        return (
            <div className="ui container">
                <NoteHeader />
                <div className="ui grey segment">
                    <div className="ui form">
                        <div className="field">
                            <Link to={{
                                pathname: '/videos/show',
                                state: {
                                    title: title
                                }
                            }}>{title}</Link>
                            {editForm}
                        </div>
                    </div>                          
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { note: state.notes.note }
}


export default connect(mapStateToProps, { getNote })(NoteShow)

