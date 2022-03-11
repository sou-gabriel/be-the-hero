import { NextApiRequest, NextApiResponse } from 'next'

import { getRegisteredOngs } from '../../../helpers/ongs'

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const registeredOngs = getRegisteredOngs()
    response.status(200).json(registeredOngs)
  }
}

export default handler
