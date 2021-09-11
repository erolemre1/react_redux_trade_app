import React from 'react'

const SelectInput = ({ name, label, onChange, value, error, defaultOtions, options, }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="text-info h3"> {label}</label>
            <select name={name} value={value} onChange={onChange} className="form-control">
                <option value="">
                    {defaultOtions}
                </option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
            {error && <div className="alert alert-danger"> {error} </div>}

        </div>
    )
}


export default SelectInput;
