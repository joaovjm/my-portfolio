import styles from './Contact.module.css'
import { GoMail } from "react-icons/go"
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";


const Contact = () => {
    return (
        <>
            <section className={styles.contact}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar sobre.</p>
                <div className= {styles.icons}>
                    <a href="mailto:joao.oliveira18.jm@gmail.com" target='_blank' rel='noopener noreferrer'>
                        < GoMail className={styles.gradicon}/>
                    </a>
                    <a href="https://www.instagram.com/joao.oliveira18.jm/" target='_blank' rel='noopener noreferrer'>
                        <BsInstagram className={styles.gradicon}/>
                    </a>
                    <a href="https://web.whatsapp.com/send?phone=5521983046033" target='_blank' rel='noopener noreferrer'>
                        <BsWhatsapp className={styles.gradicon}/>
                    </a> 
                    <a href="https://github.com/joaovjm" target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.gradicon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/joaovjm/" target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.gradicon}/>
                    </a>        

                                    
                                            
                    
                </div>
            </section>
        
        </>
    )
}

export default Contact