import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addMov, removeMov, loadMov } from '../store/actions/movActions'
import history from '../history';

export const MovieStrip = ({ mov, btnAdd, btnRemove }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const doAdd = () => {
        console.log('hey');
    }


    return (
        <div className="rb movie-strip">
            <div className="ral">
                <div className="add-button-col">

                    {/* ADD Button */}
                    {btnAdd ? <button className="btn2 lnk-btn" onClick={() => {
                        dispatch(addMov(mov));
                        dispatch(loadMov());
                        history.push("/movies");

                    }
                    }>
                        <i className="fas fa-plus"></i>Add to cinema</button> : null}

                    {/* REMOVE Button */}
                    {btnRemove ? <button className="btn-del lnk-btn" onClick={() => {
                        dispatch(removeMov(mov._id));
                        history.push("/movies");
                    }
                    }>
                        <i className="far fa-trash-alt"></i>Remove</button> : null}
                </div>
                <p className="movie-title">{mov.name}</p>
            </div>
            <div className="add-show-strip ral">

                <button className="add-button-col btn2 lnk-btn" onClick={() => setEdit(!edit)}>add to schedule</button>
            </div>
            <div className="movie-id">{edit ?

                <form onSubmit={doAdd} className="ral">
                    <input type="number" name="hall" placeholder="Hall" /><br />
                    <input type="time" name="time" placeholder="time" /><br />
                    <div><button >Add</button><br /></div>
                </form>

                : 'no'}</div>
            <p className="movie-id">id: {mov.id}</p>
        </div>
    )
}
