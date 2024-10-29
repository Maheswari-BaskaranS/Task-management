import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/action';

const FilterTask: React.FC =()=>{
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(setFilter('all'))}>All</button>
            <button onClick={()=>dispatch(setFilter('completed'))}>completed</button>
            <button onClick={()=>dispatch(setFilter('pending'))}>Pending</button>
        </div>
    )
}

export default FilterTask;