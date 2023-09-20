import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import ViewTodos from './components/ViewTodos';
import DeleteTodo from './components/DeleteTodo';
import ViewSingleTodo from './components/ViewSingleTodo';

function App() {
  const navigate = useNavigate();
  const [deleteTodoId, setDeleteTodoId] = useState('');
  const [viewSingleTodoId, setViewSingleTodoId] = useState('');

  const goToDeleteTodo = () => {
    navigate(`/delete/${deleteTodoId}`);
  };

  const goToViewSingleTodo = () => {
    navigate(`/todo/${viewSingleTodoId}`);
  };

  const goToAddTodo = () => {
    navigate(`/add`);
  };

  const goToViewTodos = () => {
    navigate(`/`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            type="button"
            onClick={goToAddTodo}
          >
            Add Todo
          </button>
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo ID"
            value={deleteTodoId}
            onChange={(e) => setDeleteTodoId(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            type="button"
            onClick={goToDeleteTodo}
          >
            Delete Todo
          </button>
        </div>
        <div className="col-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo ID"
            value={viewSingleTodoId}
            onChange={(e) => setViewSingleTodoId(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-success"
            type="button"
            onClick={goToViewSingleTodo}
          >
            View Single Todo
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-success"
            type="button"
            onClick={goToViewTodos}
          >
            View Todos
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ViewTodos />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/delete/:id" element={<DeleteTodo />} />
        <Route path="/todo/:id" element={<ViewSingleTodo />} />
      </Routes>
    </div>
  );
}

export default App;