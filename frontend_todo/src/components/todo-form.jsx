import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const TodoForm = ({ addTodo, editTodo, updateTodo, setEditTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title);
            setDescription(editTodo.description);
            setDueDate(editTodo.dueDate ? editTodo.dueDate.split('T')[0] : '');
        } else {
            setTitle('');
            setDescription('');
            setDueDate('');
        }
    }, [editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { title, description, dueDate };
        if (editTodo) {
            updateTodo({ ...editTodo, ...todo });
        } else {
            addTodo(todo);
        }
        setTitle('');
        setDescription('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input
                type="text"
                placeholder="Todo Title"
                value={title}
                className='px-4 py-2 text-violet-950 focus:outline-violet-800  placeholder:text-violet-950 border border-2 border-violet-600'
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Todo Description"
                className='px-4 py-2 text-violet-950 focus:outline-violet-800  placeholder:text-violet-950 border border-2 border-violet-600'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                className='px-4 py-2 text-violet-950 focus:outline-violet-800  placeholder:text-violet-950 border border-2 border-violet-600'
                onChange={(e) => setDueDate(e.target.value)}
            />
            <button
                className='px-4 py-2 bg-violet-900 text-white rounded-md border border-2 border-violet-600'
                type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
            {editTodo && <button onClick={() => setEditTodo(null)}>Cancel</button>}
        </form>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        dueDate: PropTypes.string,
    }),
    updateTodo: PropTypes.func.isRequired,
    setEditTodo: PropTypes.func.isRequired,
};

export default TodoForm;
