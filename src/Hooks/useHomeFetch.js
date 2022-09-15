import {useState,useEffect} from "react"
//API
import API from "../API"

export const useHomeFetch = ()=> {

    const initialState = {
        pages:0,
        results:[],
        total_pages:0,
        total_results:0
    }
const [searchTerm,setSearchTerm] = useState("")
const [state, setState] = useState(initialState)
const [ loading,setLoading] = useState(false)
const [error, setError] = useState(false)
const [isLoadingMore,setIsLoadingMore] = useState(false)

const fetchMovies = async(page,SearchTerm = "") => {
try{
setError(false)
setLoading(true)
const movies= await API.fetchMovies(SearchTerm,page)


setState(prev=> ({
...movies,
results: 
page > 1? [...prev.results,...movies.results] : [...movies.results]

}))
} catch(error){
setError(true)
}
setLoading(false)

}
//initial  mount & search
useEffect(()=>{
    setState(initialState)
fetchMovies(1, searchTerm)
},[ searchTerm])

//loading

useEffect(()=> {
    if(!isLoadingMore) return;
fetchMovies(state.page +1, searchTerm)
setIsLoadingMore(false)
},[isLoadingMore,searchTerm, state.page])
return {state,loading,error,searchTerm,setSearchTerm,setIsLoadingMore}
}
