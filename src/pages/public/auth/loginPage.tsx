import LoginForm from '../../../components/forms/auth/loginForm'

function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl bg-white px-8 py-10 shadow-2xl shadow-black/10 sm:px-10">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Welcome back
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Enter your details to access your account
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage