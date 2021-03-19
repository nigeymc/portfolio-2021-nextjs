import { Card } from 'react-bootstrap';

const ProjectCard = (props) => (
    <Card>
        <Card.Img variant="top" src={props.thumbnail} />
        <Card.Body>
            <Card.Title>
                {props.title && props.title.toString().replace("-", " ").replace("-", " ").replace("-", " ")}
            </Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <a className="btn btn-primary mb-2" variant="primary" href={props.pageUrl} target="_blank"><img src="/images/github.svg" width="15" alt="github icon" />{/* <i className="fab fa-github"></i> */} Check it out on Github</a>
            {props.websiteUrl && <a className="btn btn-primary" variant="primary" href={props.websiteUrl} target="_blank">Vist the website</a>}
        </Card.Body>
    </Card>
)

export { ProjectCard as default }
