import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flight Carbon API | Home',
  description: 'Open source API for calculating carbon emissions from flights.',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <Heading
            size='lg'
            className=' text-black dark:text-catskill-white'
          >
            Simplify your <br/> carbon footprint
          </Heading>

          <Paragraph className='max-w-xl lg:text-left'>
            Flight Carbon API is an open source API for calculating carbon emissions. Try for free with a unique {' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-catskill-white'
            >
              API key
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/plane.png'
              alt='plane'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
