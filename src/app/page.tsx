import Hero from "@/components/Hero"
import { Hero as HeroStyle } from '@/styles/Hero.module.css'

const HomePage = () => {
    return (
        <div className={`${HeroStyle} container`}>
            <Hero />
        </div>
    )
}

export default HomePage
