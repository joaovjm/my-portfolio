import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projects.module.css'

const Projects= () => {
    //userStates é sempre usando quando precisamos buscar informações em listas (arrays)
    const [repositories, setRepositories] =useState([])

    useEffect(() => {
        const searchRepositories = async () => {
            const response = await fetch ('https://api.github.com/users/joaovjm/repos?page=1&per_page=50')
            const data = await response.json()

            setRepositories(data)
        }
        searchRepositories()

    }, [])

    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            {
                //renderização condicional, usada para verificar se há algo a ser buscado na lista. 
                //Caso sim, fará uma varredura até não encontrar mais, senão encerrara a busca.
                repositories.length > 0 ? (
                    <section className={styles.list}>
                        {
                            repositories.map((repo) => (
                                <Card 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} 
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    
                    </section>
                ): (
                    <p>Carregando repositórios...</p>
                )
            }
            
        </section>
    )
}

export default Projects