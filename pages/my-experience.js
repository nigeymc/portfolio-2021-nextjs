import { Container, Col } from 'react-bootstrap';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ExperienceCard from "../components/ExperienceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import database from '../firebase/firebase';

const pageTitle = {
    firstWord: "My",
    secondWord: "Experience"
}

const { firstWord, secondWord } = pageTitle;

const MyExepriencePage = (props) => {
    const { loading, error, employment } = props;

    return (
        <Layout content={
            <Container fluid className="p-0">
                <section className="general-section" id="experience">
                    <PageHeader firstWord={firstWord} secondWord={secondWord} />
                    <div className="general-section__content">
                        <Col>
                            <h3>2009 - Today</h3>
                            <div className="cards">
                                {
                                    error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                                }
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (
                                    employment && employment.map((company) => (
                                        <ExperienceCard key={company.companyName} logo={company.logo} title={company.companyName} dates={company.dates} description={company.description} pageUrl={company.pageUrl} />
                                    ))

                                )}
                            </div>
                        </Col>
                    </div>
                </section>
            </Container>
        } />
    )
}

export async function getStaticProps(context) {

    return database.ref('employment')
        .once('value')
        .then((snapshot) => {
            const employment = [];

            snapshot.forEach((child) => {
                employment.push({
                    ...child.val()
                });
            });

            return {
                props: { employment }, // will be passed to the page component as props
            };

        })
        .catch((e) => {
            console.error('Error fetching data', e);
            return {
                props: { error: true }, // will be passed to the page component as props
            };
        })
        .finally(() => {
            return {
                props: { loading: false }, // will be passed to the page component as props
            };
        }); // <-- complete loading
}

export { MyExepriencePage as default };