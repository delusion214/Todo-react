import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  // Используем хук useState и делаем деструктуризацию его свойств
  const [text, setText] = useState('');

  /* Создаем функцию onSumbitHandler в которой: 
  1. Сбрасываем привычное поведение при отправке формы, 
  2. Вызываем функцию addTodo, чтобы в компоненте App изменить состояние добавив новую задачу в массив, 
  3. Очищаем поле ввода, так как поле ввода мы контролируем через состояние, можно просто вызвать функцию setText и передать пустую строку.
  */
  const onSumbitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSumbitHandler}>
        <input
          maxLength={35}
          placeholder="Добавить задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Разместить задачу">
          Разместить
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
