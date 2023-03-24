import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

export function withMethods(methods: string[], handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    
    // this is what I added to try to make it work
    
     if (req.method === 'OPTIONS') {
      return res.status(200).json({ body: 'OK' })
     }
    
    if (!req.method || !methods.includes(req.method)) {
      return res.status(405).end()
    }

   

    return handler(req, res)
  }
}
