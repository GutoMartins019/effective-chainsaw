import { Router, Response, Request } from 'express'
import { UserEntity } from '../entity/user.entity'
import { UserService } from '../services/UserService'

export class UserController {
  public router: Router
  private userService!: UserService

  constructor() {
    this.router = Router()
    this.userService = new UserService()
    this.routes()
  }

  public index = async (req: Request, res: Response) => {
    const response = this.userService.findAll()
    response
      .then((data) => {
        res.send(data)
      })
      .catch((err: any) => {
        res.send('Error when retrieving users')
      })
  }

  public create = async (req: Request, res: Response) => {
    res.send(this.userService.create())
  }

  public update = async (req: Request, res: Response) => {
    res.send(this.userService.update())
  }

  public delete = async (req: Request, res: Response) => {
    res.send(this.userService.delete())
  }

  public routes() {
    this.router.get('/', this.index)
    this.router.post('/create', this.create)
    this.router.put('/:id', this.update)
    this.router.delete('/delete', this.delete)
  }
}
