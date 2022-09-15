import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React ,{ useState,useEffect,useRef } from "react";
//image
import searchIcon from "../../images/search-icon.svg"
//styles
import { Wrapper,Content } from "./SearchBar.styles";

const SearchBar = ({setSearchTerm})=> {
    const[state,setState] = useState("")
    const initial= useRef(true)
    // timer when fetching data 
    useEffect(()=>{
        if(initial.current){
            initial.current= false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        
        },500);
        return ()=> clearTimeout(timer)
    },[setSearchTerm,state])
   
    return(
<Wrapper>
<Content>
<img src = {searchIcon} alt= "search-icon" />
<input 
type= "text" 
placeholder="search movie" 
onChange = {event=>setState(event.currentTarget.value)}
value= {state}
/>
     
</Content>


</Wrapper>

    )
} 
export default SearchBar;


