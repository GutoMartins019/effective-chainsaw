import { DataSource } from 'typeorm'
import { UserEntity } from './entity/user.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'root',
  password: 'pass',
  database: 'postgres',
  entities: [UserEntity],
  synchronize: true,
  logging: true
})
