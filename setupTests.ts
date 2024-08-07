import '@testing-library/jest-dom/vitest'

import { server } from './mocks/node'

beforeAll(() => {
  server.listen()
})

beforeEach(() => server.resetHandlers())

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => server.close())
