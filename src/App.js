import React, { useState } from 'react';


import TodoBoard from './components/TodoBoard';

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState(['아침 챙겨먹기', '방 청소하기', '일짝 자기']);

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  }

  return (
    <main>
      <input value={inputValue} type='text' onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
