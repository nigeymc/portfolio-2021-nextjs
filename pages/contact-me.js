import Layout from "../components/Layout";
import { Container, Col } from 'react-bootstrap';
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import SocialIcons from "../components/SocialIcons";

const pageTitle = {
    firstWord: "Contact",
    secondWord: "Me"
}

const { firstWord, secondWord } = pageTitle;

const ContactMePage = (props) => {

    const {
        linkedIn,
        gitHub
    } = props;

    return (
        <Layout content={
            <Container fluid className="p-0">
                <section className="general-section" id="contact">
                    <PageHeader firstWord={firstWord} secondWord={secondWord} />
                    <div className="general-section__content--columns">
                        <Col md={8} lg={10}>
                            <div>
                                <p>Drop me line, or feel free to get social with me.</p>
                                <ContactForm />
                            </div>
                        </Col>
                        <Col md={4} lg={2} className="mt-5" style={{ textAlign: "center" }}>
                            <p className="mt-2">Follow me on</p>
                            <SocialIcons linkedIn={linkedIn} gitHub={gitHub} />
                        </Col>
                    </div>
                </section>
            </Container>
        } />
    )
}

export async function getStaticProps(context) {

    return database.ref()
        .once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            const { linkedIn, gitHub } = data.urls;
            return {
                props: { linkedIn, gitHub }, // will be passed to the page component as props
            };
        })
        .catch((e) => {
            console.error('Error fetching data', e);
            return {
                props: { error: true }, // will be passed to the page component as props
            };
        })
}

export { ContactMePage as default };