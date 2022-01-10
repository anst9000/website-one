import { Footer, HeroImage, Navbar, Training } from "../components"

export const TrainingRoute = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
      <Training />
      <Footer />
    </>
  )
}
