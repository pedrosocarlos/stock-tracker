import knex from "knex"
import config from "../../../knexfile.js"

const env = process.env.NODE_ENV ?? "development"

// cria instância única do knex
export const db = knex(config[env])

// opcional: testar conexão logo na inicialização
export async function testConnection(): Promise<void> {
  try {
    await db.raw("select 1+1 as result")
    console.log(`✅ Conectado ao banco (${env})`)
  } catch (err) {
    console.error("❌ Erro ao conectar ao banco:", err)
  }
}
