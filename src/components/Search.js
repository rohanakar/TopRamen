import React,{useState} from 'react';
import search from '../resources/search.svg';
import './Search.css';
import { useDispatch } from 'react-redux';
import { updateData } from '../redux/actions';
const Search = () => {

    const dispatch = useDispatch();
    const [input,setInput] = useState('');
    const searchCountry = (query) =>{
        dispatch(updateData({ query: query }));
    }
    
    return (
        <div className="search-main">
            <input type="text" className="input" placeholder="Search..." 
                onChange={(e)=>{setInput(e.target.value) ;searchCountry(e.target.value)}} value={input}/>
            <img className="search-button" src={search} width={25} alt="Logo" onClick={()=>{
                searchCountry(input)
            }}/>
        </div>
    )
}


export default Search;