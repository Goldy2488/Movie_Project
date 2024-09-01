import React, { useState } from "react";
import { movies } from "./data.js";
const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  // filter by the btn 
  const filterByCategory = (categ) =>{
    setMovieList(movies.filter((data)=> data.category == categ ))
  }
  return (
    <>
      <div className="my-3 text-center" >
        <button onClick={()=>setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3">
          All
        </button>
        <button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-outline-secondary mx-3">
          Action
        </button>
        <button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-outline-light mx-3">
          Thriller
        </button>
        <button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-outline-danger mx-3">
          Horror
        </button>
        <button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-outline-warning mx-3">
          Drama
        </button>
        <button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-outline-info mx-3">
          Animation
        </button>
        <button onClick={()=>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">
          Sci-Fi
        </button>
        
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          textAlign: "center",
          width: "1300px",

          margin: "auto",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "300px", textAlign: "center" }}>
            <div className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h3 style={{fontSize:"20px"}}>{data.title}</h3>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
