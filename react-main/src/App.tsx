import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './User/Login';
import { Register } from './User/Register';
import { Logout } from './User/Logout';
import { Top } from './Top';
import { Tasks } from './Task/Tasks';
import { Categories } from './Categories/Categories';
import { CreateTask } from './Task/CreateTask';
import { CreateCategory } from './Categories/CreateCategory';
import { Profile } from './User/Profile';
import { DetailTask } from './Task/DetailTask';
import { EditTask } from './Task/EditTask';
import { Complete } from './User/Complete';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/top" element={<ProtectedRoute><Top /></ProtectedRoute>} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/complete/verify" element={<Complete />} />
          <Route path="/users/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />
          <Route path="/users/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
          <Route path="/tasks/create" element={<ProtectedRoute><CreateTask /></ProtectedRoute>} />
          <Route path="/tasks/edit" element={<ProtectedRoute><EditTask /></ProtectedRoute>} />
          <Route path="/tasks/detail" element={<ProtectedRoute><DetailTask /></ProtectedRoute>} />
          <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          <Route path="/categories/create" element={<ProtectedRoute><CreateCategory /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
