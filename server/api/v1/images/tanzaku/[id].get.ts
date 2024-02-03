import { readFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  return await readFile(`./data/ls/${id}.webp`).then((d) =>
    d.toString('base64')
  ).catch(e => {
    throw createError({ statusCode: 404, statusMessage: `file not found (id: ${id})`, cause: e })
  })
})
