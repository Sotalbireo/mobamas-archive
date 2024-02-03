import { readdir, readFile } from 'node:fs/promises'



export default defineEventHandler(async (event) => {
  const pick = (await readdir('./data/thumb')).map((f) => f.substring(0, f.lastIndexOf('.')))
  const files = pick.map(id => readFile(`./data/thumb/${id}.webp`))
  return await Promise.all(files)
    .then(res =>
      res.map((b, i) => [pick[i], b.toString('base64')])
    ).catch(e => {
      throw createError({ statusCode: 404, statusMessage: `file(s) not found (pick: ${pick})`, cause: e })
    })
})
