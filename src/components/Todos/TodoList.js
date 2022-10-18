import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  /* В компоненте App мы передали через свойство массив todos, в данном компоненте мы перебираем с помощью метода map 
  и возвращаем отдельный компонент Todo с его строкой и ключом. Так же передает свойство deleteTodo, функцию из компонента App.
  И так же toggleTodo для редактирования задачи, которую выполнили*/
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Список задач пуст</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
