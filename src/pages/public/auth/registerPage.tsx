import RegisterForm from '../../../components/forms/auth/registerForm'

function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl bg-white px-8 py-10 shadow-2xl shadow-black/10 sm:px-10">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Create account
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Start your fitness journey today
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage