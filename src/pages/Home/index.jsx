import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <section className={styles.home}>
                <div className='apresentacao'>
                    <p>
                        Olá, sou <br />
                        <span>João Oliveira</span> <br />
                        Dev Full Stack
                    </p>
                    <button className={styles.btn}>Saiba mais sobre mim</button>
                </div>
                <img src="/public/image-home.svg" alt="Image de Home" />
            </section>
        </>
    )
}

export default Home