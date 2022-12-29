import { UserRepository } from '../repository/UserRepository'

export class UserService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public findAll = async () => {
    return await this.userRepository.findAll()
  }

  public create = () => {
    return 'Create From Service'
  }

  public update = () => {
    return 'Update From Service'
  }

  public delete = () => {
    return 'Delete From Service'
  }
}
