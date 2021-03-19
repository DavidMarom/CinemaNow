import React, { useState, useEffect } from 'react'
import { tmdbService } from '../services/tmdbService'

export const Explore = () => {
    const [searchVal, setSearchVal] = useState('');
    const [lastTime, setlastTime] = useState(Date.now());
    const [que, setQue] = useState(0);

    useEffect(() => { // search field changed
        if (searchVal) {
            if ((Date.now() - lastTime) > 2000) { // if slow enough
                tmdbService.getMovie(searchVal).then(res => { console.log(res) }) // Do API call
                setlastTime(Date.now());


            } else {
                setQue(que + 1);
                setTimeout(function () {
                    if (que === 1 || que < 1) {
                        tmdbService.getMovie(searchVal).then(res => { console.log(res) }) // Do API call
                        setlastTime(Date.now());
                        setQue(que - 1);

                    }
                }, 1000);
            }

        } // if searchVal
    }, [searchVal]);


    return (
        <div>
            <h2>Explore new movies</h2>
            <div className="search-bar ral">
                <input className="input"
                    value={searchVal}
                    type="text"
                    onChange={ev => { setSearchVal(ev.target.value); }} />
            </div>
        </div>
    )
}