import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'; // Import useParams

export default function ViewSingleTodo() {
  const { id } = useParams(); // Use the useParams hook to get the "id" from the URL
  const [todo, setTodo] = useState(null);

  console.log('ID from useParams:', id);

  useEffect(() => {
    console.log('Fetching data for ID:', id);
    axios.get(`http://localhost:8080/todo/${id}`)
      .then((response) => {
        console.log('API Response:', response.data);
        setTodo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todo:', error);
      });
  }, [id]);

  return (
    <>
      {todo && (
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Single Todo
            </Typography>
            <Typography variant="body1">
              ID: {todo.id}
            </Typography>
            <Typography variant="body1">
              Title: {todo.title}
            </Typography>
            <Typography variant="body1">
              Description: {todo.description}
            </Typography>
            <Typography variant="body1">
              Completed: {todo.completed ? 'Yes' : 'No'}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}