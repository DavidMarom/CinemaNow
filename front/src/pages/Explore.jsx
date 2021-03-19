import React, { useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";

export const Explore = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('click');
    }

    return (
        <div>
            <h2>Explore new movies</h2>
            <div className="search-bar ral">
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" />
                    <button type="submit" value="Submit">Hey</button>
                </form>
            </div>
        </div>
    )
}