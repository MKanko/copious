import React from 'react'
import { Field, reduxForm } from 'redux-form'


class NoteForm extends React.Component {

    renderError = (formProps) => {      
        if (formProps.meta.touched && formProps.meta.error) { 
            return (
                <div className="ui error message">
                    <div className="header">{formProps.meta.error}</div>
                </div>
            )
        }       
    }

    renderInput = (formProps) => {
        const className = `field ${formProps.meta.touched && formProps.meta.error ? 'error' : ''}`
        //console.log(formProps)
        return (
            <div className={className}> 
                <label>{formProps.label}</label>
                <textarea {...formProps.input} autoComplete="off" />
                {this.renderError(formProps)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)           
    }

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
