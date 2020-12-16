import React from 'react'

export default function MovieDetails(props) {
    return (
        <div className={"col-md-6"} >
                  <div className="card text-white bg-success mb-3">
                   <button 
                    onClick={
                      () => {
                        props.setOpened({});
                        props.setMd(12);
                      }
                    }
                   className="btn btn-success btn-xs"
                   >X</button>
                    <div className="card-body">
                      <div className="card-title">
                        <div className="row">
                          <div className="col-md-4">
                            <img style={{maxWidth: "80%"}} src={"https://image.tmdb.org/t/p/original/" + props.opened.poster_path} alt={props.opened.title} />
                          </div>
                          <div className="col-md-8">
                            <h4>{props.opened.title} </h4>
                            <br/>
                            <h5>{props.opened.vote_average} / 10</h5>
                          </div> 
                        </div>
                      </div>
                      <p className="card-text">{props.opened.overview}</p>
                    </div>
                  </div>
                </div>
    )
}
