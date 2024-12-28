import { BsArrowRightSquareFill } from 'react-icons/bs'
import styles from './Card.module.css'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5"

const Card = ({name, description, html_url}) => {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                    <IoLogoCss3 />
                    <IoLogoHtml5 />
                    <IoLogoJavascript />
                    <IoLogoReact />
                </div>
                <a href={html_url} target='_blank' rel='nopenner norefferer' className={styles.button}>
                    <BsArrowRightSquareFill/>
                </a>

            </div>
        </section>
    )
}

export default Card