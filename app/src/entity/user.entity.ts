import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
  }
}
