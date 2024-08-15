import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './privateroute/PrivateRoute';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Home></Home></PrivateRoute>,
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
