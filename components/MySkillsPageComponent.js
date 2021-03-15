import React, { useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import PageHeader from "./PageHeader";
import QualificationsComponent from "./QualificationsComponent";
import SkillsList from "./SkillsList";
import LoadingSpinner from "./LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, setTextFilter } from "../actions/fetchSkillsDataAction";

const pageTitle = {
    firstWord: "My",
    secondWord: "Skills"
}

const { firstWord, secondWord } = pageTitle;

const MySkills = () => {

    const dispatch = useDispatch();

    const {
        error,
        loading,
        university,
        school,
        searchList,
        text
    } = useSelector(state => state.skillsPage);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const handleChange = (e) => {
        dispatch(setTextFilter(e.target.value))

    };

    const filter = searchList.filter(listItem =>
        listItem.toLowerCase().includes(text.toLocaleLowerCase().trim())
    );

    return (
        <Container fluid className="p-0">
            <section className="general-section" id="skills">
                <PageHeader firstWord={firstWord} secondWord={secondWord} />
                <div className="general-section__content">
                    <Col>

                    </Col>
                    <Col className="mt-5">
                        <SkillsList searchTerm={text} handleChange={handleChange} filter={filter} />
                    </Col>

                </div>
            </section>
        </Container>
    )
}

export { MySkills as default };