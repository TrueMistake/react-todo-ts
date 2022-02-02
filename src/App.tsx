import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import {TodoObject} from "./types/todo";

function App() {
    const [todo, setTodo] = useState<TodoObject[]>([{title: 'Первый пост', body: 'Описание'}]);


    const addTodo = (newTodo:TodoObject):void => {
        setTodo([...todo, newTodo])
    }

    return (
    <div className="App">
      <h1>Список задач</h1>
      <div className="wrapper">
        <TodoList todo={todo}/>
        <CreateTodo addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
