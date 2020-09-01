import React from 'react';
import { useSelector } from 'react-redux';
import './Countries.css';
import { useHistory } from "react-router-dom";

const Countries = () => {
    const history = useHistory();
    const { countryMap } = useSelector(state => state.dataReducer);
    return (
        <div>
            <br/>
            <br/>
            <br/>
            Click on country to know the various restaurants
       
            <div className="country-cards">
                {getJSXFromCountryMap(countryMap,history)}
            </div>
        </div>
    )
}

const getJSXFromCountryMap = (countryMap,history) => {
    

    if (!countryMap)
        return null;
    let op = [];
    Object.keys(countryMap).forEach((country) => {
        op.push(
            <div key={country} className='country-card' onClick={()=>{history.push("/country/"+country)}}>
                {country}
            </div>

        )
    }
    );
    return op;
}



export default Countries;