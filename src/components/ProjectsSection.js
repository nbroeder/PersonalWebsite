import React from 'react'
import {Projects} from './Projects'
import flagIcon from './images/minesweeperFlag.png'
import breastCancerIcon from './images/breastCancer.jpg'

let breastCancerDes= 'This project used artificial intelligence to determine the most accurate identifying feature between malignant and begnin tumors. The project succesfully identified cell size uniformity as the best measure of if a tumor was malignant with a success rate of 93%. We acheived this using common artificial intelligence and math libraries such as numpy and matplotlib'
let minesweeperDes = 'This project I used javascript and HTML to recreate the classic minesweeper game. The game creates a table of buttons and randomly assigns a mine to some of them. When you click on a button the number of adjacent mines is revealed. The game features a timer that keeps track of how long your game has been going for and will stop once you have found all the mines.'

export const ProjectsSection = () => {
    return (
        <div className="section" id="ProjectsSection">
             <br/>
            <text className="section-header">Projects</text>
            <Projects description={breastCancerDes} title={"Malignent Tumor Identification"} image={breastCancerIcon} link={"https://gideon2020project.github.io/linearGideon/?fbclid=IwAR31LUqqI4WpRSr197e6acsWwUYs-KljdTtrOI8diR-3KVAaTej4PSYD_S0"} ></Projects>
            <Projects description={minesweeperDes} title={"Minesweeper"} image={flagIcon} link={"https://github.com/nbroeder/Minesweeperjs"} ></Projects>
        </div>
    )
}
