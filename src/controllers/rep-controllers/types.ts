export interface TREPLogin {
  login: string
  password: string
}

export interface TREPSession {
  session: string
}

export interface TREPSessionResponse {
  data: {
    session: string
  }
}

export interface TREPSessionIsValidResponse {
  data: {
    session_is_valid: boolean
  }
}

export interface TREPUser {
  name: string
  pis: number
  code: number
  templates_count: number
  password: string
  admin: boolean
  rfid: number
  bars: string
  registration: number
}

export interface TREPUsersResponse {
  data: {
    users: TREPUser[]
    count: number
  }
}
