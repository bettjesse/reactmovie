import React from "react";
import {Link} from "react-router-dom"
//styles
import { Image} from "./Thumb.styles";


const Thumb = ({clickable, movieId, image})=> (
<div>
   
        <Link to ={`/${movieId}`} >
              <Image src= {image} alt = "movie-thumb"></Image>
        </Link>


    
    

    


    

   
</div>

)
export default Thumb;