import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todos from './componant/todoApp';
import CmplTodos from './componant/cmplTodos';

function App() {

  const [todoName, setTodoName] = useState('')
  const [todoList, setTodoList] = useState([])
  const [cmplTodoList, setCmplTodoList] = useState([])

  const todoNameHandler = (event) => {
    setTodoName(event.target.value)
  }

  const addTodoHandler = () => {
    const todoObj = {
      isDo: false,
      title: todoName,
      id: Math.random()
    }
    setTodoList([...todoList, todoObj])
  }

  const deletHandler = (itemsId) => {
    setTodoList(todoList.filter((items) => itemsId !== items.id))
  }

  function compleHandler(item) {
    setTodoList(todoList.filter((items) => item.id !== items.id))
    setCmplTodoList([...cmplTodoList, item])
  }

  function removeHandle(items) {
    setCmplTodoList(cmplTodoList.filter((item) => items.id !== item.id))
  }

  function cmplHandle(item) {
    setCmplTodoList(cmplTodoList.filter((items) => item.id !== items.id))
    setTodoList([...todoList, item])
  }

  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
        <input className='todo-input' onChange={todoNameHandler} type="text" />
        <div>
          <button className='add-todo' onClick={addTodoHandler}>Add New Todo</button>
        </div>
      </div>
      <div className='cells_container'>
        <div className='compl_container'>
          <h2>Uncomple</h2>
          <Todos todoList={todoList} deletHandler={deletHandler} compleHandler={compleHandler} />
        </div>
        <div className='uncompl_container'>
          <h2>Completed</h2>
          <CmplTodos cmplTodoList={cmplTodoList} cmplHandle={cmplHandle} removeHandle={removeHandle} />
        </div>
      </div>
    </div>
  );
}

export default App;
