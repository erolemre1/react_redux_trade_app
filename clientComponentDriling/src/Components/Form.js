import React from 'react';
import { useState } from "react"

function Form() {
    let [userName, setUserName] = useState("")
    let [city, setCity] = useState("")
    const onInputChange = (e) => {
        setUserName(e.target.value)
    }
    const oncityChange = (e) => {
            setCity(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        alert(userName)
    }
    return (
        <div className="App mt-5">
            <form onSubmit={onSubmitHandler}>
                <h3>User Name {userName}</h3>
                <input name="userName" onChange={onInputChange} type="text" placeholder="Enter User Name" ></input>
                <br />
                <h3>City {city}</h3>
                <input name="city" onChange={oncityChange} type="text" placeholder="Enter City" ></input>
                <br />
                <input type="submit" className="bg-success text-white px-3 py-2 mt-3" value="Save" />

            </form>
        </div>
    )
}

export default Form
