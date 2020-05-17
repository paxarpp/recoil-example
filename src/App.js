import React from 'react';
import './App.css';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './state/selectors';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

const App = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
}

export default App;
