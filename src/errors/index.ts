import type { AxiosError } from 'axios'

export const getErrorResponse = (message: string, error: AxiosError) => {
  const { cause, status } = error
  return {
    message,
    cause,
    status
  }
}
