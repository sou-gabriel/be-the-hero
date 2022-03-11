import fs from 'fs'
import path from 'path'

interface Ong {
  id: string
  name: string
  email: string
  phone: string
  city: string
  uf: string
}

export const getRegisteredOngs = (): Ong[] => {
  const filePath = path.join(process.cwd(), 'database', 'ongs.json')
  const registeredOngs: Ong[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  return registeredOngs
}
