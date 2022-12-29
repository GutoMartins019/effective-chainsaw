import express, { Router, Request, Response } from 'express'
import { UserController } from './controllers/UserController'
import { AppDataSource } from './app-data-source'
import bodyParser from 'body-parser'
import pool from './database/connection'
import 'reflect-metadata'

class Server {
  private userController: UserController
  public app: express.Application

  constructor() {
    this.app = express()
    this.configuration()
    this.userController = new UserController()
    this.routes()
    this.dbConnect()
  }

  public configuration() {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json({ limit: '1mb' })) // 100kb default
    this.app.set('port', process.env.PORT || 3333)
  }

  public async routes() {
    this.app.use('/api/users', this.userController.router)
    this.app.get('/', (req: Request, res: Response) => {
      res.json({ message: 'Welcome to the family tree API' })
    })
  }

  private dbConnect() {
    pool.connect(function (err: any, client, done) {
      if (err) {
        throw new Error(err)
      }
      console.log('Postgres Database Connected')
    })
  }

  public databaseSetup() {
    AppDataSource.initialize()
      .then(() => {
        console.log('Data Source has been initialized!')
      })
      .catch((err: any) => {
        console.error('Error during Data Source initialization:', err)
      })
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`)
    })
  }
}

export const server = new Server()
server.start()
