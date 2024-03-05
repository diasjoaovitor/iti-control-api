import axios from 'axios'
import https from 'https'
import dotenv from 'dotenv'

dotenv.config()

export const repApi = axios.create({
  baseURL: process.env.REP_BASE_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  insecureHTTPParser: true
})
