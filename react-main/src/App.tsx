import { useState } from 'react';
import './App.css';
// import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './User/Login';
import { Register } from './User/Register';
import { Logout } from './User/Logout';
import { CreateTasks } from './Task/CreateTask';
import { Username } from './User/Username';
import { Top } from './Top';
import { Tasks } from './Task/Task';
import { Categories } from './Categories/Categories';
import { CreateCategories } from './Categories/CreateCategories';

function App() {
  console.log('test');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/top" element={<Top />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/logout" element={<Logout />} />
          <Route path="/users/username" element={<Username />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tasks/createTasks" element={<CreateTasks />} />
          <Route
            path="/categories/createCategories"
            element={<CreateCategories />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
