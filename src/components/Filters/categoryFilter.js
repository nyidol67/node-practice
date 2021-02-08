import axios from 'axios';
import React, { useEffect } from 'react';

function CategoriesFilter(props) {
    const { handleChange,} = props;
    return (
        <div>
            <input type = "text" 
            placeholder="Seach by category" 
            onChange = {(e) => {handleChange(e.target.value)} }/>
        </div>
    )
}
export default CategoriesFilter;
