import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../../services/authService'
import { getApiErrorMessage } from '../../../utils/apiError'
import { registerSchema } from '../../../validation/authValidation'

function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)


const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
) => {
  event.preventDefault()

  setError('')

  const formData = {
    name,
    email,
    password,
  }

  const result = registerSchema.safeParse(formData)
  setIsLoading(true)

  if (!result.success) {
    setError(
      result.error.issues[0]?.message ?? 'Please check your input',
    )
    return
  }

  try {
    const response = await authService.register(formData)

    navigate('/verify-otp', {
      state: {
        userId: response.userId,
      },
    })
  } catch (error) {
    setError(getApiErrorMessage(error))
  }finally{
    setIsLoading(false)
  }
}


  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />

      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />

      <button type="submit" disabled={isLoading}>{isLoading? 'Registering....' : 'Register'}</button>

      {error && <p>{error}</p>}
    </form>
  )
}

export default RegisterForm