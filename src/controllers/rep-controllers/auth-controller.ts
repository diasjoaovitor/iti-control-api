import type { Request, Response } from 'express'
import type { AxiosError } from 'axios'
import type {
  TREPLogin,
  TREPSession,
  TREPSessionIsValidResponse,
  TREPSessionResponse
} from './types'
import { getErrorResponse } from '@/errors'
import { repApi } from '@/services'

export const repLogin = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body as TREPLogin
    const { data } = (await repApi.post('/login.fcgi', {
      login,
      password
    })) as TREPSessionResponse
    return res.status(200).json(data)
  } catch (error) {
    const err = getErrorResponse('REP Login Error', error as AxiosError)
    return res.status(err.status || 401).json(err)
  }
}

export const repSessionIsValid = async (req: Request, res: Response) => {
  try {
    const { session } = req.body as TREPSession
    const {
      data: { session_is_valid: sessionIsValid }
    } = (await repApi.post(
      `/session_is_valid.fcgi?session=${session}`
    )) as TREPSessionIsValidResponse
    return res.status(200).json({ sessionIsValid })
  } catch (error) {
    const err = getErrorResponse(
      'REP Session Is Valid Error',
      error as AxiosError
    )
    return res.status(err.status || 400).json(err)
  }
}
