import React  from 'react'
import { useDispatch } from "react-redux";
import { addMov , removeMov } from '../store/actions/movActions'
import history from '../history';

export const MovieStrip = ({ mov, btnAdd, btnRemove }) => {
console.log(mov);
    const dispatch = useDispatch();

    return (
        <div className="rb movie-strip">
            <div className="ral">

                <div className="add-button-col">

{/* ADD Button */}
                    {btnAdd ? <button className="btn2 lnk-btn" onClick={() => {
                        dispatch(addMov(mov));
                        history.push("/movies");

                    }
                }>
                        <i className="fas fa-plus"></i>Add to cinema</button>
                        : null}

{/* REMOVE Button */}
                    {btnRemove ? <button className="btn2 lnk-btn" onClick={() => {
                        dispatch(removeMov(mov._id));
                        history.push("/movies");

                    }
                    }>
                        <i className="far fa-trash-alt"  ></i>Remove</button>
                        : null}

                </div>

                <p className="movie-title">{mov.name}</p>
            </div>
            <p className="movie-id">{mov.id}</p>

        </div>
    )
}
