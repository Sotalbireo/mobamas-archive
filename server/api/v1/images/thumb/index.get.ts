import { readdir } from 'fs/promises'

export default defineEventHandler(async () => {
  return (await readdir('./data/thumb'))
    .map((f) => f.substring(0, f.lastIndexOf('.')))
})
