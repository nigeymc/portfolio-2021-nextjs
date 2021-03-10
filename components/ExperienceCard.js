import Link from 'next/link'
import { Card } from 'react-bootstrap';

const ExperienceCard = (props) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.logo} />
        <Card.Body>
            <Card.Title>
                {props.title} <br />
                {props.dates}
            </Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            <Link href={`${props.pageUrl}`}><a className="btn btn-primary" variant="primary">Learn More</a></Link>
        </Card.Body>
    </Card>
)

export { ExperienceCard as default };