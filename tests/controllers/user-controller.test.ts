import { UserService } from '../../app/src/services/UserService'
import { server } from '../../app/src/server'

const chai = require('chai')
const assert = require('assert').strict
const chaiHttp = require('chai-http')
const sandbox = require('sinon').createSandbox()

chai.use(chaiHttp)

const CONTENT_TYPE = {
  key: 'content-type',
  value: 'application/json'
}

const ROUTE = `/api/users/`
const MOCK_RETURN = [{ id: 1, firstName: 'Guto', lastName: 'Martins' }]

describe('Unit tests for user GET API', function () {
  beforeEach(function () {
    sandbox.stub(new UserService(), 'findAll').returns(MOCK_RETURN)
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('Should return a valid id when creating with correct body request', async function () {
    const response = await chai
      .request(server.app)
      .get(ROUTE)
      .set(CONTENT_TYPE.key, CONTENT_TYPE.value)
      .send()

    assert.equal(response.statusCode, 200)
    assert.deepEqual(response.body, MOCK_RETURN)
  })
})
