import { useState } from 'react';

function Header({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoKeyDown(event) {
    if (event.code !== 'Enter') {
      return;
    }

    event.preventDefault();
    const title = newTodo.trim();
    onAddTodo(title);
    setNewTodo('');
  }

  return (
    <header className="mt-7">
      <h1 className="absolute -top-32 w-full font-extralight text-8xl text-center text-red-700">
        todos
      </h1>
      <input
        className="w-full p-4 pl-16 font-light text-2xl shadow-inner focus:outline-red-700/40 placeholder:italic placeholder:font-light placeholder:text-black/40"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleNewTodoKeyDown}
      />
    </header>
  );
}

export default Header;
