import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import './ThreeButtons.scss'

const ThreeButtons = () => {
    const [buttoncolor, setbuttoncolor] = useState("buttoncss")
    const [buttoncolor1, setbuttoncolor1] = useState("buttoncss")
    const [buttoncolor2, setbuttoncolor2] = useState("buttoncss")
    const handleOnClick = () => {
        setbuttoncolor("buttonEnter")
    }
    const handleOnClick1 = () => {
        setbuttoncolor1("buttonEnter")
    }
    const handleOnClick2 = () => {
        setbuttoncolor2("buttonEnter")
    }
    const handleMouseLeave = () => {
        setbuttoncolor("buttonleave")
    }
    const handleMouseLeave1 = () => {
        setbuttoncolor1("buttonleave")
    }
    const handleMouseLeave2 = () => {
        setbuttoncolor2("buttonleave")
    }
    const handleMouseClick = () => {
        setbuttoncolor("buttonclick")
    }
    const handleMouseClick1 = () => {
        setbuttoncolor1("buttonclick")
    }
    const handleMouseClick2 = () => {
        setbuttoncolor2("buttonclick")
    }

    return (
        <div >
            <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                <Button className={buttoncolor} onMouseEnter={() => handleOnClick()} onMouseLeave={() => handleMouseLeave()} onClick={() => handleMouseClick()}>Live</Button>
                <Button className={buttoncolor1} onMouseEnter={() => handleOnClick1()} onMouseLeave={() => handleMouseLeave1()} onClick={() => handleMouseClick1()}>Upcoming</Button>
                <Button className={buttoncolor2} onMouseEnter={() => handleOnClick2()} onMouseLeave={() => handleMouseLeave2()} onClick={() => handleMouseClick2()}>Result</Button>
            </ButtonGroup >
        </div >
    )
}

export default ThreeButtons