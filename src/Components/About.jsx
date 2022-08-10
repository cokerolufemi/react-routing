import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <Link to="/Servicedetails:name">ServiceDetails</Link>
    </div>
  )
}

export default About