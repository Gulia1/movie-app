import React from 'react'

function SearchMovie(pros) {
    return (
        <form onSubmit={
            (e) =>{
              e.preventDefault();
              if(pros.searchString != "")
                pros.fetchSearchedMovie(pros.searchString);
              else
                pros.fetchmovies();
            }
          }>
            <fieldset style={{borderRadius: "50%", borderColor:"#f3f3f3"}}>
            <div class="form-group row">
              <div class="col-sm-10">
                <input 
                  type="text" 
                  onChange={(e) =>{pros.setSearchString(e.target.value)}}
                  className="form-control-plaintext" 
                  id="searchText" 
                  placeholder=" Search Movie  " 
                />
              </div>
            </div>
            </fieldset>
          </form>
    )
}

export default SearchMovie
