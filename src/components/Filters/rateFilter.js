import React from 'react';

function RateFilter(props) {
    const { handleChange } = props;
    return (
        <div>
            <select  onChange={(e)=>handleChange(e.target.value)}>
                <option value="" disabled selected>Ratings</option>
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
            </select>
        </div>
    )
}
export default RateFilter;