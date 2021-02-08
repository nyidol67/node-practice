import React from 'react';

function PriceFilter(props){
    const {handleChange} = props;
    return(
            <select onChange={(e)=>handleChange(e.target.value.split(","))}>
                <option value = "" selected disabled>Price Range</option>
                <option value = "0,500">0-500</option>
                <option value = "500,1000">500-1000</option>
                <option value = "1000,5000">1000-5000</option>
            </select>
    )
}
export default PriceFilter;