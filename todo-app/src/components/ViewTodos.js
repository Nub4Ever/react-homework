import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ViewTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/todo')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        To-Do List
      </Typography>
      {todos.map((todo) => (
        <Card key={todo.id} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="body1">
              {todo.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}