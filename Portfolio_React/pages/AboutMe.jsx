import { Footer, Navigation } from "../Componets"

function AboutMe() {
    return (<>
        <Navigation />
        
        <section className="d-flex flex-column align-items-center p-4">
        <h1>About ME</h1>
        <article>
            <p>Hello my name is Kendell Rennie </p>
        </article>

        </section>

        <Footer />
    </>)
}

export default AboutMe