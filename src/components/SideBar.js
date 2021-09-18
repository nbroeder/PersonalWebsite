import { SideBarItem } from "./SideBarItem"
import profile from './profilePicture.jpg'


export const SideBar = () => {
    return (
        <div className='sideBar'>
            <text className='side-bar-header'>Nicholas Broeders</text>
            <img className='side-bar-image' src={profile} alt='' />
            <SideBarItem text={"about"}></SideBarItem>
            <SideBarItem text={"projects"}></SideBarItem>
            <SideBarItem text={"resume"}></SideBarItem>
            <SideBarItem text={"skills"}></SideBarItem>
            <SideBarItem text={"contact me"}></SideBarItem>
        </div>
    )
}
