import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './User/Login';
import { Register } from './User/Register';
import { Logout } from './User/Logout';
import { Top } from './Top';
import { Tasks } from './Task/Task';
import { Categories } from './Categories/Categories';
import { CreateTask } from './Task/CreateTask';
import { CreateCategory } from './Categories/CreateCategory';
import { Profile } from './User/Profile';
import { DetailTask } from './Task/DetailTask';
import { EditTask } from './Task/EditTask';

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
          <Route path="/users/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/edit" element={<EditTask />} />
          <Route path="/tasks/detail" element={<DetailTask />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CreateCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
