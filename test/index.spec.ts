import { expect } from 'aegir/chai'
import { AbortError } from '../src/index.js'

describe('abort-error', () => {
  it('should have a static name', async () => {
    expect(AbortError).to.have.property('name', 'AbortError')
  })

  it('should have an instance name', async () => {
    const err = new AbortError()
    expect(err).to.have.property('name', 'AbortError')
  })

  it('should have a default message', async () => {
    const err = new AbortError()
    expect(err).to.have.property('message', 'The operation was aborted')
  })

  it('should have a custom message', async () => {
    const message = 'Oh no!'
    const err = new AbortError(message)
    expect(err).to.have.property('message', message)
  })
})
