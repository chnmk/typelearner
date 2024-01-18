import { test, expect, describe } from 'vitest'

describe('sample test', () => {

  test('imports about.vue', async () => {
    const component = await import('../pages/about.vue')
    expect(component).toBeDefined()
  })
  
  test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3)
  })
  
})
