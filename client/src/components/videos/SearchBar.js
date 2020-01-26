import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    }

     onFormSubmit = (event) => {
         event.preventDefault()
         this.props.onFormSubmit(this.state.term)
     }

    render() {
        return (
            <div className="ui item">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui icon input">
                            <input 
                                type="text"
                                value={this.state.term}
                                onChange={this.onInputChange}
                                placeholder="Search Tutorials" 
                            />
                            <i className="search link icon"></i>
                        </div>                       
                    </div>
                </form>
            </div>
        )
            
    }
} 

export default SearchBar 