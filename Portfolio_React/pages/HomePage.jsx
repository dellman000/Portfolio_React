import { Navigation,Introduction,Education,Footer} from "../Componets"
// import AboutMe from './AboutMe'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Resume } from "../Componets/ResumeComponets/Resume"

export function Homepage(){

    return(<>
        <Navigation/>
        <Introduction/>
        <Education/>
        <Resume/>
        {/* <h1>homepage</h1> */}
        <Footer/>

       
    </>)
}