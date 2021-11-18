import React, { useState } from "react";
import ToDolist from "./ToDolist";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';

const App = () => {
// i am using hooks for state managment
  const [InputList, setInputList] = useState("");

  const [items, setItem] = useState([]);
// input occure logic
  const InputItem = (event) => {
  let var1=event.target
  let val=var1.value
    setInputList(val);
  }
// click add list 
  const AddListItem = () => {
    setItem((olditem) => {
      return [...olditem, InputList]
    })
    setInputList(" ");
  }

  const deleteItem=(id)=>{
    setItem((olditem) => {
      return olditem.filter((arrElement,index)=>{
        return index !== id;
      })
     
    })

}
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> <InboxIcon primary="Inbox" /> List Card App </h1>
          <br />
          <input type="text" placeholder="Add a Item " onChange={InputItem} value={InputList} />
          <button onClick={AddListItem}> <AddIcon/> </button>
          <ol >

            {items.map((itemval ,index) => {
              return <ToDolist
               key={index} 
               id={index} 
               text={itemval} 
               onSelect={deleteItem} />
            })
            }
          </ol>
        </div>
      </div>
    </>
  )
}


export default App;
