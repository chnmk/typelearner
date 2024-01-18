// @vitest-environment nuxt
import { test, expect, describe } from 'vitest'
import { urlBuilder } from '../composables/url-builder'
import type { fetchedObjectStructure } from '../composables/fetched-object-structure'

describe('url builder test', () => {

  test('gets eng -> rus page', async () => {
    const fetchedObject: fetchedObjectStructure = await $fetch<fetchedObjectStructure>(urlBuilder("rus", "eng"))
    .catch((error) => error.data)
    expect(fetchedObject).toBeDefined()
  })

})
