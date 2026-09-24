import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './publicRoute'
import PublicLayout from './publicLayout'
import AuthLayout from './authLayout'
import HomePage from '../pages/public/homePage'
import LoginPage from '../pages/public/auth/loginPage'
import RegisterPage from '../pages/public/auth/registerPage'
import VerifyOtpPage from '../pages/public/auth/verifyOtpPage'
import ProtectedRoute from './protectedRoute'
import DashboardPage from '../pages/user/dashboardPage'

const appRouter = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
        ],
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/verify-otp',
        element: <VerifyOtpPage />,
      },
    ],
  },

  {
  element: <ProtectedRoute />,
  children: [
    {
      path: '/dashboard',
      element: <DashboardPage />,
    },
  ],
},
])

export default appRouter