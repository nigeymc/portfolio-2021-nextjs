import { useState, useEffect } from "react";
import { Container, Alert } from 'react-bootstrap';
import HomePageTitle from "./HomePageTitle";
import SocialIcons from "./SocialIcons";
import database from '../firebase/firebase';

const HomePage = (props) => {

    return (
        <Container fluid className="p-0">
            <section className="homepage-section" id="homepage">
                <div className="homepage-section__content">
                    {
                        error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
                    }
                    <HomePageTitle firstName={props.firstName} lastName={props.lastName} jobTitle={props.jobTitle} city={props.city} />
                    <SocialIcons linkedIn={props.linkedIn} gitHub={props.gitHub} />
                </div>
            </section>
        </Container>
    )
}

export { HomePage as default };


