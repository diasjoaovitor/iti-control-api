import type { Request, Response } from 'express'
import type { AxiosError } from 'axios'
import type { TREPSession, TREPUsersResponse } from './types'
import { getErrorResponse } from '@/errors'
import { repApi } from '@/services'

export const repLoadUsers = async (req: Request, res: Response) => {
  try {
    const { session } = req.body as TREPSession
    const {
      data: { users }
    } = (await repApi.post(`/load_users.fcgi?session=${session}`, {
      limit: 100,
      offset: 0
    })) as TREPUsersResponse
    return res.status(200).json(users)
  } catch (error) {
    const err = getErrorResponse('REP Load Users Error', error as AxiosError)
    return res.status(400).json(err)
  }
}
