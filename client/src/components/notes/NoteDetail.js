import React from 'react'
import NoteCreate from './NoteCreate'
import NoteEdit from './NoteEdit'


class NoteDetail extends React.Component {


    render() {

        const createForm = <NoteCreate 
                                userId={this.props.userId} 
                                videoId={this.props.videoId} 
                                videoTitle={this.props.videoTitle} 
                            />      
        const editForm = <NoteEdit 
                            note={this.props.note} 
                            userId={this.props.userId} 
                            videoId={this.props.videoId} 
                        />
        const renderForm = (this.props.note && this.props.note.data) ? editForm : createForm 

        return (
            <div className="ui black segment">
                <div className="ui form">
                    <div className="field">
                        {renderForm}
                    </div>
                </div>                          
            </div>
        )
    }
}


export default NoteDetail

