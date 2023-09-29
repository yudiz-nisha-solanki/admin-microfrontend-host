import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const Dashboard = () => <h1>Dashboard</h1>
const Login = () => <h1>Login</h1>

function AllRoutes () {
  const element = useRoutes([
    // {
    //   path: "/",
    //   element: <Dashboard />,
    //   children: [
    //     {
    //       path: "messages",
    //       element: <DashboardMessages />,
    //     },
    //     { path: "tasks", element: <DashboardTasks /> },
    //   ],
    // },
    // { path: '/login', element: <Login /> },
    { path: '/', element: <Navigate to='/login' /> }
  ])

  return element
}

export default AllRoutes
