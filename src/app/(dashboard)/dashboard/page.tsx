import { FC } from 'react'

import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import RequestApiKey from '@/components/RequestApiKey'

export const metadata: Metadata = {
  title: 'Flight Carbon API | Dashboard',
  description: 'Flight Carbon API Dashboard',
}

const page = async () => {
  const user = await getServerSession(authOptions)
  if (!user) return notFound()

  const apiKey = await db.apikey.findFirst({
    where: { userId: user.user.id, enabled: true },
  })

  return (
    <div className='max-w-7xl mx-auto mt-16'>
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  )
}

export default page
