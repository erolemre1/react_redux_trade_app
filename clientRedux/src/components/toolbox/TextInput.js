import React from 'react'

const TextInput = ({ name, label, placeHolder, error, value, onChange }) => {
    let wrapperClass = "form-group"
    if (error && error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name} className="text-info h3">{label}</label>
            <div className="field">
                <input type="text" name={name} className="form-control" placeholder={placeHolder} value={value} onChange={onChange} />
                {error && <div className="alert alert-danger"> {error} </div>}
            </div>

        </div>
    )
}

export default TextInput;
