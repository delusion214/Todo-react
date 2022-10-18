import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  // Добавление задач с помощью состояния useState
  const [todos, setTodos] = useState([]); // Использование хука useState и передача в него пустого массива(в котором будут содержаться объекты)

  /* Добавление функции addTodoHandler, которая добавляет новые задачи в массив задач.
  Внутри мы создаем наш объект, в котором будет ключ текст, выполнена задача или нет, 
  а так же генератор id для объекта. После этого мы передаем объект в функцию setTodos */
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  /* Добавление функции deleteTodoHandler, которая удаляет один элемент из массива todos, 
  благодаря методу filter, который возвращает true из коллбек функции. 
  Мы передаем в метод параметр id и после чего сравниваем id одного todo объекта с другим */
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /* Добавление функции toggleTodoHandler, которая проверяет и возвращает объект с обновленным значение isCompleted.
  Эта функция нужна для того, чтобы была возможно отслеживать сколько задач мы выполнили и так же
  отмечать выбраные задачи и красить их в серый цвет */
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  /* Добавление функции resetTodosHandler, которая очищает наше приложение и удаляет все задачи */
  const resetTodosHandler = () => {
    setTodos([]);
  };

  /* Добавление функции deletedCompletedTodosHandler, которая очищает все решённые задачи с помощью метода filter */
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  /* Добавление функции completedTodosCount, которая считает количество выполненных задач */
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>To Do</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`Завершено задач: ${completedTodosCount}`}</h2>
      )}
    </div>
  );
}

export default App;
