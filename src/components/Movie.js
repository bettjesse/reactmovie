import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL,POSTER_SIZE } from "../config";
//components
import BreadCrumb from "./BreadCrumb";
import Grid from "./Grid"
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
//HOOK
import { useMovieFetch } from "../Hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg"


const Movie = () => {
    const{movieID} = useParams()
    const {state:movie,loading,error} = useMovieFetch(movieID)
    console.log(movie)
    if(loading) return <Spinner/>
    if(error) return <div>Something went wrong...</div>
    return (
        <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar time={movie.rutime} 
                      budget={movie.budget}
                      revenue={movie.revenue}
                      />
        </>
    )
}
export default Movie; 