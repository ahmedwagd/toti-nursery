import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Programs from "@/components/sections/programs"
import Gallery from "@/components/sections/gallery"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
