import React from 'react'

function Movies(props) {
    return (
        <div>
            <div className="list-group">
              {
                props.movies.map(
                  movie => (
                  <button 
                    key={movie.id} 
                    onClick={
                      () => { 
                        props.setMd(6);
                        props.setOpened(movie);
                      }
                    } 
                    className="list-group-item list-group-item-action">{movie.title}
                  </button>
                  )
                )
              }
              </div>
        </div>
    )
}

export default Movies
