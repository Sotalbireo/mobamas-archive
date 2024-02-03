import { readdir } from 'fs/promises'

export default defineEventHandler(async () => {
  return await readdir('./data/characters')
})
