import Layout from "../components/Layout";
import { Container, Alert } from 'react-bootstrap';
import HomePageTitle from "../components/HomePageTitle";
import SocialIcons from "../components/SocialIcons";
import database from '../firebase/firebase';

const Home = (props) => {
    return (
        <Layout content={
            <Container fluid className="p-0">
                <section className="homepage-section" id="homepage">
                    <div className="homepage-section__content">
                        {
                            props.error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                        }
                        <HomePageTitle firstName={props.firstName} lastName={props.lastName} jobTitle={props.jobTitle} city={props.city} />
                        <SocialIcons linkedIn={props.linkedIn} gitHub={props.gitHub} />
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
            const { firstName, lastName, jobTitle, city } = data;
            const { linkedIn, gitHub } = data.urls;
            return {
                props: { firstName, lastName, jobTitle, city, linkedIn, gitHub }, // will be passed to the page component as props
            };
        })
        .catch((e) => {
            console.error('Error fetching data', e);
            return {
                props: { error: true }, // will be passed to the page component as props
            };
        })
}

export { Home as default };
