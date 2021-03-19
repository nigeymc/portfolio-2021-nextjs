import { useState } from 'react';
import Layout from "../components/Layout";
import { Container, Col } from 'react-bootstrap';
import PageHeader from "../components/PageHeader";
import QualificationsComponent from "../components/QualificationsComponent";
import SkillsGroups from "../components/SkillsGroups";
import SkillsList from "../components/SkillsList";
import LoadingSpinner from "../components/LoadingSpinner";
import database from '../firebase/firebase';

const pageTitle = {
    firstWord: "My",
    secondWord: "Skills"
}

const { firstWord, secondWord } = pageTitle;


const MySkillsPage = (props) => {

    const { university, school, searchList, error, loading } = props;

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const filter = searchList.filter(listItem =>
        listItem.toLowerCase().includes(text.toLocaleLowerCase().trim())
    );


    return (
        <Layout content={
            <Container fluid className="p-0">
                <section className="general-section" id="skills">
                    <PageHeader firstWord={firstWord} secondWord={secondWord} />
                    <div className="general-section__content">
                        <Col>
                            {
                                error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                            }
                            {loading ? (
                                <LoadingSpinner />
                            ) : (
                                <QualificationsComponent university={university.university} uniStudied={university.studied} uniQualification={university.qualification} other={university.other} school={school.school} schoolStudied={school.studied} schoolQualification={school.qualification} />
                            )}
                        </Col>
                        <Col className="mt-5">
                            <SkillsList searchTerm={text} handleChange={handleChange} filter={filter} />
                        </Col>

                    </div>
                </section>
            </Container>
        } />
    )
}

export async function getStaticProps(context) {
    return database.ref('skillsPage')
        .once('value')
        .then((snapshot) => {
            const skillsPage = [];

            snapshot.forEach((child) => {
                skillsPage.push({
                    ...child.val()
                });
            });
            const [languages, frameworks, services, tools, skillset, education] = skillsPage;

            const educationArr = education.education.reduce((total, amount) => {
                return total.concat(amount);
            }, []);

            const [university, school] = educationArr

            const setLanguages = languages.languages;
            const setFrameworks = frameworks.libraries_frameworks;
            const setServices = services.services;
            const setTools = tools.tools;
            const setSkillset = skillset.skillset;

            const searchList = [...setLanguages, ...setFrameworks, ...setServices, ...setTools, ...setSkillset];

            return {
                props: { university, school, searchList },
            }

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
        });
}

export { MySkillsPage as default };