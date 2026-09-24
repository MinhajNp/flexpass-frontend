import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../../services/authService'
import { getApiErrorMessage } from '../../../utils/apiError'
import { loginSchema } from '../../../validation/authValidation'
import FormInput from '../common/formInput'
import useAuth from '../../../hooks/useAuth'


interface LoginFormErrors {
  email?: string
  password?: string
}

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState<LoginFormErrors>({})

  const [generalError, setGeneralError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const {setAccessToken } = useAuth()

  const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
) => {
  event.preventDefault()

  setErrors({})
  setGeneralError('')

  const formData = {
    email,
    password,
  }

  const result = loginSchema.safeParse(formData)   //zod validation

  if (!result.success) {
    const fieldErrors: LoginFormErrors = {}

    result.error.issues.forEach((issue) => {
      const field = issue.path[0]

      if (field === 'email' || field === 'password') {
        fieldErrors[field] = issue.message
      }
    })

    setErrors(fieldErrors)
    return
  }
setIsLoading(true)

try {
  const accessToken = await authService.login(formData)

  setAccessToken(accessToken);

 navigate('/dashboard')
} catch (error) {
  setGeneralError(getApiErrorMessage(error))
} finally {
  setIsLoading(false)
}
}

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
  <FormInput
    id="email"
    label="Email Address"
    type="email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    placeholder="name@example.com"
    error={errors.email}
  />

  <FormInput
    id="password"
    label="Password"
    type="password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    placeholder="••••••••"
    error={errors.password}
  />

  <button
  type="submit"
  disabled={isLoading}
  className="w-full rounded-xl bg-[#2D5A53] py-3 text-sm font-semibold text-white transition hover:bg-[#244a44] disabled:cursor-not-allowed disabled:opacity-60"
>
  {isLoading ? 'Logging in...' : 'Log In'}
</button>
</form>
  )
}

export default LoginForm