import React from 'react'
import FiveButtons from '../fivebuttons/FiveButtons'
import PhotoCards from '../photocards/PhotoCards'
import RightCard from '../rightcard/RightCard'
import ThreeButtons from '../threeButtons/ThreeButtons'
import Footer from '../footer/Footer'
import Cards from '../cards/Cards'
import Navbar from '../Navbar/TestNavbar'
import { Row, Col, Container } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Container>

                <Row style={{ marginTop: '15px' }}>
                    <Col lg='9'>
                        <Row>
                            <ThreeButtons />
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <FiveButtons />
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Cards seconddivision={false} />
                        </Row>

                    </Col>
                    <Col>
                        <Row>
                            <RightCard />
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <PhotoCards />
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Row style={{ marginTop: '15px' }}>
                <Footer />
            </Row>
        </div >
    )
}

export default Home