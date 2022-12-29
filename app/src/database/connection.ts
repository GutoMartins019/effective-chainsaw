import { Pool } from 'pg'

export default new Pool({
  max: 20,
  connectionString: 'postgres://root:pass@localhost:5433/postgres',
  idleTimeoutMillis: 30000
})
