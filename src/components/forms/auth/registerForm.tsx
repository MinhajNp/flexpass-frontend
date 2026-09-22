import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../../services/authService'
import { getApiErrorMessage } from '../../../utils/apiError'
import { registerSchema } from '../../../validation/authValidation'
import FormInput from '../common/formInput'

function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    password?: string
  }>({})

  const [generalError, setGeneralError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setErrors({})
    setGeneralError('')

    const formData = {
      name,
      email,
      password,
    }

    const result = registerSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: {
        name?: string
        email?: string
        password?: string
      } = {}

      result.error.issues.forEach((issue) => {
        const field = issue.path[0]

        if (
          field === 'name' ||
          field === 'email' ||
          field === 'password'
        ) {
          fieldErrors[field] = issue.message
        }
      })

      setErrors(fieldErrors)
      return
    }

    setIsLoading(true)

    try {
      const response = await authService.register(formData)

      navigate('/verify-otp', {
        state: {
          userId: response.userId,
        },
      })
    } catch (error) {
      setGeneralError(getApiErrorMessage(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        id="name"
        label="Full Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="John Doe"
        error={errors.name}
      />

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

      {generalError && <p>{generalError}</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  )
}

export default RegisterForm