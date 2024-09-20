import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };

  // Fetch searched todos
  const searchTodos = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/todos/search?q=${searchTerm}`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error searching todos', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (todo) => {
    try {
      const response = await axios.post('http://localhost:4000/todos', todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  // Update a todo
  const updateTodo = async (todo) => {
    try {
      const response = await axios.put(`http://localhost:4000/todos/${todo._id}`, todo);
      setTodos(todos.map((t) => (t._id === todo._id ? response.data : t)));
      setEditTodo(null);
    } catch (error) {
      console.error('Error updating todo', error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo', error);
    }
  };

  return (
    <div className="h-screen flex flex-row items-center justify-center gap-5">
      <div>

        <h1 className='text-2xl text-violet-950 font-bold'>Todo App</h1>
        <TodoForm
          addTodo={addTodo}
          editTodo={editTodo}
          updateTodo={updateTodo}
          setEditTodo={setEditTodo}
        />

        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='px-4 py-2 text-violet-950 focus:outline-violet-800  placeholder:text-violet-950 border border-2 border-violet-600'
        />
        <button
          className='px-4 py-2 bg-violet-900 text-white rounded-md border border-2 border-violet-600'
          onClick={searchTodos}>Search</button>
      </div>
      <div>
        <TodoList todos={todos} deleteTodo={deleteTodo} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
};

export default App;
