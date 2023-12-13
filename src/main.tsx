import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import MyProjectPage from './pages/MyProjects';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import SubscribtionPage from './pages/Subscription';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/dashboard",
    element: <UserDashboard/>
  },
  {
    path: "/my-projects",
    element: <MyProjectPage/>
  },
  {
    path: "/projects",
    element: <ProjectsPage/>
  },
  {
    path: "/projects/{id}",
    element: <ProjectDetailPage/>
  },
  {
    path: "/subscription",
    element: <SubscribtionPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
