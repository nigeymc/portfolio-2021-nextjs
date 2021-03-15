import { Fragment } from 'react';
import Link from 'next/link';
import { Container, Col, Alert } from 'react-bootstrap';
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import JobProfileComponent from "../../components/JobProfileComponent";
import LoadingSpinner from "../../components/LoadingSpinner";
import database from '../../firebase/firebase';

const pageTitle = {
    firstWord: "Stella",
    secondWord: "&",
    thirdWord: "Dot"
}

const { firstWord, secondWord, thirdWord } = pageTitle;

const StellaDot = (props) => {
    const { stellaDot, sdSummary, error, loading } = props;

    return (
        <Layout content={
            <Fragment>
                {
                    error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                }
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <Container fluid className="p-0">
                        <section className="general-section general-section" id="experience">
                            <PageHeader firstWord={firstWord} secondWord={secondWord} />
                            <div className="general-section__content">
                                <Col>
                                    <JobProfileComponent jobTitle={stellaDot.jobTitle} dates={stellaDot.dates} website={stellaDot.website} location={stellaDot.location} summary={sdSummary.map((item, i) => <p key={i}>{item}</p>)} />
                                    <Link href={`/my-experience`}><a className="btn btn-primary" variant="primary">Back to My Experience</a></Link>
                                </Col>
                            </div>
                        </section>
                    </Container>
                )}
            </Fragment>
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

            const [, stellaDot, ,] = employment;

            const sdSummary = stellaDot.summary.reduce((total, amount) => {
                return total.concat(amount);
            }, []);

            return {
                props: {
                    stellaDot,
                    sdSummary
                }, // will be passed to the page component as props
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

export { StellaDot as default };