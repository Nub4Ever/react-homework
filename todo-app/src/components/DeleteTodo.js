import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useParams, useNavigate } from 'react-router-dom';

export default function DeleteTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [deletedTodo, setDeletedTodo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/todo/${id}`)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todo:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/todo/${id}`)
      .then((response) => {
        setDeletedTodo(response.data);
        // Redirect to the main page after deletion
        navigate('/');
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };

  return (
    <>
      {todo && (
        <Card>
          <CardContent>
            <p>Delete Todo:</p>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
            <Button variant="contained" color="secondary" onClick={handleDelete}>
              Delete Todo
            </Button>
          </CardContent>
        </Card>
      )}
      {deletedTodo && (
        <Card>
          <CardContent>
            <p>Deleted Todo:</p>
            <pre>{JSON.stringify(deletedTodo, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </>
  );
}