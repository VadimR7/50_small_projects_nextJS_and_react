import Head from 'next/head';
import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { googleFonts } from '../helpers/externalLinks';
import ComponentStyles from '../styles/ToDoListStyle';

type ToDo = {
  id: string;
  text: string;
  completed: boolean;
};

const getRandomId = () => {
  const id = Math.floor(Math.random() * Date.now());
  return id.toString();
};

export default function ToDoList(): JSX.Element {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [notificationIsShown, setNotificationIsShown] = useState(false);
  const [pendingDeleteTodo, setPendingDeleteTodo] =
    useState<string | null>(null);

  useEffect(() => {
    const localStorageNotes = localStorage.getItem('todos');
    if (localStorageNotes) {
      const notesFromLocalStorage = JSON.parse(localStorageNotes);
      setTodos(notesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleFormSubmitted = (e: FormEvent) => {
    e.preventDefault();
    const id = getRandomId();
    setTodos([...todos, { id, text: todoText, completed: false }]);
    setTodoText('');
  };

  const handleTodoLeftClick = (id: string) => {
    const clickedToDo = todos.findIndex((todo) => todo.id === id);
    const filteredTodos = [...todos];
    filteredTodos[clickedToDo].completed =
      !filteredTodos[clickedToDo].completed;
    setTodos(filteredTodos);
  };

  const handleTodoRightClick = (id: string, e?: MouseEvent) => {
    e?.preventDefault();
    const clickedToDo = todos.findIndex((todo) => todo.id === id);
    if (todos[clickedToDo].completed) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    } else {
      setPendingDeleteTodo(id);
      setNotificationIsShown(true);
    }
  };

  const handleYesClicked = () => {
    if (pendingDeleteTodo) {
      handleTodoLeftClick(pendingDeleteTodo);
      handleTodoRightClick(pendingDeleteTodo);
    }
    setPendingDeleteTodo(null);
    setNotificationIsShown(false);
  };

  const handleNoClicked = () => {
    setPendingDeleteTodo(null);
    setNotificationIsShown(false);
  };

  return (
    <>
      <Head>
        <title>ToDo List</title>
        <link rel="icon" href="/favicon.ico" />
        {googleFonts('Poppins')}
      </Head>
      <ComponentStyles.Wrapper>
        <h1>todos</h1>
        <form onSubmit={(e) => handleFormSubmitted(e)}>
          <input
            value={todoText}
            type="text"
            className="input"
            placeholder="Enter your todo"
            autoComplete="off"
            onChange={(e) => {
              setTodoText(e.currentTarget.value);
            }}
          />
          <ul className="todos">
            {todos.map((todo) => (
              <li
                aria-hidden
                onClick={() => handleTodoLeftClick(todo.id)}
                onContextMenu={(e) => handleTodoRightClick(todo.id, e)}
                key={todo.id}
                className={todo.completed ? 'completed' : undefined}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </form>

        <small>
          Left click to toggle completed. <br /> Right ckick to delete todo.
        </small>
        {notificationIsShown && (
          <div className="notification-container">
            <div className="notification">
              <h3>Are you sure you want to delete an incompleted todo?</h3>
              <button
                onClick={handleYesClicked}
                type="button"
                className="notification-btn danger"
              >
                Yes
              </button>
              <button
                onClick={handleNoClicked}
                type="button"
                className="notification-btn cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </ComponentStyles.Wrapper>
    </>
  );
}
