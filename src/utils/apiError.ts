import axios from 'axios'

interface ApiErrorResponse {
  message: string
}

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message ?? 'Something went wrong'
  }

  return 'Something went wrong'
}