import { Header, Hero, Contact, UserReview, Footer } from "../components"

export const Home = () => {
  return (
    <div className="relative">
        <Header/>
        <Hero/>
        <Contact/>
        <UserReview/>
        <Footer/>
    </div>
  )
}
