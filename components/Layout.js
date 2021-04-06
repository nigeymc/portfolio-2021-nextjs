import { Fragment } from "react"
import NavLink from '../components/Link';
import { Navbar, Nav } from 'react-bootstrap';
import ProfilePic from "./ProfilePic";

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar expand="lg" variant="dark" bg="primary" fixed="top" id="sideNav">
                <Navbar.Brand href="/">
                    <ProfilePic />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <div id="smallWrapper">
                        <input type="checkbox" className="hamburger-menu" />
                        <div id="bars">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="mr-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink href="/"><a className="nav-link">Home</a></NavLink></li>
                            <li className="nav-item"><NavLink href="/about-me"><a className="nav-link">About Me</a></NavLink></li>
                            <li className="nav-item"><NavLink href="/my-experience"><a className="nav-link">My Experience</a></NavLink></li>
                            <li className="nav-item"><NavLink href="/my-skills"><a className="nav-link">My Skills</a></NavLink></li>
                            <li className="nav-item"><NavLink href="/my-projects"><a className="nav-link">My Projects</a></NavLink></li>
                            <li className="nav-item"><NavLink href="/contact-me"><a className="nav-link">Contact Me</a></NavLink></li>
                        </ul>
                        <footer><img src="/images/nmk.svg" width="30" height="17" /> <span>.dev <span className="copyright">&copy;</span> {new Date().getFullYear()}</span></footer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <main>
                {props.content}
            </main>
        </Fragment>
    )
}

export { Layout as default };
