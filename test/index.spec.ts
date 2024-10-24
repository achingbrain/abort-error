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
})
