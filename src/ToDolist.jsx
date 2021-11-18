import React, { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const ToDolist = (props) => {
const [line,setLine]=useState(false);

   const cutit=()=>{
       setLine(true);
   }
    return (
        <>
            <div className="todo_style">
                <span onClick={cutit}>
                <DeleteForeverIcon className="deleteicon" />
                </span>
                 <li style={{textDecoration:line ? "line-through":"none"}}>{props.text}</li>
            </div>
        </>
    )
}

export default ToDolist;