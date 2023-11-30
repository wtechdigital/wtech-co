import { Impact } from '@/components/Impact'
import { Careers } from '@/components/Careers'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Solutions } from '@/components/Solutions'
import { CallToAction } from '@/components/CallToAction'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'

export default function Home() {
  return (
    <>
      <Header page="main" />
      <main>
        <Hero />
        <Solutions />
        <CallToAction />
        <Stats />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
