import { useState } from "react"
import authService from "../../../services/authService"
import { useLocation } from "react-router-dom"

function VerifyOtpPage() {
  const location = useLocation()
  const userId = location.state?.userId

  const [otp, setOtp] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await authService.verifyOtp({
      userId,
      otp,
    })
  }

  return (
    <>
      <h1>Verify OTP</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(event) => setOtp(event.target.value)}
          placeholder="Enter OTP"
          maxLength={6}
        />

        <button type="submit">Verify</button>
      </form>
    </>
  )
}

export default VerifyOtpPage