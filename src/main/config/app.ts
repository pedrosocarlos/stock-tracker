import express, { type Express } from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app: Express = express()
/* app.use(express.json())
setupMiddlewares(app)
setupRoutes(app) */

export default async (): Promise<Express> => {
  setupMiddlewares(app)
  await setupRoutes(app)
  return app
}
