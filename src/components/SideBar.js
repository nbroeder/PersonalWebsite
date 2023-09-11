import { SideBarItem } from "./SideBarItem"
import profile from './images/profilePicture.jpeg'


export const SideBar = () => {
    return (
        <div className='sideBar'>
            
            <text className='side-bar-header' align='center'>Nicholas Broeders</text>
            <img className='side-bar-image' src={profile} alt='' />
            <SideBarItem text={"About"} link={"/"}></SideBarItem>
            <SideBarItem text={"Minesweeper"} link={"/minesweeper"}></SideBarItem>
            {/* {<SideBarItem text={"Skills"} link={"/skills"}></SideBarItem>} */}
           
        </div>
    )
}
