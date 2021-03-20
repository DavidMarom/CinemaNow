import React from 'react'
import moment from 'moment'

// import { useDispatch } from "react-redux";
// import { addShow, removeShow } from '../store/actions/showActions'
import history from '../history';

export const ShowStrip = ({ show }) => {
  console.log(show);
  // const dispatch = useDispatch();

  return (
    <div className="rb movie-strip">

      <p className="movie-title">{show.title}</p>
      <p className="movie-title">Hall: {show.hall}</p>
      <p className="movie-title">{moment.unix(show.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</p>

    </div>
  )
}
