import { Impact } from '@/components/Impact'
import { Careers } from '@/components/Careers'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Logotypes } from '@/components/Logos'
import { Marketing } from '@/components/Marketing'
import { Solutions } from '@/components/Solutions'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logotypes />
        <Marketing />
        <Impact />
        <Solutions />
      </main>
      <Footer />
    </>
  )
}
