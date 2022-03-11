import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'
import { v4 as uuid } from 'uuid'

interface Ong {
  id: string
  name: string
  email: string
  phone: string
  city: string
  uf: string
}

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const newOng: Ong = {
      id: uuid(),
      ...request.body,
    }

    const filePath = path.resolve(process.cwd(), 'database', 'ongs.json')
    const registeredOngs: Ong[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const ongAlreadyExists = registeredOngs.some(
      registeredOng =>
        registeredOng.name.toLowerCase() === newOng.name.toLowerCase()
    )

    if (ongAlreadyExists) {
      response.status(409).json({ message: 'ONG já cadastrada' })
      return
    }

    registeredOngs.push(newOng)
    fs.writeFileSync(filePath, JSON.stringify(registeredOngs))
    response.status(201).json({ message: 'Success!', accessId: newOng.id })
    return
  }

  response.status(405)
}

export default handler
