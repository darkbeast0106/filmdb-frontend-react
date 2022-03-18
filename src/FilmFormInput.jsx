import React, { Component } from 'react';
class FilmFormInput extends Component {
    handleInput = (e) => {
        const { onInput } = this.props;
        if (onInput) {
            onInput(e.target.value)
        }
    }
    render() { 
        const { id, placeholder, type = "text", otherAttributes, value } = this.props;
        return (
            <div className="mb-3">
                <label htmlFor={id}>{placeholder}</label>
                <input type={type} {...otherAttributes} className="form-control" id={id} placeholder={placeholder} value={value} onInput={this.handleInput} />
            </div>);
    }
}
 
export default FilmFormInput;