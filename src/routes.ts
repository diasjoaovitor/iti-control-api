import './config/alias-config'
import express from 'express'
import { repLogin, repLoadUsers, repSessionIsValid } from './controllers'

const routes = express.Router()

routes.get('/', (_, res) => res.json({ ok: true }))

routes.post('/rep/login', repLogin)
routes.post('/rep/session', repSessionIsValid)
routes.post('/rep/users', repLoadUsers)

export default routes
