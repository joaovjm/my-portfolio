import { BsArrowRightSquareFill } from 'react-icons/bs'
import styles from './Card.module.css'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5"
import { Link } from 'react-router-dom'

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
                <Link to= {html_url} className={styles.button}>
                    <BsArrowRightSquareFill/>
                </Link>

            </div>
        </section>
    )
}

export default Card