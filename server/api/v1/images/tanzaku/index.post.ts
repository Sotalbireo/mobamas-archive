import { readFile } from 'node:fs/promises'



// export default defineEventHandler(async (event) => {
//   const pick: string[] = event.context.body?.pick ?? []
//   return await readFile(`./data/ls/${id}.webp`).then((d) =>
//     d.toString('base64')
//   ).catch(e => {
//     throw createError({ statusCode: 404, statusMessage: `file(s) not found (pick: ${pick})`, cause: e })
//   })
// })
