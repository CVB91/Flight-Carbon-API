import { FC } from 'react'

import type{ Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'

export const metadata: Metadata = {
  title: 'Flight Carbon API | Documentation',
  description: 'Open source API for calculating carbon emissions from flights.',
}


const page: FC = ({}) => {
  return <div className='container max-w-7xl mx-auto mt-12'>
    <div className="flex flex-col items-center gap-6">
      <Heading>Making a request</Heading>
      <Paragraph>api/v1/flightcarbon</Paragraph>

      <DocumentationTabs/>
    </div>
  </div>
}

export default page