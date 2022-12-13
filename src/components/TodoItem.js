import React from "react";

import styles from "./TodoItem.module.css";


const TodoItem = (props) => {

    return (
        <div className={styles['todo-item']}>
            {props.item}
        </div>
    )
}

export default TodoItem;