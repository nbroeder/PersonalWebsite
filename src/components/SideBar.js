import { SideBarItem } from "./SideBarItem"
import profile from './images/profilePicture.jpeg'


export const SideBar = () => {
    return (
        <div className='sideBar'>
            
            <text className='side-bar-header' align='center'>Nicholas Broeders</text>
            <img className='side-bar-image' src={profile} alt='' />
            <SideBarItem text={"About"}></SideBarItem>
            <SideBarItem text={"Projects"}></SideBarItem>
            <SideBarItem text={"Skills"}></SideBarItem>
            {/*<SideBarItem text={"Resume"}></SideBarItem>*/}
            <SideBarItem text={"Contact me"}></SideBarItem>
        </div>
    )
}
