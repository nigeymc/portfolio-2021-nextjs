import Layout from "../components/Layout";
import { Container, Col, Alert } from 'react-bootstrap';
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import GithubProjects from "../components/GithubProjectsComponent";
import ProjectCard from "../components/NonGithubProjectCard";
import database from '../firebase/firebase';

const pageTitle = {
    firstWord: "My",
    secondWord: "Projects"
}

const { firstWord, secondWord } = pageTitle;

const MyProjectsPage = (props) => {
    const { error, loading, portfolioThumbnail, expensifyThumbnail, newFeaturesThumbnail, portfolioNextThumbnail, nonGithubProjects } = props;

    return (
        <Layout content={
            <Container fluid className="p-0">
                <section className="general-section" id="projects">
                    <PageHeader firstWord={firstWord} secondWord={secondWord} />
                    <div className="general-section__content">
                        <Col>
                            <h3>Code</h3>
                            <p>Some of my personal projects.</p>
                            <div className="cards">
                                <GithubProjects portfolioThumbnail={portfolioThumbnail} portfolioNextThumbnail={portfolioNextThumbnail} expensifyThumbnail={expensifyThumbnail} newFeaturesThumbnail={newFeaturesThumbnail} />
                            </div>
                        </Col>
                        <Col className="mt-5">
                            <h3>River Island</h3>
                            <p>Examples of some of the work I did whilst working at River Island for RI Tech. As the code is part of a private repo, below are some screenshots instead. Working examples of some of these features can be found at <a title="The River Island website" href="https://www.riverisland.com/" target="_blank">riverisland.com</a> </p>
                            <div className="cards">
                                {
                                    error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                                }
                                {loading ? (
                                    <LoadingSpinner />
                                ) : (
                                    nonGithubProjects && nonGithubProjects.map((project) => (
                                        <ProjectCard key={project.title.toLowerCase().replace(" ", "-")} thumbnail={project.thumbnail} title={project.title} category={project.category} description={project.summary} />

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

    return database.ref()
        .once('value')
        .then((snapshot) => {
            const data = snapshot.val();
            const githubProjects = data.githubProjects;
            const [githubThumbnails] = githubProjects;
            const [portfolioThumbnail, expensifyThumbnail, newFeaturesThumbnail, portfolioNextThumbnail] = githubThumbnails.thumbnails
            const nonGithubProjects = data.nonGithubProjects;
            return {
                props: { portfolioThumbnail, expensifyThumbnail, newFeaturesThumbnail, portfolioNextThumbnail, nonGithubProjects }, // will be passed to the page component as props
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

export { MyProjectsPage as default };