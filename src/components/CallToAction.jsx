import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.webp'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt="Wintech Digital"
        title="Wintech Digital"
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Discover your growth potential
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Unlock the power of targeted marketing strategies designed for real-world results. Partner with WinTech for expert insights and innovative solutions.
          </p>
          <Button href="/contact" color="white" className="mt-10">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  )
}
