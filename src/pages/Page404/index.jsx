import styles from "./Page404.module.css"

const Page404 = () => {
    return (
        <>
           
            <h2 className={styles.error}>Algo de errado não está certo</h2>
            <div className={styles.text}>
                <span className={styles.error404}>404</span><br />
                <strong>Pagina não localizada!</strong>
            </div>
           
        </>
        
    )
}

export default Page404