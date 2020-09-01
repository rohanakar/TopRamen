import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Countries.css';
import Search from './Search';

import list from '../resources/list.svg';


const Country = ({ country }) => {

    const [tooltip,setTooltip] = useState([['Top Brands','Stars'],['Year','Top Ten']]);
    const { countryMap, query } = useSelector(state => state.dataReducer);
    return (
        <div><div style={{display:'flex'}}>
            <div  style={{padding:'20px',textAlign:'center',fontSize:'40px'}}>
                {country}
                </div>
            <Search />
            </div>
            <div className='top-brands' > {tooltip[0][0] + '-' +  tooltip[0][1]}
            
            <div className="tooltip">
                <img className="search-button tooltip" src={list} width={25} alt="Logo" onClick={() => {
                    setTooltip([...tooltip.reverse()])
                }} /> <span className="tooltiptext">{tooltip[1][0] +"-" +  tooltip[1][1]}</span>
            </div>
            </div>
           
            <br></br>
            {getTopBrands(countryMap[country],tooltip[0][1],query)}
        </div>
    )

}

const getTopBrands = (data,sortParam,query) => {
    data.sort(function (x, y) {
        if(sortParam === 'Top Ten' )
            return x[sortParam].split('#')[1] - y[sortParam].split('#')[1];
        else
            return y[sortParam] - x[sortParam];
    });

    let op = [];
    let ind = 0;
    data.forEach((brand) => {
        if( !query || brand['Brand'].toUpperCase().indexOf(query.toUpperCase()) !== -1  ){
            op.push(
                <div className='brand' key={ind}  >
                    {brand['Brand']} - {brand['Variety']} - {brand['Style']}
                    <br></br>
                    <b>TopTen</b> - {brand['Top Ten']}<br></br>
                    <b>Stars</b> - {brand['Stars']}
                </div>
            )
        ind++;
        }
    });
    return op;

}

export default Country;