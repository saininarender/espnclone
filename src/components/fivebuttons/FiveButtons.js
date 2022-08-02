import React from 'react'
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import './FiveButtons.scss'

const FiveButtons = () => {
    return (

        <ButtonGroup aria-label="Basic example" style={{ width: '100%' }} >
            <Button className='buttonradius' ><MdFilterListAlt /></Button>
            <DropdownButton title="Formats" style={{ borderRadius: '0px' }} >
                <Dropdown.Item href="#/action-1"  >Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Teams">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Competitions">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <Button className='buttonradius'>Result</Button>
        </ButtonGroup >


    )
}

export default FiveButtons