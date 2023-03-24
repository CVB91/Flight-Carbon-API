import { withMethods } from '@/lib/api-middleware/with-methods'
import { db } from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { calculate } from '@/constants/calculate'

const reqSchema = z.object({
  departure: z.string().max(10),
  destination: z.string().max(10),
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body
  const apiKey = req.headers.authorization
  if (!apiKey) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
   
    const { departure, destination } = reqSchema.parse(body)

    const validApiKey = await db.apikey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    })

    if (!validApiKey) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const start = new Date()

    const carbonEmissions = calculate(destination, departure)

    // console.log(Number(carbonEmissions))

    const duration = new Date().getTime() - start.getTime()

    await db.aPIRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        url: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    })

    return res
      .status(200)
      .json({ success: true, carbonEmissions })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues })
    }
    return res.status(500).json({ error: "internal server error"})
  }
}

export default withMethods(['POST'], handler)
