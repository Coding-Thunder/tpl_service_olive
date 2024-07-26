import Hero from "./Hero/Hero"
import HeroSecondary from "./HeroSecondary /HeroSecondary"
import Sectors from "./Sectors/Sectors"
import Services from "./Services/Services"
import Sustainability from "./Sustainability/Sustainability"


const Home = () => {
    return (
        <section className="w-svw h-fit">
            <Hero />
            <HeroSecondary />
            <Services />
            <Sectors />
            <Sustainability />
        </section>
    )
}

export default Home