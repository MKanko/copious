import React from 'react'
import { Field, reduxForm } from 'redux-form'


class NoteForm extends React.Component {

    

    render() {
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>  
                    <Field name="content" component={this.renderInput} label="Write Notes" />
                   
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }   
}



// const mapDispatchToProps = (dispatch) => {
//     return {
//         createStream: (formValues) => dispatch(createStream(formValues))
//     }
// }

export default reduxForm({ form: 'NoteForm' })(NoteForm)
