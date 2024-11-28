import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Experience } from '../components/experience'
import { Education } from '../components/education'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

