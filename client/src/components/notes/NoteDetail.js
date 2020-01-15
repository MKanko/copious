import React from 'react'


const NoteDetail = (props) => {
    // const renderButton = a function that checks props to see if note exists to determine which button to display
    // the logic involved in searching db for note will be in notesContainers and passed to noteDetail as props
    return (
        <div className="ui grey segment">
            <form className="ui form">
                <div className="field">
                    <label>Tutorial Notes</label>
                    <textarea></textarea>
                    {/* {renderButton} */}
                </div>               
            </form>
        </div>
    )
}


export default NoteDetail