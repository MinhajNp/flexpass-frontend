import axiosInstance from '../api/axiosInstance'

interface RegisterData {
  name: string
  email: string
  password: string
}
interface VerifyOtpData {
  userId: string
  otp: string
}


const authService = {
  register: async (data: RegisterData) => {
    const response = await axiosInstance.post('/auth/register', data)

    return response.data
  },

  verifyOtp: async (data: VerifyOtpData) => {
  const response = await axiosInstance.post('/auth/verify-otp', data)

  return response.data
},
}

export default authService