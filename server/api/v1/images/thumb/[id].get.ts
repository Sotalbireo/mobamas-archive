import { readFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const id = event.context.params.id as string
  return await (readFile(`./data/thumb/${id}.webp`)).then((d) => d.toString('base64'))
})
