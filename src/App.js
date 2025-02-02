import React,{ useState } from "react";
import "./App.css";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  // This is for functionality of the color changing
  const [isCompleteScreen, setIsCompleteScreen] = useState(false); 

  // state to contail all todo list

  const[allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const[newDescription, setNewDescription]= useState("");

  // For the button arrow funchion
  const handleAddTodo = () =>{
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    }

    let updatedTodoArr =[...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  }

  return (
    <div className="App">
      <h1>The Best Planner</h1>

      <div className="todo-box">
        <div className="todo-input">
          <div className="todo-items">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Task For the Day" />
          </div>

          <div className="todo-items">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Task For the Description" />
          </div>

          <button className="primary-button" type="button" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <div className="btnArea">
          <button
            className={`secbtn ${isCompleteScreen === false && `active`}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secbtn ${isCompleteScreen === true && `active`}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="displayArea">
         {allTodos.map((item,index)=>{
          return(
            <div className="items" key={index}>
            <h2>Task 1</h2>
            <p> Description</p>
          </div>
          )
         })}

          <div className="cons">
          <MdDeleteOutline className="del-icon"/>
          <CiBookmarkCheck className="check-icon"/>
          </div>

        </div>
      
      </div>
    
    </div>
  );
}

export default App;
