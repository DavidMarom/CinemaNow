import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addMov, removeMov, loadMov } from '../store/actions/movActions'
import history from '../history';

export const MovieStripLib = ({ mov, btnAdd, btnRemove }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const doAdd = () => {
        console.log('hey');
    }

    let trash = (<i className="far fa-trash-alt"></i>);

    let addForm = (
        <form onSubmit={doAdd} className="ral">
            <input type="number" name="hall" placeholder="Hall" />
            <input type="date" name="date" placeholder="date" />
            <input type="time" name="time" placeholder="time" />
            <div><button >Add</button><br /></div>
        </form>);

    return (
        <div className="rb movie-strip">
            {/* LEFT */}
            <div className="ral">

                <button className="btn-del lnk-btn"
                    onClick={() => {
                        dispatch(removeMov(mov._id));
                        history.push("/movies");
                    }}>
                        {trash}
                </button>

                <p className="movie-title">{mov.name}</p>
                <button className="btn2 lnk-btn" onClick={() => setEdit(!edit)}>Add Show</button>
                <div className="">{edit ? (addForm)   : null }</div>
            </div>


            {/* RIGHT */}
            <div className="h-center">
                <p className="movie-id">id: {mov.id}</p>
            </div>


        </div>

    )
}
