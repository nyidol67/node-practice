import React,{useEffect, useState} from'react';
import axios from "axios";

function CityFilter(props){
    const {handleChange} = props;
    return(
        <div>
            <input list="city" placeholder="Search by city" onChange={(e)=>{ handleChange(e.target.value)}}/>
        </div>
    )
}
export default CityFilter;