import React, { useState } from 'react'
import { useDispatch } from "react-redux";
// import moment from 'moment'
import { removeShow } from '../store/actions/showActions'
import history from '../history';
import { updateShow } from '../store/actions/showActions'


export const ShowStrip = ({ show }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const [hall, setHall] = useState(show.hal);
  const [time, setTime] = useState(show.time);

  let trash = (<i className="far fa-trash-alt"></i>);


  const doAdd = (event) => {
    event.preventDefault();
    const jsObj = Date.parse(time); // to unix time
    let newShow = { title: show.name, hall: hall, time: time, ts: jsObj }
    dispatch(updateShow(newShow));
    setEdit(false);
  }


  let addForm = (
    <form onSubmit={doAdd} className="ral">

      <input type="number" name="hall" onChange={ev => { setHall(ev.target.value); }} placeholder="Hall" />
      <input type="datetime-local" name="time" onChange={ev => { setTime(ev.target.value); }} />

      <div><button>Update</button></div>
    </form>);

  return (
    <div className="rb movie-strip">

      {/* LEFT */}
      <div className="ral">

        <button className="btn-del lnk-btn"
          onClick={() => {
            dispatch(removeShow(show._id));
            history.push("/shows");
          }}>
          {trash}
        </button>

        <p className="movie-title">{show.title}</p>
        <p className="movie-title">Hall: {show.hall}</p>
        <p className="movie-title">{show.time}</p>



        <button className="btn2 lnk-btn" onClick={() => setEdit(!edit)}>
          {edit ? <p>◄ Cancel</p> : <p>update</p>}
        </button>
        <div>{edit ? (addForm) : null}</div>

      </div>

      {/* <div className="ral"></div> */}


    </div>
  )
}
