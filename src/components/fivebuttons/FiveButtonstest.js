import React from 'react'
import { ButtonGroup, Button, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import './FiveButtons.scss'

const FiveButtons = () => {
    return (

        <>
            <Row>
                <Col lg="2">
                    <Button className='buttonradius' style={{ width: '100%' }} ><MdFilterListAlt /></Button>
                </Col>
                <Col lg="3">
                    <DropdownButton title="Formats" style={{ borderRadius: '0px' }} >
                        <Dropdown.Item href="#/action-1"  >Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col lg="3">
                    <DropdownButton title="Teams" style={{ width: '100%' }}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col lg="3">
                    <DropdownButton title="Competitions" style={{ width: '100%' }}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col lg="1">
                    <Button className='buttonradius' style={{ width: '100%' }}>Result</Button>
                </Col>

            </Row>

        </>


    )
}

export default FiveButtons