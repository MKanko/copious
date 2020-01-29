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
        console.log(formProps)                // if the input field renders as error the box will be red
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
        console.log('noteForm has rendered')
        
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>  
                    <Field name="content" component={this.renderInput} label="Make Copious Notes" />                 
                    <button className="ui button primary">{this.props.buttonText}</button>
                </form>
            </div>
        )
    }   
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.content) {
        errors.content = 'You must enter notes'
    }
    return errors 
}



export default reduxForm({ form: 'NoteForm', validate: validate, enableReinitialize: true, destroyOnUnmount: false })(NoteForm)


 //    might have used enableReinitialize to try to fix the bome bug