import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './state';


export const TodoItem = ({ item }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value }}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        })
        setTodoList(newList);
    }
    const toggleItemCompletion = ({ target: { checked } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: checked,
        })
        setTodoList(newList);
    }
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    }

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} disabled={item.isComplete} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  
  function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}