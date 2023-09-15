import React from 'react'
import {Projects} from './Projects'
import flagIcon from './images/minesweeperFlag.png'
import breastCancerIcon from './images/breastCancer.jpg'
import faceMeshIcon from './images/face-mesh.jpg'
import gitPlaceIcon from './images/git-place-image.png'
import websiteIcon from './images/Website-image.jpg'

let breastCancerDes= 'This project used artificial intelligence to determine the most accurate identifying feature between malignant and begnin tumors. The project succesfully identified cell size uniformity as the best measure of if a tumor was malignant with a success rate of 93%. We acheived this using common artificial intelligence and math libraries such as numpy and matplotlib'
let minesweeperDes = 'This project I used javascript and HTML to recreate the classic minesweeper game. The game creates a table of buttons and randomly assigns a mine to some of them. When you click on a button the number of adjacent mines is revealed. The game features a timer that keeps track of how long your game has been going for and will stop once you have found all the mines.'
let websiteDes = 'You are already familier with this project, you\'re looking at it right now! I developed this website as a way to build my react and javascript skills as well as show off some of the cool projects I\'ve been a part of.';
let gitPlaceDes = 'This project takes the idea of Reddit\'s r/place and moves it to github. In the readme of the project users can select a tile and input the colour they want it to become. This creates a new github issue and using github actions the tile colour is updated dynamically to change before the users eyes. This project was developed as part of hackwestern 2022 and won the award for best use of github.';
let capstoneDes = 'My capstone project represented the culmination of all the hard work I had done during my undergraduate degree. My group and I created, trained, and compared several different methods of detecting and evaluating a drivers drowsiness. We deployed the best AI model to a website where we could demo it in real time with the users webcam. The website would provide feedback to the user based on the level of fatigue detected. The models detected if the users eyes were open all the way as well as mouth movements to detect yawning. ';
export const ProjectsSection = () => {
    return (
        <div className="section" id="ProjectsSection">
             <br/>
            <text className="section-header">Projects</text>
            <Projects description = {capstoneDes} title = {"Capstone Project: Driver Drowsiness Detection"} image = {faceMeshIcon} link = {"https://www.canva.com/design/DAFd-aeQEOU/tJXR4tgcn5fLtSclK0Fhjg/watch?utm_content=DAFd-aeQEOU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&fbclid=IwAR0-6KMks4aLOyY26-qo_V9rnyWJ8jA9Io1inDDn--32eHQk7M90EqilJaI"}></Projects>
            <Projects description = {gitPlaceDes} title = {"Git Place"} image = {gitPlaceIcon} link = {"https://github.com/Lemos00/git-place"}></Projects>
            <Projects description={breastCancerDes} title={"Malignent Tumor Identification"} image={breastCancerIcon} link={"https://gideon2020project.github.io/linearGideon/?fbclid=IwAR31LUqqI4WpRSr197e6acsWwUYs-KljdTtrOI8diR-3KVAaTej4PSYD_S0"} ></Projects>            
            <Projects description = {websiteDes} title = {"Personal Website"} image = {websiteIcon} link = {"https://nbroeder.github.io/PersonalWebsite/"}></Projects>
        </div>
    )
}
