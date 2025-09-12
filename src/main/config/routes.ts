import { type Express, Router } from 'express'
import fg from 'fast-glob'
import path from 'node:path'

export default async (app: Express): Promise<void> => {
  const router = Router()
  app.use('/api', router)

  const ext = process.env.NODE_ENV === 'production' ? 'js' : 'ts'

  // pega os arquivos de rotas
  const files = fg.sync(`src/main/routes/**/*-routes.${ext}`)

  console.log('Rotas encontradas:', files)

  for (const file of files) {
    // transforma em caminho relativo a partir da raiz do projeto
    const routeModule = await import(path.resolve(file))
    routeModule.default(router)
    console.log(`✅ Rota carregada de: ${file}`)
  }
}