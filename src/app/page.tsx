import Hero from "@/components/Hero"
import styles from '@/styles/HomePage.module.css'

const HomePage = () => {
    return (
        <div className={`${styles.Hero} container`}>
            <Hero />
        </div>
    )
}

export default HomePage
