import { Hero } from "@/components/hero"
import { FirstSection } from "@/components/first-section"
import { SecondSection } from "@/components/second-section"
import { ThirdSection } from "@/components/third-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </main>
  )
}
