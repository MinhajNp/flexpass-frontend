import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './publicRoute'
import HomePage from '../pages/public/homePage'
import LoginPage from '../pages/public/auth/loginPage'
import RegisterPage from '../pages/public/auth/registerPage'
import VerifyOtpPage from '../pages/public/auth/verifyOtpPage'

const appRouter = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
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
])

export default appRouter