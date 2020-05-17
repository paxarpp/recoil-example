import React from 'react';
import './App.css';
import { useRecoilValue } from 'recoil';
import { todoListState } from './state';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';

const App = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
}

export default App;
