import Contact from '@/components/Contact'
import Hero from "@/components/Hero"
import styles from '@/styles/HomePage.module.css'

const HomePage = () => {
    return (
        <>
            <div className={styles.hero}>
            <Hero />
        </div>
            <Contact />
        </>
    )
}

export default HomePage
