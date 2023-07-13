import './App.css';
import { BrowserRouter, Routes, Route, Navigate, RouteProps } from 'react-router-dom';
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

// プライベートルートのコンポーネント
const PrivateRoute: React.FC<RouteProps> = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem('token');
  console.log(token);
  return token ? <Route {...rest} element={<Element />} /> : <Navigate to="/users/login" />;
};


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/complete/verify" element={<Complete />} />

          {/* プライベートルート */}
          <PrivateRoute path="/top" element={<Top />} />
          <PrivateRoute path="/users/logout" element={<Logout />} />
          <PrivateRoute path="/users/profile" element={<Profile />} />
          <PrivateRoute path="/tasks" element={<Tasks />} />
          <PrivateRoute path="/tasks/create" element={<CreateTask />} />
          <PrivateRoute path="/tasks/edit" element={<EditTask />} />
          <PrivateRoute path="/tasks/detail" element={<DetailTask />} />
          <PrivateRoute path="/categories" element={<Categories />} />
          <PrivateRoute path="/categories/create" element={<CreateCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



// 元のコード
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Login } from './User/Login';
// import { Register } from './User/Register';
// import { Logout } from './User/Logout';
// import { Top } from './Top';
// import { Tasks } from './Task/Tasks';
// import { Categories } from './Categories/Categories';
// import { CreateTask } from './Task/CreateTask';
// import { CreateCategory } from './Categories/CreateCategory';
// import { Profile } from './User/Profile';
// import { DetailTask } from './Task/DetailTask';
// import { EditTask } from './Task/EditTask';
// import { Complete } from './User/Complete';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/top" element={<Top />} />
//           <Route path="/users/register" element={<Register />} />
//           <Route path="/users/login" element={<Login />} />
//           <Route path="/users/complete/verify" element={<Complete />} />
//           <Route path="/users/logout" element={<Logout />} />
//           <Route path="/users/profile" element={<Profile />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/tasks/create" element={<CreateTask />} />
//           <Route path="/tasks/edit" element={<EditTask />} />
//           <Route path="/tasks/detail" element={<DetailTask />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/categories/create" element={<CreateCategory />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
