import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
    const navigate = useNavigate();
    const [todo, setTodo] = useState({
        id: '',
        title: '',
        description: '',
        completed: false,
    });

    const url = 'http://localhost:8080/todo';

    const handleSubmit = (event) => {
      event.preventDefault();
  
      console.log('Submitting todo:', todo); // Log the todo object before sending the request
  
      axios.post(url, todo)
          .then((response) => {
              console.log('Todo added successfully:', response.data);
              navigate('/');
          })
          .catch((error) => {
              console.error('Error adding todo:', error);
          });
  };

    return (
        <>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Add Todo
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="title"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={todo.title}
                            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                        />
                        <TextField
                            id="description"
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={todo.description}
                            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                        />
                        <CardActions>
                            <Button type="submit" size="small" variant="contained" color="primary">
                                Save Todo
                            </Button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}