import { AppDataSource } from '../app-data-source'
import { UserEntity } from '../entity/user.entity'
import { Repository } from 'typeorm'
import pool from '../database/connection'

export class UserRepository {
  private repository: Repository<UserEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(UserEntity)
  }

  /**
   * @description Find all the users
   */
  public async findAll() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users'
    const { rows } = await client.query(sql)
    const users = rows
    client.release()
    return users
  }
}
