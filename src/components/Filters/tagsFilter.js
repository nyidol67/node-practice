import React from 'react';

function TagsFilter(props) {
    const { handleChange } = props;
    return (
        <div>
            <input list="Tags" type = "text" placeholder="search by tags" onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    )
}
export default TagsFilter;