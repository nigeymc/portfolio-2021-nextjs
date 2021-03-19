import { Fragment, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import LoadingSpinner from "./LoadingSpinner";
import ProjectCard from "./ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/FetchGitHubDataAction";

const GithubProjects = (props) => {

    const dispatch = useDispatch();

    const {
        error,
        loading,
        expensify,
        portfolio,
        hooks,
        next
    } = useSelector(state => state.githubData);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <Fragment>
            {
                error && <Alert className="alert__error--fetch" variant="info">Error fetching page content</Alert>
            }
            {
                loading ? (
                    <LoadingSpinner />
                ) : (
                    <Fragment>
                        <ProjectCard thumbnail={props.portfolioNextThumbnail} title={next.name} description={next.description} pageUrl={next.html_url} />
                        <ProjectCard thumbnail={props.portfolioThumbnail} title={portfolio.name} description={portfolio.description} pageUrl={portfolio.html_url} />
                        <ProjectCard thumbnail={props.expensifyThumbnail} title={expensify.name} description={expensify.description} pageUrl={expensify.html_url} websiteUrl={expensify.homepage} />
                        <ProjectCard thumbnail={props.newFeaturesThumbnail} title={hooks.name} description={hooks.description} pageUrl={hooks.html_url} />
                    </Fragment>
                )
            }
        </Fragment>
    )
}

export { GithubProjects as default };