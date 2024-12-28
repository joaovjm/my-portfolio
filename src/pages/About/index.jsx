import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import Avatar from './images/João-Oliveira.jpg'
import styles from './About.module.css'


const About = () => {
    return (
        <>   
            <section className={styles.about}>
                <div className={styles.bio}>
                    <figure>
                        <img src={Avatar} alt="Foto de João Oliveira" />
                    </figure>
                    <div className={styles.text}>
                        <h2>Sobre</h2>
                        <p>Sou <span>João Oliveira</span> <br />
                        <strong>Dev Full Stack</strong></p>
                        <p>Trabalho com desenvolvimento web desde 2024.</p>
                        <p>Sou apaixonado por tecnologia, e em ver tudo que faço criar vida.</p>
                        <p>Adoro todos os desafios envolvidos no aprendizado <br /> de uma nova linguagem ou tecnologia.</p>

                    </div>

                </div>
                <div className={styles.techs}>
                    <h3>Tech</h3>
                    <div className={styles.logotech}>
                        <IoLogoCss3 />
                        <IoLogoHtml5 />
                        <IoLogoJavascript />
                        <IoLogoReact />
                        <IoLogoNodejs />
                    </div>
                    
                </div>
            </section>     
            
        </>
    )
}

export default About