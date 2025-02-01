import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>The Best Planner</h1>

      <div className="todo-box">
        <div className="todo-input">
         
          <div className="todo-items">
            <label>Title</label>
            <input type="text" placeholder="Task For the Day" />
          </div>

          <div className="todo-items">
            <label>Descriiption</label>
            <input type="text" placeholder="Task For the Description" />
          </div>

          <button className="primary-button" type="button">
            Add
          </button>
        </div>


        <div className="btnArea">
            <button>Todo</button>
            <button>Completed</button>
          </div>

          <div className="displayArea">
            <div className="items">
              <h2>Task 1</h2>
              <p> Description</p>
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;
