import React from 'react'
import moment from 'moment'

export const ShowStrip = ({ show }) => {

  return (
    <div className="rb movie-strip">

      <p className="movie-title">{show.title}</p>
      <p className="movie-title">Hall: {show.hall}</p>
      {/* <p className="movie-title">{moment.unix(show.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}</p> */}
      <p className="movie-title">{show.date}</p>
      <p className="movie-title">{show.time}</p>

    </div>
  )
}
