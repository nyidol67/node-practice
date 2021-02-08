import React from 'react';

function Sort(props){
    const {handleChange} = props;
    return(
        <select placeholder="Price Sort" onChange = {(e) => handleChange(e.target.value)}>
            <option value = "" disabled selected>Sort option</option>
            <option value = "1,1">Ratings (Low to High)</option>
            <option value = "1,-1">Ratings (High to Low)</option>
            <option value = "2,1">Cost (Low to High)</option>
            <option value = "2,-1">Cost (High to Low)</option>
            
        </select>
    )
}
export default Sort;