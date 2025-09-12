import env from './config/env'
import { db, testConnection  } from "../infra/db/knex"
import createApp from './config/app'

const startServer = async (): Promise<any> => {
  try {
    await testConnection();
    await db.migrate.latest()

    const app = await createApp()
    app.listen(env.port, () =>
      { console.log(`Server running at http://localhost:${env.port}`); }
    )
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err)
  }
}

void startServer()
