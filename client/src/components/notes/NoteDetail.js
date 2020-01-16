import React from 'react'


const NoteDetail = (props) => {
    const createButton = <button>Create</button>
    const saveButton = <button>Save</button>

    const renderButton = (props.note && props.note.data) ? saveButton : createButton 
    // console.log(props)
    //a function that checks props to see if note exists to determine which button to display
    // the logic involved in searching db for note will be in notesContainers and passed to noteDetail as props
    return (
        <div className="ui grey segment">
            <form className="ui form">
                <div className="field">
                    <label>Tutorial Notes</label>
                    <textarea></textarea>
                    {renderButton}
                </div>               
            </form>
        </div>
    )
}


export default NoteDetail