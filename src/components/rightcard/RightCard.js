import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { FiBookOpen } from "react-icons/fi";
import { VscRefresh } from "react-icons/vsc";
import { AiOutlineArrowRight } from "react-icons/ai";
const RightCard = () => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Text><b>Quick Links</b></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={{ fontSize: '12px' }}>


                    <div style={{ display: 'flex' }}>
                        <div style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <FiBookOpen color="#03A9F4" size="2em" />
                        </div>

                        <div style={{ marginLeft: 5 }}>
                            <div>
                                <b>Desktop ScoreBoard</b>
                            </div>
                            <div>
                                <p>A mini scoreboard that stays with you and updates all the current matches.</p>
                            </div>
                        </div>
                    </div>




                </ListGroupItem>


                <ListGroupItem style={{ fontSize: '12px' }}><VscRefresh color="#03A9F4" size="2em" /><b>Series Archive</b></ListGroupItem>
                <ListGroupItem style={{ fontSize: '12px' }}><AiOutlineArrowRight color="#03A9F4" size="2em" /><b>International Calender</b> </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default RightCard