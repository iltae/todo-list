import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './TodoInput.module.css';

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <input type="text" onChange={todoInputChangeHandler} />
      </div>
      <Button type="submit">추가</Button>
    </form>
  );
};

export default TodoInput;