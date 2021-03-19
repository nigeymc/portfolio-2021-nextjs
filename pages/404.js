import Link from 'next/link';
import Layout from "../components/Layout";
import { Container, Button } from 'react-bootstrap';

const Custom404 = () => {
    return (
        <Layout content={
            <Container fluid className="p-0" id="not-found">
                <section className="general-section--not-found">
                    <div className="glitch-text">
                        <h1>Error 404: Page Not Found</h1>
                    </div>
                    <Link href="/"><Button className="btn btn-primary" variant="primary" title="Return to homepage">Go home</Button></Link>
                </section>
            </Container>
        } />
    )
}

export { Custom404 as default };