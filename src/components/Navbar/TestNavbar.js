import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo1 from '/React/espn/src/assets/images/logo.png'
import { AiFillAndroid, AiOutlineMenu } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";
import { BsBellFill, BsSearch } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import './TestNavbar'


const TestNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [toHide, settoHide] = useState('NO')
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo1} alt="ESPN LOGO" width='100px' height='20px' href="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => settoHide('YES')} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Live Scores" id="collasible-nav-dropdown" show={showDropdown} onMouseLeave={() => setShowDropdown(false)}
                            onMouseOver={() => setShowDropdown(true)} className="abcd">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Series" id="collasible-nav-dropdown" show={showDropdown1} onMouseLeave={() => setShowDropdown1(false)}
                            onMouseOver={() => setShowDropdown1(true)}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Home" id="collasible-nav-dropdown" show={showDropdown2} onMouseLeave={() => setShowDropdown2(false)}
                            onMouseOver={() => setShowDropdown2(true)}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Features" id="collasible-nav-dropdown" show={showDropdown3} onMouseLeave={() => setShowDropdown3(false)}
                            onMouseOver={() => setShowDropdown3(true)}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pricing" id="collasible-nav-dropdown" show={showDropdown4} onMouseLeave={() => setShowDropdown4(false)}
                            onMouseOver={() => setShowDropdown4(true)}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {toHide === 'NO' ? <Nav>
                        <Nav.Link href="#"> <AiFillAndroid style={styles.iconforfantasy} /></Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white' }}>Fantasy</Nav.Link>
                        <Nav.Link href="#home" style={{ color: 'white' }}>Edition IN</Nav.Link>
                        <Nav.Link href="#"> <IoMdMoon style={styles.iconforfantasy} /></Nav.Link>
                        <Nav.Link href="#"> <BsBellFill style={styles.iconforfantasy} /></Nav.Link>
                        <Nav.Link href="#"> <RiEnglishInput style={styles.iconforfantasy} /></Nav.Link>
                        <Nav.Link href="#"> <AiOutlineMenu style={styles.iconforfantasy} /></Nav.Link>
                        <Nav.Link href="#"> <BsSearch style={styles.iconforfantasy} /></Nav.Link>

                    </Nav> : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TestNavbar





const styles = {
    iconforfantasy: {
        marginLeft: '0px',
        color: 'white',
        fontSize: '20px'

    },
    navbarRightContainer: {
        justifyContent: 'right'
    }

};
