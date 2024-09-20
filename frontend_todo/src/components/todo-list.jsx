import PropTypes from 'prop-types';
const TodoList = ({ todos, deleteTodo, setEditTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li className='flex flex-col gap-1 justify-center border border-2 p-4 rounded-lg border-violet-700' key={todo._id}>
                    <h3 className='font-bold'>{todo.title}</h3>
                    <p className='font-medium'>{todo.description}</p>
                    <p>Due: {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'No due date'}</p>
                    <button
                        className='px-4 py-2 bg-violet-900 text-white rounded-md border border-2 border-violet-600'
                        onClick={() => setEditTodo(todo)}>Edit</button>
                    <button
                        className='px-4 py-2 bg-red-900 text-white rounded-md border border-2 border-red-600'
                        onClick={() => deleteTodo(todo._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            dueDate: PropTypes.string,
        })
    ).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    setEditTodo: PropTypes.func.isRequired,
};
export default TodoList;
