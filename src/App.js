import React, { useState } from 'react';

import TodoList from './components/Todos/TodoList/TodoList';
import TodoInput from './components/Todos/TodoInput/TodoInput';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    { text: '리액트 인강 꾸준히 듣기', id: 'todo1' },
    { text: '서버 연결하는 법 터득하기', id: 'todo2' },
    { text: '나가서 운동 겸 걷기', id: 'todo3' }
  ]);

  const addTodoHandler = (enteredText) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  const deleteItemHandler = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>오늘의 할 일 끝! 이제 놀자!</p>
  );

  if (todos.length > 0) {
    content = (
      <TodoList items={todos} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <h1>오늘의 할 일</h1>
      <section id="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">{content}</section>
    </div>
  );
};

export default App;