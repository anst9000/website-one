import { Footer, HeroImage, Navbar, Pricing } from "../components"

export const PricingRoute = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading='PRICING.' text='Choose your trip.' />
      <Pricing />
      <Footer />
    </>
  )
}
