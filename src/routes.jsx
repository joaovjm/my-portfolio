import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Page404 from "./pages/Page404"
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

const AppRoutes = () => {
    return (
        <>            
            <BrowserRouter>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="*" element={<Page404 />}></Route>
                    </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
            
            
        </>
    )
}

export default AppRoutes