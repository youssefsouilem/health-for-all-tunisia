import React from "react"
import teamLogo from '../assets/team_logo.png'

export default function NavBar(){
    return(
    <nav className="navBar flex items-center justify-between p-4 bg-white shadow-md">
      <img src={teamLogo} className="w-32"></img> 
        <h1 className="text-3xl font-bold text-gray-700">Health for All Tunisia</h1>
        <ul className="navLinks flex space-x-6 text-gray-700 font-medium">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Team</li>
            <li>Contact</li>

        </ul>
    </nav>   
     )
}