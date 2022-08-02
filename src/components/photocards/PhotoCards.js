import React from 'react'
import { Card, Button } from 'react-bootstrap'
import rightcardphoto1 from '/React/espn/src/assets/images/rightcard1.png'
import './PhotoCards.scss'

const PhotoCards = () => {
    return (<>
        <Card className="cardtop">
            <div id="container">
                <Card.Img variant="top" src={rightcardphoto1} />
            </div>
            <Card.Body>
                <Card.Text className="cardtext">
                    On this day: Parker transforms Cricket
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="cardinner">
            <div id="container">
                <Card.Img variant="top" src={rightcardphoto1} />
            </div>
            <Card.Body>
                <Card.Text className="cardtext">
                    On this day: Parker transforms Cricket
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="cardinner">
            <div id="container">
                <Card.Img variant="top" src={rightcardphoto1} />
            </div>
            <Card.Body>
                <Card.Text className="cardtext">
                    On this day: Parker transforms Cricket
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="cardbottom">
            <div id="container">
                <Card.Img variant="top" src={rightcardphoto1} />
            </div>
            <Card.Body>
                <Card.Text className="cardtext">
                    On this day: Parker transforms Cricket
                </Card.Text>
            </Card.Body>
        </Card>

    </>

    )
}

export default PhotoCards